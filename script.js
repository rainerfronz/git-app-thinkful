

// function to take username from form//

// function for submit button//
function submitButton() {
    $('#search').submit(event => {
        e.preventDefault();
        console.log('itworks')
        fetchEnterUser(userId);
    })

}
function enterUser() {
    let userId = $('#user-input').val();
    console.log(enterUser);
    return userId;
}


// function to make fetch to github//

function getInfoFromGit() {

    fetch('https://api.github.com/users/' + enterUser() + '/repos')
    console.log('works')
        .then(response => responsejson())
    console.log(responsejson)
        .then(responsejson => displayResults(responsejson))
    console.log(responsejson)
        .catch(error => alert('That User ID does not exist'));


}


// //handle and display result in DOM//
// function displayResults(responseJson) {
//     console.log(responseJson);
//     $('#profile').empty();
//     let responseHtml = "";



//     }

// }

// handle page and ready//
$("document").ready(function () {
    console.log('lets git some');
    submitButton();

});
