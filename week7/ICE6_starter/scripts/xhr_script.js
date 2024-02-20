console.log("xhr_script.js loaded");

// get the button for xhr
var button = $('#xhrJoke');
//button.text("test");

// create a url variable
var url = "https://icanhazdadjoke.com/";

// create a click callback that handles the API call

$(button).click(() => {
    // instantiate an XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // confiture with open()
    xhr.open("GET", url);
    // set the necessary headers for icanhazdadjoke.com
    xhr.setRequestHeader("Accept", "application/json");
    // create the callback to handle the onreadystatechange
    xhr.onreadystatechange = function () {
        // only execute when done and status is 200
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // get the responseText
            let joke = xhr.responseText;
            // console log
            console.log(joke);
            // JSON.parse the joke
            let parse = JSON.parse(joke);
            // set the output
            $("#output").text(parse["joke"]);
        }
            
    }
        
    // send the request
    xhr.send();
});
    


