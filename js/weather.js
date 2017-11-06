var Weather = React.createClass({

    getWeather: function(){
        $.ajax({
            url: "http://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=de1abf67dd420d2455bc69e2ceb2a139",
            cache: false,
            dataType: 'json',
            success: function(data) {
                this.setState({datas: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.log('VIRHE: ', status, err.toString());
            }.bind(this),
        });
    },

    function showWeather(data) {
        $.each(data.weather, function(index, weather) {
            $("#saa").append("<li>"+weather.id+" " +weather.main+ " " + weather.description+"</li>");
        });
    }

});

ReactDOM.render(
    <Weather />, 
    document.getElementById("root")
);