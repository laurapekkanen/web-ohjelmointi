//json taso? onko tarpeellinen?
var cols = [
    {key: 'coord', label: 'lon', label: 'lat'},
    {key: 'weather', label: 'id', label: 'main', label: 'description', label: 'icon'},
    {key: 'base'},
    {key: 'main', label: 'temp', label: 'pressure', label: 'humidity', label: 'temp_min', label: 'temp_max'},
    {key: 'visibility'},
    
];

// Weather komponentti
var Weather = React.createClass({
    
    //intial state
    getInitialState: function() {
        return {
            loading: true,
            error: null,
            data: cols
        };
    },
    
    //hae json ajaxilla
    getWeather: function(){
        $.ajax({
            url: 'weather.json',
            cache: true,
            method: 'get',
            dataType: 'json',
            success: function(data) {
                this.setState({datas: data});
                console.log('JSON loaded');
            }.bind(this),
            error: function(xhr, status, err) {
                console.log('VIRHE: ', status, err.toString());
            }.bind(this),
        });
    },
    
    //mount
    componentDidMount: function() {
        this.getWeather();
        //console.log("ggr");
    },
    
    //piirrä nämä
    render: function() {
        var cols = this.props.cols;
        return (
            <div>
                <form>
                    <input placeholder="Valitse paikkakunta"/>
                    <button>Hae</button><br/>
                    <button >Ma {this.cols.coord.lat}</button> //miten tänne esitetään? tarvitaanko muuttujia?
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