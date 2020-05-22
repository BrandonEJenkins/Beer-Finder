/*      Beer Finder Application JS      */

// Pseudo Code
    
    // Ajax call to beer APIs and use 'GET' request method to query URL for data

    // Grab HTML elements using jQuery for use in JS ($('#elementID')

        // Declare variable to store user beer history (in an array?)
        // Create input text area for user beer search
        // Create ajax call to beer API to fetch beer info
        // Get text area html element 
        // Append / prepend recent beer search history
        // Define number of list items to show in search history
        // Declare variable to store api key
        // Declare variable to store url
        // Create random beer recommendation function
        // Declare variable that stores function to create new list item when response received from url
        // Ajax call to get img of beer search results
        // Ajax call to get images of beer recommendations
        // Ajax call to get brief description of beer from search results
        // Ajax call to get brief description of beer recommendations based on beer search results
        // Variable that stores function to create new <p> tag with .text('data' + value) based on search resutls
        // Variable that stores function to create new <p> tag with .text('data' + value) based on randomized recommendation
        // Variable to store function to append new search results to search history
        // Create user age input text area
        // Conditional that stops user from creating account if under 21
        // Create a function to check user age over 21 (based on DOB)
        // Store DOB in local storage so user doesn't have to re-enter age when logging in
        // Input forms on profile page: username, password, email
        // Search results list 
        // Button to add selected beer
        
    // Profile Page
        // Image elements for beer search history
        // p elements for beer history details
        // Event listeners for beer search history images
        // Ajax calls

    // Create event listeners:
        // Beer search button
        // Sign-up button
        // Create account button
        // Skip this step button
        // Go to profile button
        // Carousel images for top 5 

        // var settings = {
        //     "async": true,
        //     "crossDomain": true,
        //     "url": "https://the-cocktail-db.p.rapidapi.com/list.php?a=list",
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        //         "x-rapidapi-key": "aa9315e3c9msh7e70db338b431dbp1dae55jsn19c615063e3f"
        //     }
        // }
        
        

        // $('button').click(function(  ) { $.ajax({ url: queryURL, method: 'GET' }).then(function( response ) { console.log(response); } );  $('unorderedist').append('<li>New List Item<li>');    });
        
        
        
        // $('button').click(function() {

        //     var userSearch = $('#userSearch').val()
        //     var sort = "type";
        //     if(userSearch === "") {
        //         userSearch = "Houston"
        //     }

        //     var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + userSearch + "&sort=-" + sort;

        //     $('#unorderedList').empty();

        // $.ajax({
        //     url: queryURL,
        //     method: 'GET'
        // }).then(function(response) {
        //     console.log(response);
        //     for (i = 0; i < response.length; i++) {
                
        //         $('#unorderedList').append('<li>' + JSON.stringify(response[i].name) + '</li>');
        //     }
        //         });
        // });


        

        // $.ajax({
        //     url: queryURL,
        //     method: 'GET'
        // }).then(function(response) {
            
        //     console.log(response);


        //     // var queryResponse = response.City;

        //     // var breweryListItem = $('<p>').text(queryResponse);
            
        //     // $('.responseDiv').append(breweryListItem);
        // });

        // $('button').click(function(){
        //     $('#unorderedList').append('<li>New LIst Item</li>');
        // });

        // example:
        // https://api.openbrewerydb.org/breweries?by_state=Virginia&dog-friendly&per_page=15


//         [on page load / refresh: page empties previous entries]
// user inputs brand (text area)
// user selects state from drop-down list (<select> tag)
// OR user clicks 'near me' button (<button> tag)
// user clicks search icon (<input type = "submit">)
// on search icon click, ajax call to request openbrewery api data by user state using get method (number of search items returns??)
// OR on search icon click, ajax call to request openbrewery api data by 'near me' geolocation using get method (number of search items returns??)
// if user deletes previous search text > enters new search criteria (brand AND state) > clicks search icon > previous search results are cleared ( .empty( ); ) > ajax call is again executed > new data replaces previous search..........(option 1)

// OR if user deletes previous search text > enters new search criteria (brand AND 'near me') > clicks search icon > previous search results are cleared ( .empty( ); ) > ajax call is again executed > new data replaces previous search..........(option 2)
        // CLARIFICATION: the purpose of the 'near me' button is to drill down from the state level (e.g., user selects state from drop down > user inputs brand / brewery name > user clicks search icon > ajax call(s) triggered and returns breweries in state ajax call )

        // 'near me' button will be boolean; if 'near me' clicked, then true; if 'near me' NOT clicked, then false

