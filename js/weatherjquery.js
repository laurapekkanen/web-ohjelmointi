$(document).ready(function(){
    $('#citybutton').click(function(){
        var city = $('#city').val();
        console.log(city);
        
        var url ="http://api.openweathermap.org/data/2.5/forecast?q="+ city +"&units=metric&lang=en&APPID=de1abf67dd420d2455bc69e2ceb2a139"
        $.getJSON(url, function(result){
            console.log(result);
             $('#saa').append('<p>'+result.list[0+7].dt_txt+'</p>');
            $('#saa').append('<p>Lämpötila '+result.list[0].main.temp+'°C</p>');
             $('#saa').append('<p>Kosteus '+result.list[0].main.humidity+'%</p>');

         
        });
    });
   var lang = moment('2017-03');
    moment.locale('fi');    
    console.log(lang.format('MMMM'));
    var filang = moment('2017-03');
    console.log(filang.format('MMMM'));
    
    
    $('#eka').append(moment().format('LL'));
    $('#toka').append(moment().add(1, 'days').format('dddd'));
    $('#kolmas').append(moment().add(2, 'days').format('dddd'));
    $('#neljas').append(moment().add(3, 'days').format('dddd'));
    $('#viides').append(moment().add(4, 'days').format('dddd'));
    
});