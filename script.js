"use strict";

// function to take username from form//
function enterUser() {
    let input = $("#user-input").val();
    console.log("it worked");
    return input;
}
// function for submit button//
function submitButton() {
    console.log('it works');
    $("#search").submit(e => {
        e.preventDefault();
        // const userID = $("#user-input").val();
        getInfo();

    });
}
// function to make fetch to github//
function getInfo() {
    let url = `https://api.github.com/users/` + enterUser()+`/repos`
    console.log(url);
    fetch(url)
        .then(response => response.Json())
        .then(responseJson => console.log(responseJson))
         .catch(error => alert('That User ID does not exist'));
        enterUser();
}
// //handle and display result in DOM//
// function displayResults(responseJson) {
//     console.log(responseJson);
//     $('#profile').empty();
//     let responseHtml = "";
//  }
// }
// // handle page and ready//
$(function () {
    console.log('lets git some');
    submitButton();
});

