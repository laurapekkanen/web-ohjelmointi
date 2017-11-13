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

     
function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}

// this requests the file and executes a callback with the parsed result once
//   it is available
fetchJSONFile('weather.json', function(data){
    // do something with your data
    console.log(data);
});  



var Weather = React.createClass({
    getWeather: function(){
        $.ajax({
            url: 'weather.json',
            cache: true,
            method: 'get',
            dataType: 'json',
            success: function(data) {
                this.setState({datas: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.log('VIRHE: ', status, err.toString());
            }.bind(this),
        });
    },
    

    componentDidMount: function() {
        this.getWeather();
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