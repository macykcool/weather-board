var recentHistory = []

var apiKey = "aecaeed4eefe593c25f498d7c5899d1c";
var searchFormEl = document.getElementById('search-bar');
var searchInputEl = document.getElementById('city-input');
var searchBtnEl = document.getElementById('search-btn');
var searchHistoryEl = document.getElementById('recent-search');



//displays date up top
var currentDay = document.getElementById("current-day");


//console log city name for 1st api
searchBtnEl.addEventListener('click', function(event) {
    event.preventDefault();
   console.log(searchInputEl.value);
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
    console.log(data);
    getApi2((data[0].lat), (data[0].lon));
    getApi3((data[0].lat), (data[0].lon))

});
}

//after city is called, pass that thru to api 2
function getApi2(lat, lon) {
   var apiCall = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=hourly,daily,minutely&units=imperial&appid="+apiKey;
    fetch(apiCall)
   .then(function(response) {
     return response.json();
   })
   .then(function(data) {
    console.log(data); 
   });
}

//5day api

function getApi3(lat, lon) {
    var fiveApi = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&cnt=5&units=imperial&appid="+apiKey;
    fetch(fiveApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
}

var day1 = document.getElementById('day1');
var day2 = document.getElementById('day2');
var day3 = document.getElementById('day3');
var day4 = document.getElementById('day4');
var day5 = document.getElementById('day5');
var currentDay = document.getElementById("current-date");

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


//LOCALSTORAGE ZONE
// var temp = 
// var 
// for (var i = 0; i < recentHistory.length; i++




 //  for (var i = 0; i < data.length; i++) {
    //    var listEl = document.createElement('li');
    //    listEl.innerHTML = "<div >"
    //    listEl.textContent = searchInputEl.value;
    //    searchHistoryEl.appendChild(listEl);


// dleet belows

// var fetchButton = document.getElementById('search-button');

    // var listEl = document.createElement('li');
    // listEl.innerHTML = "<div >"
    // listEl.textContent = searchInputEl.value;
    // searchHistoryEl.appendChild(listEl);