//var apiKey = "f88a998c51b451c19a748e5ef7a3b3b3"

$("#brewerySearch").on("click", function() {
    var cityName = $("#citySearchField").val()
    console.log("cityName", cityName)
    breweryInfo(cityName)
    //availableBeers(beerName)
})

function breweryInfo(cityName) {
    var queryURL = `https://api.openbrewerydb.org/breweries?by_city=${cityName}&per_page=50&sort=+name`
    $.ajax({method: "GET", url: queryURL})
    .then(function(response) {
        console.log("response", response)
        console.log("response", response.list, response.list.length)
        for(var i = 0; i < response.list.length; i=i+8)
        $("#breweryInfo").prepend(`<div class="card">
            <p>Name of City: ${cityName}</p>
            <p>Brewery Type: ${response.name}</p>
            <p>Address: ${respone.street}</p>
            <p>Website: ${response.website_url}</p></div>`)
    })
}

//function breweryInfo(cityName) {
//    var queryURL = `https://api.openbrewerydb.org/breweries?by_city=${cityName}&per_page=50&sort=+name`
//    $.ajax({method: "GET", url: queryURL})
//    .then(function(response) {
//        console.log("response", response.list, response.list.length)
//        for(var i = 0; i < response.list.length; i++) {
//            $("#breweryInfo").append(`${response.list[i]}`)
//            console.log(response.list[i])
//            console.log(response.list[i].main.temp, response.list[i].wind.speed,response.list[i].main.humidity, response.list[i].weather[0].main,response.list[i].weather[0].icon)
//            $("#breweryInfo").append(`<div class="card">
//            <p>Name of City: ${cityName}</p>
//            <p>Brewery Type: ${response.name}</p>
//            <p>Address: ${respone.street}</p>
//            <p>Website: ${response.website_url}</p></div>`)
//        }
//    })
//}