// OR if either option 1 or option 2 occurs > new data is APPENDED (OR PREPENDED)

// if user deletes previous search text > enters new search criteria ( brand AND state -OR- brand AND 'near me' ) > clicks search icon > previous search results are cleared ( .empty( ); ) > ajax call is again executed > new variables created to store: brewery name, brewery address, brewery rating, state name, state logo?? > variable created to store new browser element created via jQuery with .text( ) property containing respective ajax call result > newly created browser element with appended text from ajax attached to existing browser element (e.g., .append( ) or .prepend( ) )
// also, during our meeting tomorrow (in class), i want to discuss a potential addition to the app, since we're having to pivot slightly anyway.


        // openbrewery: https://api.openbrewerydb.org/breweries
        
// $( document ).ready( function () {

//     var userBrandSearchInput;

//     var userStateDropdownSelection;

//     var userBrandLocalStorage = window.localStorage.getItem("userBrandSearchInput");

//     var userStateLocalStorage = window.localStorage.getItem("userStateDropdownSelection");

//     userBrandSearchInput = userBrandLocalStorage;
//     userStateDropdownSelection = userStateLocalStorage;

//     getbreweryDetails();

//     $('#searchButton').on('click', function(event) {

//         event.preventDefault();

//         // Clear previous search results but have background image in lower two-thirds of page that is visible when search is cleared or has not yet been executed
//         $('.responseContainer').empty();

//         // Get user brand input text from form
//         userBrandSearchInput = $('#userBrandSearchInput').val();

//         // Get user state from drop-down selection
//         userStateDropdownSelection = $('#userStateDropdownSelection').val();

//         getbreweryDetails();

//     });

// function getbreweryDetails() {

//     var apiKey;

//     // Declare variable to store openbrewerydb url by state based on user input and sorted by brewery name with a limit of 25 search results per call
//     var queryURL = "https://api.openbrewerydb.org/breweries?by_state=" + userStateDropdownSelection + "&sort=+name&per_page=25";

//     $.ajax({
//         url: queryURL,
//         method: 'GET',
//     }).then( function (response) {
//         console.log( response );

//         // Create variables to store ajax call results in separate div's based on layout image
//         var responseDiv = $('<div class="responseContainer">');
        
//         var responseDivName = $('<div class="breweryName">');

//         var responseDivAddress = $('<div class="breweryAddress">');

//         var responseDivRating = $('<div class="breweryRating">');

//         var responseDivStateName = $('<div class="stateName">');

//         var responseDivStateLogo = $('<div class="stateLogo">');

//         // Create variables to store results of ajax call

//     })

// }

// })

$('.searchButton').on('click', function (event) {

    event.preventDefault();
    console.log('i was clicked');

var userStateDropdownSelection = $('#inputState').val();

var states = {"AL " : " Alabama","AK " : " Alaska","AZ " : " Arizona","AR " : " Arkansas","CA " : " California","CO " : " Colorado","CT " : " Connecticut","DE " : " Delaware","DC " : " District of Columbia","FL " : " Florida","GA " : " Georgia","HI " : " Hawaii","ID " : " Idaho","IL " : " Illinois","IN " : " Indiana","IA " : " Iowa","KS " : " Kansas","KY " : " Kentucky","LA " : " Louisiana","ME " : " Maine","MD " : " Maryland","MA " : " Massachusetts","MI " : " Michigan","MN " : " Minnesota","MS " : " Mississippi","MO " : " Missouri","MT " : " Montana","NE " : " Nebraska","NV " : " Nevada","NH " : " New Hampshire","NJ " : " New Jersey","NM " : " New Mexico","NY " : " New York","NC " : " North Carolina","ND " : " North Dakota","OH " : " Ohio","OK " : " Oklahoma","OR " : " Oregon","PA " : " Pennsylvania","RI " : " Rhode Island","SC " : " South Carolina","SD " : " South Dakota","TN " : " Tennessee","TX " : " Texas","UT " : " Utah","VT " : " Vermont","VA " : " Virginia","WA " : " Washington","WV " : " West Virginia","WI " : " Wisconsin","WY " : " Wyoming" };

var getStateFullName = function (stateAbbr) {
    return states[stateAbbr];
}

var queryURL = "https://api.openbrewerydb.org/breweries?by_state=" + userStateDropdownSelection + "&sort=+name&per_page=25";

$.ajax({
    url: queryURL,
    method: 'GET',
}).then(function (response) {

    console.group('Inside AJAX');
    console.log('ya got me');
    console.log('State selected: ' + userStateDropdownSelection);
    console.groupEnd();

    })
});
