var recentHistory = []
var apiKey = "aecaeed4eefe593c25f498d7c5899d1c";
var searchFormEl = document.getElementById('search-bar');
var searchInputEl = document.getElementById('city-input');
var searchBtnEl = document.getElementById('search-btn');
var searchHistoryEl = document.getElementById('recent-search');
var cdcityEl = document.getElementById('current-city')
var cdtempEl = document.getElementById('temp')
var cdwindEl = document.getElementById('wind')
var cdhumidEl = document.getElementById('humid')
var cduviEl = document.getElementById('uvi')
var day1 = document.getElementById('date1');
var day2 = document.getElementById('date2');
var day3 = document.getElementById('date3');
var day4 = document.getElementById('date4');
var day5 = document.getElementById('date5');
var currentDay = document.getElementById("current-date");
var f1icon = document.getElementById('icon1');
var f2icon = document.getElementById('icon2');
var f3icon = document.getElementById('icon3');
var f4icon = document.getElementById('icon4');
var f5icon = document.getElementById('icon5');
var f1tempEl = document.getElementById('temp1');
var f2tempEl = document.getElementById('temp2');
var f3tempEl = document.getElementById('temp3');
var f4tempEl = document.getElementById('temp4');
var f5tempEl = document.getElementById('temp5');
var f1windEl = document.getElementById('wind1');
var f2windEl = document.getElementById('wind2');
var f3windEl = document.getElementById('wind3');
var f4windEl = document.getElementById('wind4');
var f5windEl = document.getElementById('wind5');
var f1humidEl = document.getElementById('humid1');
var f2humidEl = document.getElementById('humid2');
var f3humidEl = document.getElementById('humid3');
var f4humidEl = document.getElementById('humid4');
var f5humidEl = document.getElementById('humid5');

//Dates for current and 5 day 
var today = $(currentDay);
today.text(moment().format('L'));
var dayone = $(day1);
dayone.text(moment().add(1, 'days').format('L'));
var daytwo = $(day2);
daytwo.text(moment().add(2, 'days').format('L'));
var daythree = $(day3);
daythree.text(moment().add(3, 'days').format('L'));
var dayfour = $(day4);
dayfour.text(moment().add(4, 'days').format('L'));
var dayfive = $(day5);
dayfive.text(moment().add(5, 'days').format('L'));


//city name for 1st api
searchBtnEl.addEventListener('click', function(event) {
    event.preventDefault();
});

//initiates 1st api lat and lon
searchBtnEl.addEventListener('click', getApi);

//call city first as function 
function getApi () {
    var geoApi = "http://api.openweathermap.org/geo/1.0/direct?q="+searchInputEl.value+"&appid="+apiKey;
fetch(geoApi)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    getApi2((data[0].lat), (data[0].lon));
});
}


// getting data from localStorage
let storeWeather = JSON.parse(localStorage.getItem('weather')) || [];

