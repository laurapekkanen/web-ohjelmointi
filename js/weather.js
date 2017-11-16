// Weather komponentti
var Weather = React.createClass({
    
    //intial state
    getInitialState: function() {
        return {
            loading: true,
            error: null,
            mja: 'Arska',
            datas: null
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
                this.setState({mja: 'Laura'});
                console.log('JSON loaded');
                console.log(data);
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
    
    //piirrä nämä
    render: function() {
        //var data = this.props.data;
        //console.log(data);
        return (
            <div>
                <form>
                    <input placeholder="Valitse paikkakunta"/>
                    <button>Hae</button><br/>
                    <button >{this.state.datas} </button> 
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