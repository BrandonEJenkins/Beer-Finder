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
        
        
        
        $('button').click(function() {

            var userSearch = $('#userSearch').val()
            var sort = "type";
            if(userSearch === "") {
                userSearch = "Houston"
            }

            var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + userSearch + "&sort=-" + sort;

            $('#unorderedList').empty();

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
            console.log(response);
            for (i = 0; i < response.length; i++) {
                
                $('#unorderedList').append('<li>' + JSON.stringify(response[i].name) + '</li>');
            }
                });
        });


        

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


        