//after city is called, pass that thru to api 2
function getApi2(lat, lon) {
   var apiCall = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=hourly,minutely&units=imperial&appid="+apiKey;
    fetch(apiCall)
   .then(function(response) {
     return response.json();
   })
    .then(function (data) {
        console.log(data);
        storeData(cdcityEl, cdtempEl, cdwindEl,cdhumidEl,cduviEl)
        cdcityEl.textContent = searchInputEl.value + '   ';
        cdtempEl.textContent = 'Temp: ' + data.current.temp + '°F';
        cdwindEl.textContent = 'Wind' + data.current.wind_speed + ' MPH';
        cdhumidEl.textContent = 'Humidity %  ' + data.current.humidity;
        cduviEl.textContent = 'UV Index ' + data.current.uvi;
        //1
        f1icon.innerHTML = "<img src=http://openweathermap.org/img/wn/" + data.daily[0].weather[0].icon + "@2x.png>"
        f1tempEl.innerHTML = 'Temp: ' + data.daily[0].temp.max + '°F';
        f1windEl.innerHTML = 'Wind: ' + data.daily[0].wind_speed + ' MPH';
        // f1humidEl.innerHTML = 'Humidity: ' + data.daily[0].humidity + '%' ;
        //2
        f2icon.innerHTML = "<img src=http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + "@2x.png>"
        f2tempEl.innerHTML = 'Temp: ' + data.daily[1].temp.max + '°F';
        f2windEl.innerHTML = 'Wind: ' + data.daily[1].wind_speed + ' MPH';
        // f2humidEl.innerHTML = 'Humidity: ' + data.daily[1].humidity + '%' ;
        //3
        f3icon.innerHTML = "<img src=http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + "@2x.png>"
        f3tempEl.innerHTML = 'Temp: ' + data.daily[2].temp.max + '°F';
        f3windEl.innerHTML = 'Wind: ' + data.daily[2].wind_speed + ' MPH';
        // f3humidEl.innerHTML = 'Humidity: ' + data.daily[2].humidity + '%' ;
        //4
        f4icon.innerHTML = "<img src=http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + "@2x.png>"
        f4tempEl.innerHTML = 'Temp: ' + data.daily[3].temp.max + '°F';
        f4windEl.innerHTML = 'Wind: ' + data.daily[3].wind_speed + ' MPH';
        // f4humidEl.innerHTML = 'Humidity: ' + data.daily[3].humidity + '%' ;
        //5
        f5icon.innerHTML = "<img src=http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + "@2x.png>"
        f5tempEl.innerHTML = 'Temp: ' + data.daily[4].temp.max + '°F';
        f5windEl.innerHTML = 'Wind: ' + data.daily[4].wind_speed + ' MPH';
        // f5humidEl.innerHTML = 'Humidity: ' + data.daily[4].humidity + '%' ;
    });

}


// creating the search history that will be saved in localStorage
function storeData(cityName, temperature, wind, humidity, uvi) {
    let weatherObject = {
        cityName: "",
        temperature: {},
        wind: {},
        humidity: {},
        uvi: {},
    }
    weatherObject.cityName = cityName
    weatherObject.temperature = temperature
    weatherObject.wind = wind
    weatherObject.humidity = humidity
    weatherObject.uvi = uvi
    storeWeather.push(weatherObject)
    localStorage.setItem('weather', JSON.stringify(storeWeather))
}

// dynamically created buttons that have the textContent from the locally stored searches
function buttonList() {
    var newArr = []
    for (var i = 1; i < storeWeather.length; i++){
        console.log(storeWeather[i].cityName)
        if(newArr.indexOf(storeWeather[i]) === -1){
            newArr.push(storeWeather[i]);
            var cityList = document.createElement('button');
            cityList.textContent = storeWeather[i].cityName;
            searchHistoryEl.appendChild(cityList)
        }
    };
}





//LOCALSTORAGE ZONE
// var temp = 
// var 
// for (var i = 0; i < recentHistory.length; i++




// dleet belows

 //  for (var i = 0; i < data.length; i++) {
    //    var listEl = document.createElement('li');
    //    listEl.innerHTML = "<div >"
    //    listEl.textContent = searchInputEl.value;
    //    searchHistoryEl.appendChild(listEl);

// var fetchButton = document.getElementById('search-button');

    // var listEl = document.createElement('li');
    // listEl.innerHTML = "<div >"
    // listEl.textContent = searchInputEl.value;
    // searchHistoryEl.appendChild(listEl);

    //5day api

// function getApi3(lat, lon) {
//     var fiveApi = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=hourly,current,minutely&cnt=5&units=imperial&appid="+apiKey;
//     fetch(fiveApi)
//     .then(function(response) {
//         return response.json();
//     })
   
//         .then(function (data) {
//             console.log(data);
//             // .then(function (data) {
//             //     // f1icon.textContent = searchInputEl.value;
//             //     f1tempEl.textContent = data.list.0.
//             //     f1windEl.textContent = data.current.wind_speed;
//             //     f1humidEl.textContent = data.current.humidity;
//             // });
//         });

// }

