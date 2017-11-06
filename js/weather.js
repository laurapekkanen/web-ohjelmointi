/*var Weather = React.createClass({
*/
    $(document).ready(function(){
        $.ajax({
            url: "http://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=de1abf67dd420d2455bc69e2ceb2a139",
            cache: false
        }).done(function(data) {
            console.log("done");
            showWeather(data);        
        }).fail(function() {
            console.log("error");
        }).always(function() {
            console.log("complete");
        });
    });

    function showWeather(data) {
        $.each(data.weather, function(index, weather) {
            $("#saa").append("<li>"+weather.id+" " +weather.main+ " " + weather.description+"</li>");
        });
    }

/*});

ReactDOM.render(
    <Weather />, 
    document.getElementById("root")
);*/