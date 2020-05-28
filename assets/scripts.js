/*      Beer Finder Application JS      */

// TODO: js to display last brand and state on page reload
// TODO: remove email form
// TODO: make upper portion of page fixed
// TODO: make lower portion of page scrollable
// TODO: create modal window with minimum age of 21 alert
// TODO: create ajax call for near me button to match brewery CITY to user city using geolocation


$( document ).ready(function () { 


    // MODAL WINDOW SCRIPT

    // Toggle Modal: script to open modal window
    // const openEls = document.querySelector("[data-open]");
    // const isVisible = "is-visible";

    // for(const el of openEls) {
    //     el.addEventListener("click", function() {
    //         const modalId = this.dataset.open;
    //         document.getElementById(modalId).classList.add(isVisible);
    //     })
    // }

    // Script to close modal by clicking element within the modal
    // const closeEls = document.querySelectorAll("[data-close]");
    // const isVisible = "is-visible";

    // for (const el of closeEls) {
    //     el.addEventListener("click", function() {
    //         this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    //     });
    // }

    // Script to close modal by clicking everything outside of the modal
    // const isVisible = "is-visible";

    // document.addEventListener("click", e => {
    //     if (e.target == document.querySelector(".modal.is-visible")) {
    //         document.querySelector(".modal.is-visible").classList.remove(isVisible);
    //     }
    // });

    // Script to close modal by pressing the Esc key
    // const isVisible = "is-visible";

    // document.addEventListener("keyup", e => {
    //     if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    //         document.querySelector(".modal.is-visible").classList.remove(isVisible);
    //     }
    // });


    // PAGE SCRIPTS

    // Declare variables to be assigned later to enable global scope
    var userStateDropdownSelection;

    var userBrandSearchInput;

    var responseBreweryLongitude;

    var responseBreweryLatitude;

    var responseBreweryStreet;

    var responseBreweryCity;

    var responseBreweryState;

    // Get last state selected in drop down menu from local storage
    var stateLocalStorage = window.localStorage.getItem("userStateDropdownSelection");

    var brandLocalStorage = window.localStorage.getItem("userBrandSearchInput");

    userStateDropdownSelection = stateLocalStorage;
    userBrandSearchInput = brandLocalStorage;

    getbreweryDetails();
    // getGooglePlaces();

    // When .searchButton clicked run ajax call
    $('.brandBtn').click(function (event) {

        // Prevent page refresh if button clicked 
        event.preventDefault();

        // DELETE - print msg to console
        // console.log('i was clicked');

        // Clear previous results from search results when button clicked
        $('.ajaxResultsDiv').empty();

        // Define variable declared earlier to store state text from dropdown menu
        userStateDropdownSelection = $('#inputState option:selected').text();

        // Define variable declared earlier to store brand search text
        userBrandSearchInput = $('#brandSearchInput').val();

        // Alerts user that state defaults to Texas and brand defaults to Brewery if either 

        // Sets last state and brand search to local storage
        window.localStorage.setItem("userStateDropdownSelection", userStateDropdownSelection);

        window.localStorage.setItem("userBrandSearchInput", userBrandSearchInput);

        // DELETE BLOCK - Console log some stuff
        // console.log(userBrandSearchInput);
        // console.log(userBrandSearchInput);

        getbreweryDetails();
        // getGooglePlaces();

    });

    function getbreweryDetails() {

        // var states = {"AL":"Alabama","AK":"Alaska","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","DC":"DistrictofColumbia","FL":"Florida","GA":"Georgia","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"NewHampshire","NJ":"NewJersey","NM":"NewMexico","NY":"NewYork","NC":"NorthCarolina","ND":"NorthDakota","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PA":"Pennsylvania","RI":"RhodeIsland","SC":"SouthCarolina","SD":"SouthDakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VA":"Virginia","WA":"Washington","WV":"WestVirginia","WI":"Wisconsin","WY":"Wyoming"};

        // Declare variable to store abbreviation and state name to convert user dropdown selection
        var states = {"Alabama":"AL","Alaska":"AK","Arizona":"AZ","Arkansas":"AR","California":"CA","Colorado":"CO","Connecticut":"CT","Delaware":"DE","DistrictofColumbia":"DC","Florida":"FL","Georgia":"GA","Hawaii":"HI","Idaho":"ID","Illinois":"IL","Indiana":"IN","Iowa":"IA","Kansas":"KS","Kentucky":"KY","Louisiana":"LA","Maine":"ME","Maryland":"MD","Massachusetts":"MA","Michigan":"MI","Minnesota":"MN","Mississippi":"MS","Missouri":"MO","Montana":"MT","Nebraska":"NE","Nevada":"NV","NewHampshire":"NH","NewJersey":"NJ","NewMexico":"NM","NewYork":"NY","NorthCarolina":"NC","NorthDakota":"ND","Ohio":"OH","Oklahoma":"OK","Oregon":"OR","Pennsylvania":"PA","RhodeIsland":"RI","SouthCarolina":"SC","SouthDakota":"SD","Tennessee":"TN","Texas":"TX","Utah":"UT","Vermont":"VT","Virginia":"VA","Washington":"WA","WestVirginia":"WV","Wisconsin":"WI","Wyoming":"WY"};

        // Declare variable to store match between dropdown selection and states object
        const stateAbbreviation = states[userStateDropdownSelection];

        // DELETE BLOCK - Console log some stuff;
        // console.log(stateAbbreviation);
        // console.group('Outside AJAX');
        // console.log(userStateDropdownSelection);
        // console.groupEnd();
    
        // Store url for first ajax call using text area from brand search and state from dropdown menu
        // Search response sorted by name and limited to 15 results
        var queryURL = "https://api.openbrewerydb.org/breweries?by_name=" + userBrandSearchInput + "&by_state=" + userStateDropdownSelection + "&sort=+name&per_page=15";

        $.ajax({
            url: queryURL,
            method: 'GET',
        }).then(function (response) {

            // DELETE BLOCK - Console log some stuff;
            // console.group('Inside AJAX');
            // console.log('ya got me');
            // console.log('State selected: ' + userStateDropdownSelection);
            // console.log('Brand selected: ' + userBrandSearchInput);
            // console.log(response);
            // console.log(response[0].name);
            // console.groupEnd();

            // Create for loop to grab response data and create html p tag and div elements for each item in the response array
            for (let i = 0; i < response.length; i++) {

                // New div to hold response data
                // var responseDiv = $('<div class="responseContainer">');
                var responseDiv = $('<div class="grid-container">');

                var responseDivGridDimensions = $('<div class="grid-x grid-margin-x small-up-2 medium-up-3">');

                var responseMainCell = $('<main class="cell">');

                var responseDivCard = $('<div class="card">');

                var responseDivCardDivider = $('<div class="card-divider">');

                var responseDivCardSection = $('<div class="card-section">');





                // Create variables to store results of ajax call
                var responseBreweryName = response[i].name;

                responseBreweryStreet = response[i].street;

                responseBreweryCity = response[i].city;

                responseBreweryState = response[i].state;

                var responseBreweryType = response[i].brewery_type;

                // Define lat and long of brewery to be used in google api
                responseBreweryLongitude = response[i].longitude;

                responseBreweryLatitude = response[i].latitude;

                // Create new p tag elements with text property and on div element 
                var headingResponseBreweryName = $('<h4 class="pbreweryName">').text('Brewery Name: ' + responseBreweryName);

                var headingResponseCardSection = $('<h5 class="cardSectionHeader">').text('Located at:');
                
                var pResponseBreweryStreet = $('<p class="pBreweryStreet">').text('Brewery Street: ' + responseBreweryStreet);

                var pResponseBreweryCity = $('<p class="pBreweryCity">').text('Brewery City: ' + responseBreweryCity);

                // New div to store state name allowing flexibility in style and position in response div
                var divResponseBreweryState = $('<div class="divBreweryState">');

                var pResponseBreweryState = $('<p class="pBreweryState">').text('Brewery State: ' + responseBreweryState);

                var pResponseBreweryType = $('<p class="pBreweryType">').text('Brewery Type: ' + responseBreweryType);

                // Horizontal rule and line break between ajax results div containers
                var newAjaxDivBreak = $('<br><hr><br>');

                // Append p tags with text and ajax call data

                responseDivCardDivider.append(headingResponseBreweryName);

                responseDivCardSection.append(headingResponseCardSection);

                responseDivCardSection.append(pResponseBreweryStreet);

                responseDivCardSection.append(pResponseBreweryCity);

                divResponseBreweryState.append(pResponseBreweryState);

                responseDivCardSection.append(divResponseBreweryState);

                responseDivCardSection.append(pResponseBreweryType);

                responseDivCard.append(responseDivCardDivider);

                responseDivCard.append(responseDivCardSection);

                responseMainCell.append(responseDivCard);

                responseDivGridDimensions.append(responseMainCell);

                responseDiv.append(responseDivGridDimensions);



                // responseDiv.append(headingResponseBreweryName);

                // responseDiv.append(pResponseBreweryStreet);

                // responseDiv.append(pResponseBreweryCity);

                // Append state name to state div before appending to response div
                // divResponseBreweryState.append(pResponseBreweryState);

                // responseDiv.append(divResponseBreweryState);

                // responseDiv.append(pResponseBreweryType);

                responseDiv.append(newAjaxDivBreak);

                // Append response div to exisiting div in browser
                $('.ajaxResultsDiv').append(responseDiv);
            }

            // DELETE BLOCK - Console log some stuff
            // console.log(pResponseBreweryName);
            // console.log(pResponseBreweryStreet);
            // console.log(pResponseBreweryCity);
            // console.log(pResponseBreweryState);

            getCovidReport();

        })

    }


    function getCovidReport() {

        console.log(responseBreweryState);


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
            console.group('Covid API');
            // console.log(responseBreweryCity);
            // console.log(responseBreweryState);
            console.log(response);
            console.groupEnd();
        });

        
    }
        
    getCovidReport();


    // function getGooglePlaces() {

    //     var apiKey = "AIzaSyABkOG8LIN8IQlmFWua5RTO5AABAM6ivxk";

        

    //     $.get()


    //     // DELETE BLOCK - Console log some stuff;
    //     // console.group('Outside GOOGLE AJAX');
    //     // console.groupEnd();

    //     // var apiKey = "AIzaSyABkOG8LIN8IQlmFWua5RTO5AABAM6ivxk";

    //     // var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+near+" + responseBreweryStreet + "," + responseBreweryState + "&key=" + apiKey;

    //     // $.ajax({
    //     //     url: queryURL,
    //     //     method: 'GET',
    //     // }).then(function (response) {

    //     //     // DELETE BLOCK - Console log some stuff;
    //     //     console.group('Inside GOOGLE AJAX')
    //     //     console.log(response.results[0].name);

    //     // })

    // }


});