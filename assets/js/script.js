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
var day1 = document.getElementById('day1');
var day2 = document.getElementById('day2');
var day3 = document.getElementById('day3');
var day4 = document.getElementById('day4');
var day5 = document.getElementById('day5');
var currentDay = document.getElementById("current-date");


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

//after city is called, pass that thru to api 2
function getApi2(lat, lon) {
   var apiCall = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=hourly,minutely&units=imperial&appid="+apiKey;
    fetch(apiCall)
   .then(function(response) {
     return response.json();
   })
    .then(function (data) {
        console.log(data);
        cdcityEl.textContent = searchInputEl.value;
        cdtempEl.textContent = data.current.temp;
        cdwindEl.textContent = data.current.wind_speed;
        cdhumidEl.textContent = data.current.humidity;
        cduviEl.textContent = data.current.uvi;
    });
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

// var f1icon = document.getElementById('icon1');
// var f2icon = document.getElementById('icon2');
// var f3icon = document.getElementById('icon3');
// var f4icon = document.getElementById('icon4');
// var f5icon = document.getElementById('icon5');


// var f1tempEl = document.getElementById('temp1');
// var f2tempEl = document.getElementById('temp2');
// var f3tempEl = document.getElementById('temp3');
// var f4tempEl = document.getElementById('temp4');
// var f5tempEl = document.getElementById('temp5');

// var f1windEl = document.getElementById('wind1');
// var f2windEl = document.getElementById('wind2');
// var f3windEl = document.getElementById('wind3');
// var f4windEl = document.getElementById('wind4');
// var f5windEl = document.getElementById('wind5');

// var f1humidEl = document.getElementById('humid1');
// var f2humidEl = document.getElementById('humid2');
// var f3humidEl = document.getElementById('humid3');
// var f4humidEl = document.getElementById('humid4');
// var f5humidEl = document.getElementById('humid5');