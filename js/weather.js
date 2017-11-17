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
        $.ajax({
            url: 'weather.json',
            cache: false,
            method: 'get',
            dataType: 'json',
            success: function(data) {
                this.setState({datas: data});
                console.log('JSON loaded');
                //console.log(data);
                //console.log(data.coord.lon);
            }.bind(this),
            error: function(xhr, status, err) {
                console.log('VIRHE: ', status, err.toString());
            }.bind(this),
        });
    },
    
    //mount
    componentDidMount: function() {
        this.getWeather();
    },
    
    //pvm
    thisDate: function(){
      moment().format('dddd');  
    },
    
    //piirrä nämä
    render: function() {
        //temperature
        var Temp;
        if (this.state.datas !== undefined) {
          Temp = <p>{this.state.datas.main.temp}</p> //celcius = -272.15
        } else {
          Temp = null;
        }
        //humidity
        var Humi;
        if (this.state.datas !== undefined) {
          Humi = <p>{this.state.datas.main.humidity}</p>
        } else {
          Humi = null;
        }

        return (
            <div>
                <form>
                    <input placeholder="Valitse paikkakunta"/>
                    <button>Hae</button><br/>
                    <button >Ma {(new Date().getDate())}.{(new Date().getMonth()+1)}</button> 
                    <button>Ti {(new Date().getDate()+1)}.{(new Date().getMonth()+1)}</button>
                    <button>Ke {(new Date().getDate()+2)}.{(new Date().getMonth()+1)}</button>
                    <button>To {(new Date().getDate()+3)}.{(new Date().getMonth()+1)}</button>
                    <button>Pe {(new Date().getDate()+4)}.{(new Date().getMonth()+1)}</button>
                    <button>La {(new Date().getDate()+5)}.{(new Date().getMonth()+1)}</button>
                    <button>Su {(new Date().getDate()+6)}.{(new Date().getMonth()+1)}</button>
                    <section id="saa">
                        <p>PVM</p>
                        {(new Date().getDate())}.{(new Date().getMonth()+1)}.{new Date().getFullYear()}
                        <p>Lämpötila</p>
                        {Temp}
                        <p>Kosteus</p>
                        {Humi}
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