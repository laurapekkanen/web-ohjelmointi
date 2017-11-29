$(document).ready(function(){
    //hae kaupunki
    $('#citybutton').click(function(){
        //nollaa kaupunki??
        
        
        //syötetty kaupunki
        var city = $('#city').val(); 
        console.log(city);
    
        //openweather 5 päivää json url
        var url ="http://api.openweathermap.org/data/2.5/forecast?q="+ city +"&units=metric&lang=en&APPID=de1abf67dd420d2455bc69e2ceb2a139"

        //hae json
        $.getJSON(url, function(result){
            console.log(result);
            //uudestaan tässä, jotta ei poimi kaikkia syötettyjä kaupunkeja
            var city = $('#city').val(); 
            $('#saa').append('<p src="weather.json">'+result.list[0+7].weather.icon+'</p>');
            $('#saa').append('<p>'+result.list[0+7].dt_txt+'</p>');
            $('#saa').append('<p>Lämpötila '+result.list[0].main.temp+'°C</p>');

            //console.log(result);
            //tyhjennä vanhat tiedot
            $('#saa').empty();
            //tulostaa tiedot
             $('#saa').append('<p>'+city+'</p>').css("text-transform","capitalize");
             $('#saa').append('<p>'+moment().format('l')+'</p>');
             $('#saa').append('<p>Lämpötila '+result.list[0].main.temp+'°C</p>');

             $('#saa').append('<p>Kosteus '+result.list[0].main.humidity+'%</p>');
        });
        
        //ensimmäinen päivä
        $('#eka').click(function(){
            //uudestaan tässä, jotta ei poimi kaikkia syötettyjä kaupunkeja
            var city = $('#city').val(); 
                $.getJSON(url, function(result){
                //console.log(result);
                //tyhjennä vanhat tiedot
                $('#saa').empty();
                //tulostaa tiedot
                 $('#saa').append('<p>'+city+'</p>').css("text-transform","capitalize");
                 $('#saa').append('<p>'+moment().format('l')+'</p>');
                 $('#saa').append('<p>Lämpötila '+result.list[0].main.temp+'°C</p>'); //klo 12
                 $('#saa').append('<p>Kosteus '+result.list[0].main.humidity+'%</p>');
                 console.log(city);
            });
        }); 
        
        //toinen päivä
        $('#toka').click(function(){
            //uudestaan tässä, jotta ei poimi kaikkia syötettyjä kaupunkeja
            var city = $('#city').val(); 
                $.getJSON(url, function(result){
                //console.log(result);
                //tyhjennä vanhat tiedot
                $('#saa').empty();
                //tulostaa tiedot
                 $('#saa').append('<p>'+city+'</p>').css("text-transform","capitalize");
                 $('#saa').append('<p>'+moment().add(1, 'days').format('l')+'</p>');
                 $('#saa').append('<p>Lämpötila '+result.list[0+8].main.temp+'°C</p>'); //klo 12 + 24h
                 $('#saa').append('<p>Kosteus '+result.list[0+8].main.humidity+'%</p>');
                 console.log(city);
            });
        });   
        
        //kolmas päivä
        $('#kolmas').click(function(){
            //uudestaan tässä, jotta ei poimi kaikkia syötettyjä kaupunkeja
            var city = $('#city').val(); 
                $.getJSON(url, function(result){
                //console.log(result);
                //tyhjennä vanhat tiedot
                $('#saa').empty();
                //tulostaa tiedot
                 $('#saa').append('<p>'+city+'</p>').css("text-transform","capitalize");
                 $('#saa').append('<p>'+moment().add(2, 'days').format('l')+'</p>');
                 $('#saa').append('<p>Lämpötila '+result.list[0+16].main.temp+'°C</p>'); //klo 12 + 48h
                 $('#saa').append('<p>Kosteus '+result.list[0+16].main.humidity+'%</p>');
                 console.log(city);
            });
        }); 
        
        //neljäs päivä
        $('#neljas').click(function(){
            //uudestaan tässä, jotta ei poimi kaikkia syötettyjä kaupunkeja
            var city = $('#city').val(); 
                $.getJSON(url, function(result){
                //console.log(result);
                //tyhjennä vanhat tiedot
                $('#saa').empty();
                //tulostaa tiedot
                 $('#saa').append('<p>'+city+'</p>').css("text-transform","capitalize");
                 $('#saa').append('<p>'+moment().add(3, 'days').format('l')+'</p>');
                 $('#saa').append('<p>Lämpötila '+result.list[0+24].main.temp+'°C</p>'); //klo 12 + 72h
                 $('#saa').append('<p>Kosteus '+result.list[0+24].main.humidity+'%</p>');
                 console.log(city);
            });
        });
        
        //viides päivä
        $('#viides').click(function(){
            //uudestaan tässä, jotta ei poimi kaikkia syötettyjä kaupunkeja
            var city = $('#city').val(); 
                $.getJSON(url, function(result){
                //console.log(result);
                //tyhjennä vanhat tiedot
                $('#saa').empty();
                //tulostaa tiedot
                 $('#saa').append('<p>'+city+'</p>').css("text-transform","capitalize");
                 $('#saa').append('<p>'+moment().add(4, 'days').format('l')+'</p>');
                 $('#saa').append('<p>Lämpötila '+result.list[0+32].main.temp+'°C</p>'); //klo 12 + 96h
                 $('#saa').append('<p>Kosteus '+result.list[0+32].main.humidity+'%</p>');
                 console.log(city);
            });
        });
    });


   /*var lang = moment('2017-03');
    moment.locale('fi');    
    console.log(lang.format('MMMM'));
    var filang = moment('2017-03');
    console.log(filang.format('MMMM'));*/


    //moment js päivät
    moment.locale('fi');     
    $('#eka').append(moment().format('dddd<br>l'));
    $('#toka').append(moment().add(1, 'days').format('dddd<br>l'));
    $('#kolmas').append(moment().add(2, 'days').format('dddd<br>l'));
    $('#neljas').append(moment().add(3, 'days').format('dddd<br>l'));
    $('#viides').append(moment().add(4, 'days').format('dddd<br>l'));
    
    
                                 
        
});