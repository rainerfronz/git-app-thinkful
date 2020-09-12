"use strict";
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
    let input = $("#user-input").val();
    let url = `https://api.github.com/users/${input}/repos`;
    console.log(url);
    fetch(url)
        // .then(response => displayResults(response))
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('That User ID does not exist'))
}
// handle and display result in DOM//
function displayResults(responseJson) {
    console.log('displayResults');
    $("#results-list").empty();
    $('#results-list').html(`${responseJson.name}'s`);

    let repoList = "";
    console.log('step 1');
    for (let i = 0; i < responseJson.length; i++) {
        if (responseJson[i].description === null) {
            console.log('no response')
            responseJson[i].description = "No repo description found";
        }
        repoList += `<li>
						<h3>${responseJson[i].name}</h3>
						<p>${responseJson[i].description}</p>
						<a href="${responseJson[i].html_url}" target="_blank">View on GitHub</a>
                    </li><hr>`;
        console.log('nopartyforyou', repoList)
        $("#results-list").html(repoList);
        console.log('html')
        $("#results").removeClass("hidden");
    } console.log('remove')
}

// // handle page and ready//
$(function () {
    console.log('lets git some');
    submitButton();
});
