var apiKey = "aecaeed4eefe593c25f498d7c5899d1c";
var apiCall = "api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+apiKey;
var lat ;
var lon  ;
var searchFormEl = document.getElementById('search-bar');
var searchInputEl = document.getElementById('city-input');
var searchBtnEl = document.getElementById('search-btn');
var searchHistoryEl = document.getElementById('recent-search');
// var favesEl = document.getElementById('current-weather');


searchBtnEl.addEventListener('click', function(event) {
    event.preventDefault();
    // var key = searchInputEl.value;
   console.log(searchInputEl.value);
  
   
    var listEl = document.createElement('li');
    listEl.innerHTML = "<div >"
    listEl.textContent = searchInputEl.value;
    searchHistoryEl.appendChild(listEl);
    
});
