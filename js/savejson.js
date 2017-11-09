//haetaan json
//JSOOON
var weather = new Array();

function loadJSON() {
	ajax("http://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=de1abf67dd420d2455bc69e2ceb2a139", function(response) {
		//console.log("response = " + response);
		// create a json object
		var JSONObject = JSON.parse(response);
		weather = JSONObject.weather;
		//console.log(talot);
		for (var i=0;i<weather.length;i++) {
			showWeather(i);	
		}
	});
}

function ajax(url, fn) {
	var req;
	if (window.XMLHttpRequest) {
		req = new XMLHttpRequest();
	} else {
		req = new ActiveXObject('Microsoft.XMLHTTP');
	}
	req.onreadystatechange = function() {
		if (req.readyState == 4 && req.status == 200) {
			fn(req.responseText);
		}
	}
	req.open('GET', url, true);
	req.send();
}

function showWeather(index) {
	// uusi div	
	var wetherDiv = document.createElement("div");
	wetaherDiv.setAttribute("class","weatherContainer");
	
	var p1 = document.createElement("p");
	p1.setAttribute("class","otsikko");
	var text = document.createTextNode(weather[index].id);	
	p1.appendChild(text);

	var p2 = document.createElement("p");
	var text = document.createTextNode(weather[index].main);	
	p2.appendChild(text);

	var p3 = document.createElement("p");
	p3.setAttribute("class","kuvaus");
	var text = document.createTextNode(weather[index].description);	
	p3.appendChild(text);

	var p4 = document.createElement("p");
	var text = document.createTextNode(weather[index].icon);	
	p4.appendChild(text);

	taloDiv.appendChild(p1);
	taloDiv.appendChild(p2);
	taloDiv.appendChild(p3);
	taloDiv.appendChild(p4);
	
	// talot div
	var weatherDiv = document.getElementById("root");
	
	weathertDiv.appendChild(weatherDiv);
}

//tää yrittäis tallentaa sen tiedostoon...
/*function saveJson(data){
 var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    // returns a URL you can use as a href
    return textFile;
  };
}*/

//tai jtn


