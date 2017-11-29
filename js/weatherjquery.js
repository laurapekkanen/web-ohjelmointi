$(document).ready(function(){
    //kaupunki
    $('#citybutton').click(function(){
        
        //syötetty kaupunki
        var city = $('#city').val();
        console.log(city);
    
        //openweather 5 päivää json url

        var url ="http://api.openweathermap.org/data/2.5/forecast?q="+ city +"&units=metric&lang=en&APPID=de1abf67dd420d2455bc69e2ceb2a139"

        //hae json
        $.getJSON(url, function(result){

            console.log(result);
          
            $('#saa').append('<p>'+result.list[0+7].dt_txt+'</p>');
            $('#saa').append('<p>Lämpötila '+result.list[0].main.temp+'°C</p>');

            //console.log(result);
            //tyhjennä vanhat tiedot
            $('#saa').empty();
            //tulostaa tiedot
            $('#saa').append('<img src="http://openweathermap.org/img/w/" + result.list[0].weather.icon + ".png">');
            $('#saa').append(city+'<br>').css("text-transform","capitalize");
            $('#saa').append(moment().format('l'));
            $('#saa').append('<p>Lämpötila '+result.list[0].main.temp+'°C</p>');

            $('#saa').append('<p>Kosteus '+result.list[0].main.humidity+'%</p>');
        });
        
        //ensimmäinen päivä
        $('#eka').click(function(){
                $.getJSON(url, function(result){
                //console.log(result);
                //tyhjennä vanhat tiedot
                $('#saa').empty();
                //tulostaa tiedot
                 $('#saa').append(city+'<br>').css("text-transform","capitalize");
                 $('#saa').append(moment().format('l'));
                 $('#saa').append('<p>Lämpötila '+result.list[0].main.temp+'°C</p>');
                 $('#saa').append('<p>Kosteus '+result.list[0].main.humidity+'%</p>');
            });
        }); 
        
        //toinen päivä
        $('#toka').click(function(){
                $.getJSON(url, function(result){
                //console.log(result);
                //tyhjennä vanhat tiedot
                $('#saa').empty();
                //tulostaa tiedot
                 $('#saa').append(city+'<br>').css("text-transform","capitalize");
                 $('#saa').append(moment().add(1, 'days').format('l'));
                 $('#saa').append('<p>Lämpötila '+result.list[0+8].main.temp+'°C</p>');
                 $('#saa').append('<p>Kosteus '+result.list[0+8].main.humidity+'%</p>');
            });
        });   
        
        //kolmas päivä
        $('#kolmas').click(function(){
                $.getJSON(url, function(result){
                //console.log(result);
                //tyhjennä vanhat tiedot
                $('#saa').empty();
                //tulostaa tiedot
                 $('#saa').append(city+'<br>').css("text-transform","capitalize");
                 $('#saa').append(moment().add(2, 'days').format('l'));
                 $('#saa').append('<p>Lämpötila '+result.list[0+16].main.temp+'°C</p>');
                 $('#saa').append('<p>Kosteus '+result.list[0+16].main.humidity+'%</p>');
            });
        }); 
        
        //neljäs päivä
        $('#neljas').click(function(){
                $.getJSON(url, function(result){
                //console.log(result);
                //tyhjennä vanhat tiedot
                $('#saa').empty();
                //tulostaa tiedot
                 $('#saa').append(city+'<br>').css("text-transform","capitalize");
                 $('#saa').append(moment().add(3, 'days').format('l'));
                 $('#saa').append('<p>Lämpötila '+result.list[0+24].main.temp+'°C</p>');
                 $('#saa').append('<p>Kosteus '+result.list[0+24].main.humidity+'%</p>');
            });
        });
        
        //viides päivä
        $('#viides').click(function(){
                $.getJSON(url, function(result){
                //console.log(result);
                //tyhjennä vanhat tiedot
                $('#saa').empty();
                //tulostaa tiedot
                 $('#saa').append(city+'<br>').css("text-transform","capitalize");
                 $('#saa').append(moment().add(4, 'days').format('l'));
                 $('#saa').append('<p>Lämpötila '+result.list[0+32].main.temp+'°C</p>');
                 $('#saa').append('<p>Kosteus '+result.list[0+32].main.humidity+'%</p>');
            });
        });
    });


   var lang = moment('2017-03');
    moment.locale('fi');    
    console.log(lang.format('MMMM'));
    var filang = moment('2017-03');
    console.log(filang.format('MMMM'));


    //moment js päivät
    moment.locale('fi');     
    $('#eka').append(moment().format('l'));
    $('#toka').append(moment().add(1, 'days').format('l'));
    $('#kolmas').append(moment().add(2, 'days').format('l'));
    $('#neljas').append(moment().add(3, 'days').format('l'));
    $('#viides').append(moment().add(4, 'days').format('l'));
    
    
                                 
        
});