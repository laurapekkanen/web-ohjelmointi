// Weather komponentti
var Weather = React.createClass({
    
    //intial state
    getInitialState: function() {
        return {
            loading: true,
            error: null,
        };
    },
    
    //hae json ajaxilla
    getWeather: function(){
        var url = "http://api.openweathermap.org/data/2.5/weather?APPID=95983d94fe41bc5ebaa8e558b25e915f&q=Lahti,Finland&units=metric&cnt=7&lang=en";

        $.getJSON(url, function(result){
            console.log(result);
        });
    },
    
    //mount
    componentDidMount: function() {
        this.getWeather();
    },
    
    //pvm
    /*thisDate: function(){
      moment().format('dddd');  
    },*/
    
    //piirrä nämä
    render: function() {
           //weather
        var Weat;
        if (this.state.datas !== undefined) {
          Weat = <p>{this.state.datas.weather.description}</p> 
        } else {
          Weat = null;
        }
        
        //temperature
        var Temp;
        if (this.state.datas !== undefined) {
          Temp = <p>{this.state.datas.main.temp}°C</p> 
        } else {
          Temp = null;
        }
        //humidity
        var Humi;
        if (this.state.datas !== undefined) {
          Humi = <p>{this.state.datas.main.humidity}%</p>
        } else {
          Humi = null;
        }
        
        var test;
        if (this.state.result !== undefined) {
          test = <p>{this.state.result.main.humidity}%</p>
            console.log(test)
        } else {
          test = null;
        }

        return (
            <div>
                <form>
                    <input placeholder="Valitse paikkakunta"/>
                    <button>Hae</button><br/>
                    <p>{}</p>
                    <button > {(new Date().getDate())}.{(new Date().getMonth()+1)}</button> 
                    <button> {(new Date().getDate()+1)}.{(new Date().getMonth()+1)}</button>
                    <button> {(new Date().getDate()+2)}.{(new Date().getMonth()+1)}</button>
                    <button> {(new Date().getDate()+3)}.{(new Date().getMonth()+1)}</button>
                    <button> {(new Date().getDate()+4)}.{(new Date().getMonth()+1)}</button>
                    <button> {(new Date().getDate()+5)}.{(new Date().getMonth()+1)}</button>
                    <button> {(new Date().getDate()+6)}.{(new Date().getMonth()+1)}</button>
                    <section id="saa">
                        <p>PVM</p>
                        {(new Date().getDate())}.{(new Date().getMonth()+1)}.{new Date().getFullYear()}
                        {Weat}
                        <p>Lämpötila</p>
                        {Temp}
                        <p>Kosteus</p>
                        {Humi}
                        {test}
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