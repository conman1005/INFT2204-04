console.log("fetch_script.js loaded");

// get the button for fetch
var button = $('#fetchJoke');
//button.text("test");

// create a url variable
var url = "https://icanhazdadjoke.com/";

//need a header Accept value set to 'application/json'
let header = {"Accept": "application/json"}


// create the callback for the click
$(button).click(() => {
    // use fetch
    fetch(url, {
        // give the necessary header data
        headers: header
    // first then() to recieve the promise
    }).then((result) => {
        return result.json();
    // send the json from the promise on to the next then()
    }).then((jsonRes) => {
        // console log the json
        console.log(jsonRes);
        // set the output
        $("#output").text(jsonRes['joke']);
    });         
});
    

