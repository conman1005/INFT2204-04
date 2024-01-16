// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element

var gList = document.getElementById("gList");

// ADD NEW ITEM TO END OF LIST
// Create element
// Create text node
// Add text node to element
// Add element end of list

var item = document.createElement("li");
var textNode = document.createTextNode("Food");
item.appendChild(textNode);
gList.appendChild(item);

// ADD NEW ITEM START OF LIST
// Create element
// Create text node
// Add text node to element
// Add element to list

var item = document.createElement("li");
var textNode = document.createTextNode("Pie");
item.appendChild(textNode);
gList.insertBefore(item, gList.firstChild);

// All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
// Loop through elements
// Change class to cool

var list = gList.children;
var count = 0;
for (var i = 0; i < list.length; i++) {
    list[i].setAttribute("class", "COOL");
    count++;
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
// h2 text
// No. of <li> elements
// Content
// Update h2 using innerHTML (not textContent) because it contains markup

var page = document.getElementById("page");
var item = document.createElement("h2");
//var textNode = document.createTextNode("Count: " + count);
//item.appendChild(textNode);
item.innerHTML = ("Count: " + count);
page.insertBefore(item, page.firstChild);