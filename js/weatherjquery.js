$(document).ready(function(){
    //kaupunki
    $('#citybutton').click(function(){
                var city = $('#city').val();
                console.log(city);
        
        //syötetty kaupunki
        var city = $('#city').val();
        console.log(city);
    
        //openweather 5 päivää json url
        var url ="http://api.openweathermap.org/data/2.5/forecast?q="+ city +"&units=metric&lang=en&APPID=de1abf67dd420d2455bc69e2ceb2a139"

        //hae json
        $.getJSON(url, function(result){
            //console.log(result);

            //tulostaa tiedot
             $('#saa').append('<p>'+result.list[0].dt_txt+'</p>');
             $('#saa').append('<p>Lämpötila '+result.list[0].main.temp+'°C</p>');
             $('#saa').append('<p>Kosteus '+result.list[0].main.humidity+'%</p>');
        });
        
        //ensimmäinen päivä
        $('#eka').click(function(){
                $.getJSON(url, function(result){
                //console.log(result);

                //tulostaa tiedot
                 $('#saa').append('<p>'+result.list[0].dt_txt+'</p>');
                 $('#saa').append('<p>Lämpötila '+result.list[0].main.temp+'°C</p>');
                 $('#saa').append('<p>Kosteus '+result.list[0].main.humidity+'%</p>');
            });
        }); 
        
        //toinen päivä
        $('#toka').click(function(){
                $.getJSON(url, function(result){
                //console.log(result);

                //tulostaa tiedot
                 $('#saa').append('<p>'+result.list[0+8].dt_txt+'</p>');
                 $('#saa').append('<p>Lämpötila '+result.list[0+8].main.temp+'°C</p>');
                 $('#saa').append('<p>Kosteus '+result.list[0+8].main.humidity+'%</p>');
            });
        });   
        
        //kolmas päivä
        $('#kolmas').click(function(){
                $.getJSON(url, function(result){
                //console.log(result);

                //tulostaa tiedot
                 $('#saa').append('<p>'+result.list[0+16].dt_txt+'</p>');
                 $('#saa').append('<p>Lämpötila '+result.list[0+16].main.temp+'°C</p>');
                 $('#saa').append('<p>Kosteus '+result.list[0+16].main.humidity+'%</p>');
            });
        }); 
        
        //neljäs päivä
        $('#neljas').click(function(){
                $.getJSON(url, function(result){
                //console.log(result);

                //tulostaa tiedot
                 $('#saa').append('<p>'+result.list[0+24].dt_txt+'</p>');
                 $('#saa').append('<p>Lämpötila '+result.list[0+24].main.temp+'°C</p>');
                 $('#saa').append('<p>Kosteus '+result.list[0+24].main.humidity+'%</p>');
            });
        });
        
        //viides päivä
        $('#viides').click(function(){
                $.getJSON(url, function(result){
                //console.log(result);

                //tulostaa tiedot
                 $('#saa').append('<p>'+result.list[0+32].dt_txt+'</p>');
                 $('#saa').append('<p>Lämpötila '+result.list[0+32].main.temp+'°C</p>');
                 $('#saa').append('<p>Kosteus '+result.list[0+32].main.humidity+'%</p>');
            });
        });
    });
    

    
    //moment js päivät
    moment.locale('fi');     
    $('#eka').append(moment().format('LL'));
    $('#toka').append(moment().add(1, 'days').format('dddd'));
    $('#kolmas').append(moment().add(2, 'days').format('dddd'));
    $('#neljas').append(moment().add(3, 'days').format('dddd'));
    $('#viides').append(moment().add(4, 'days').format('dddd'));
    
    
    
});