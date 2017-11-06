var Weather = React.createClass({

    $(document).ready(function(){
        $.ajax({
            url: "",
            cache: false
        }).done(function(data) {
            console.log("done");
            showWeather(data);        
        }).fail(function() {
            console.log("error");
        }).always(function() {
            console.log("complete");
        });
    });

    function showWeather(data) {
        $.each(data.friends, function(index, friend) {
            $("#friendsList").append(tänne muotoilut);
        });
    }

});

ReactDOM.render(
    <Weather />, 
    document.getElementById("root")
);