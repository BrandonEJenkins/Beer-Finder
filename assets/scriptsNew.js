/*      Beer Finder Application JS      */


$( document ).ready(function () {


    var userBrandSearchInput;
    var responseBreweryCity;
    var responseBreweryState;

    var stateLocalStorage = window.localStorage.getItem("userStateDropdownSelection");
    var brandLocalStorage = window.localStorage.getItem("userBrandSearchInput");

    userStateDropdownSelection = stateLocalStorage;
    userBrandSearchInput = brandLocalStorage;

    getBreweryDetails();


    $('.brandBtn').click(function (event) {


        event.preventDefault();

        $('.cardDiv').empty();

        userStateDropdownSelection = $('#inputState option:selected').text();
        userBrandSearchInput = $('#brandSearchInput').val();

        window.localStorage.setItem("userStateDropdownSelection", userStateDropdownSelection);
        window.localStorage.setItem("userBrandSearchInput", userBrandSearchInput);

        getBreweryDetails();


    })


    function getBreweryDetails() {


        var queryURL = "https://api.openbrewerydb.org/breweries?by_name=" + userBrandSearchInput + "&by_state=" + userStateDropdownSelection + "&sort=+name&per_page=15";

        $.ajax({
            url: queryURL,
            methoed: 'GET',
        }).then(function (response) {
            
            console.log(response.length);

            for (let i =0; i < response.length; i++) {


                responseBreweryCity = response[i].city;
                responseBreweryState = response[i].state;

                $('.cardDiv').append(`

                    <div class="card">
                        <div class="card-divider">
                            <h4>${response[i].name}</h4>
                        </div>

                        <div class="card-section">
                            <h5>Located at: <h5>
                            <div>${response[i].street}</div>
                            <div>${response[i].city}, ${response[i].state}</div>
                            <div>${response[i].brewery_type}</div>
                            <h6>${response[i].website_url}</h6>
                        </div>
                    </div>

                `);

            }

            console.group('Inside getBreweryDetails function');
            console.log('Outside of for loop');
            console.groupEnd();

            getCovidReport();

        })

    }


    function getCovidReport() {


        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://covid-19-statistics.p.rapidapi.com/reports?region_province=" + responseBreweryState + "&iso=USA&region_name=US&city_name=" + responseBreweryCity + "&q=US%20" + responseBreweryState,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
                "x-rapidapi-key": "aa9315e3c9msh7e70db338b431dbp1dae55jsn19c615063e3f"
            }
        }
        
        $.ajax(settings).done(function (response) {

            console.group('Inside getCovidReport function');
            console.log(response.length);
            console.log(response);
            console.groupEnd();

        });

    }

    getCovidReport();

});