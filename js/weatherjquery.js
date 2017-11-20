$(document).ready(function(){
    $('#citybutton').click(function(){
        var city = $('#city').val();
        console.log(city);
    
   // var url = "http://api.openweathermap.org/data/2.5/weather?APPID=de1abf67dd420d2455bc69e2ceb2a139&q=" + city +"&units=metric&cnt=7&lang=fi";
        var url ="http://api.openweathermap.org/data/2.5/forecast?q="+ city +"&units=metric&lang=en&APPID=de1abf67dd420d2455bc69e2ceb2a139"
        $.getJSON(url, function(result){
            console.log(result);
             $('#root').append('<p>'+result.list[0].dt_txt+'</p>');
            $('#root').append('<p>Lämpötila '+result.list[0].main.temp+'°C</p>');
             $('#root').append('<p>Kosteus '+result.list[0].main.humidity+'%</p>');
        });
    });
});