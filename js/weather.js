/*var Weather = React.createClass({

    getWeather: function(){
        $.ajax({
            url: "http://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=de1abf67dd420d2455bc69e2ceb2a139",
            cache: false,
            dataType: 'json',
            success: function(data) {
                this.showWeather({datas: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.log('VIRHE: ', status, err.toString());
            }.bind(this),
        });
    },

    showWeather(data) {
        $.each(data.weather, function(index, weather) {
            $("#saa").append("<li>"+weather.id+" " +weather.main+ " " + weather.description+"</li>");
        });
    }
    
   render: function() {
                return (
                    <p>{this.props.message}</p>
                );
            }
});*/

    


var Weather = React.createClass({
    getWeather: function(){
        $.ajax({
            url: "http://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=de1abf67dd420d2455bc69e2ceb2a139",
            cache: false,
            dataType: 'json',
            success: function(data) {
                this.showWeather({datas: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.log('VIRHE: ', status, err.toString());
            }.bind(this),
        });
    },

    
    render: function() {
        return (
            <div>
                <form>
                    <input placeholder="Valitse paikkakunta"/>
                    <button>Hae</button><br/>
                    <button>Ma</button>
                    <button>Ti</button>
                    <button>Ke</button>
                    <button>To</button>
                    <button>Pe</button>
                    <button>La</button>
                    <button>Su</button>
                    <section id="saa">
                        tänne sää tiedot?
                    </section>
                </form>
            </div>
        );
    }
});


ReactDOM.render(
    <Weather />, 
    document.getElementById("root")
);