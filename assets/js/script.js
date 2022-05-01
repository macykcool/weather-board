var apiKey = "aecaeed4eefe593c25f498d7c5899d1c";
var searchFormEl = document.getElementById('search-bar');
var searchInputEl = document.getElementById('city-input');
var searchBtnEl = document.getElementById('search-btn');
var searchHistoryEl = document.getElementById('recent-search');
// var favesEl = document.getElementById('current-weather');

//call city first as function this workssss yassss bless Hector
function getApi () {
    var geoApi = "http://api.openweathermap.org/geo/1.0/direct?q="+searchInputEl.value+"&appid="+apiKey;
    fetch(geoApi)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    getApi2((data[0].lat), (data[0].lon))
});
}


function getApi2(lat, lon) {
   var apiCall = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=imperial&appid="+apiKey;
    fetch(apiCall)
   .then(function(response) {
     return response.json();
   })
   .then(function(data) {
    console.log(data);

    //  for (var i = 0; i < data.length; i++) {
    //    var listEl = document.createElement('li');
    //    listEl.innerHTML = "<div >"
    //    listEl.textContent = searchInputEl.value;
    //    searchHistoryEl.appendChild(listEl);
     
   });
}

searchBtnEl.addEventListener('click', getApi);





searchBtnEl.addEventListener('click', function(event) {
    event.preventDefault();
    // var key = searchInputEl.value;
   console.log(searchInputEl.value);
  
   
    // var listEl = document.createElement('li');
    // listEl.innerHTML = "<div >"
    // listEl.textContent = searchInputEl.value;
    // searchHistoryEl.appendChild(listEl);
    
});


var fetchButton = document.getElementById('search-button');

