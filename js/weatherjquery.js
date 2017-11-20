$(document).ready(function(){
    $('#citybutton').click(function(){
        var city = $('#city').val();
        console.log(city);
    
    var url = "http://api.openweathermap.org/data/2.5/weather?APPID=de1abf67dd420d2455bc69e2ceb2a139&q=" + city +"&units=metric&cnt=7&lang=en";
        $.getJSON(url, function(result){
            console.log(result);
            $('#saa').append('<p>Lämpötila '+result.main.temp+'C</p>');
            $('#saa').append('<p>Kosteus '+result.main.humidity+'%</p>');
        });
    });
});