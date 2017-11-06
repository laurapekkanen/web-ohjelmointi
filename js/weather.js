$options["apikey"] = "7494a2ce-51cc-4969-998c-dd0074bf396c";
$options["fmisid"] = "101004";
 
// Global Radiation for last 36 hours
$options["param"] = "GLOB_1MIN";
$options["stored_query_id"] = "fmi::observations::radiation::timevaluepair";
$options["timestep"] = 5; // 5 min
$options["starttime"] = date("YmdHi", mktime(date("H") - 36, 0, 0, date("m"), date("d"), date("Y")));
$array = fetchFmiOpenData($options);
$glob1min = createCoordinates($array, "time", $options["param"]);
 
function fetchFmiOpenData($options)
{
    $url = "http://data.fmi.fi/fmi-apikey/".$options["apikey"]."/wfs?request=getFeature&storedquery_id=".$options["stored_query_id"]."&crs=EPSG::3067&timestep=".$options["timestep"]."&fmisid=".$options["fmisid"]."&parameters=".$options["param"]."&starttime=".$options["starttime"];
    $response_xml_data = file_get_contents ($url);
    $result = simplexml_load_string($response_xml_data);
 
    // This is the trick to get what you want from the XML with SimpleXML, for explanation see http://www.php.net/manual/en/simplexmlelement.children.php
    $data = $result->children("wfs", true)->member->children("omso", true)->PointTimeSeriesObservation->children("om", true)->result->children("wml2", true)->MeasurementTimeseries;
 
    $array = array();
    $i = 0;
    foreach($data->point as $key => $value)
    {
        $array[$i]["time"] = strtotime($value->MeasurementTVP->time);
        $array[$i]["timestamp"] = (string)$value->MeasurementTVP->time;
        $array[$i][$options["param"]] = (string)$value->MeasurementTVP->value;
 
        $i++;
    }
    return $array;
}
 
function createCoordinates($array, $xindex, $yindex)
{
    $coordinates = "";
    $i = 1;
    $daylight = 3;
    if(date("I") == 0) // Winter time
    {
        $daylight = 2;
    }
    $localtime = $daylight * 3600000;
    foreach($array as $index => $value)
    {
        // Multiply by 1000 because Javascript uses milliseconds instead of seconds
        if($xindex == "time")
        {
            $value[$xindex] = 1000 * $value[$xindex] + $localtime;
        }
        $coordinates .= "[".$value[$xindex].",".$value[$yindex]."]";
        if(isset($array[$index + 1]))
        {
            $coordinates .= ",";
        }
    }
    $coordinates = "[".$coordinates."]";
 
    return $coordinates; // This string returned is ready to be used in Flot.
}