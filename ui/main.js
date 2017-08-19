// Counter code
var button = document.getElementById('counter');

button.oneclick = function () {
    
    // Create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onereadystatechange = function () {
        if (request.readystate === XMLHttpRequest.Done) {
            // Take some action
            if (request.status === 200) {
                var counter = request.responseText;
                 var span = document.getElememntById('count');
                 span.innerHTML = counter.tostring();
            }
        }
        // Not done yet
    };
    
    // Make the request
    rquest.open('Get', 'http://akhilgoplani.imad.hasura-app.io', true);
    request.send(null);
};
    
//Submit name
var nameInput = document.getElementById('name');
Var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.oneclick = function () {
 //Make a request to the server and send the name
 
//Capture a list of names and render it as a list
var name = ['name1', 'name2', 'name3', 'name4'];
var list = '';
for (var i=0; i< names.length; i++) {
    list += '<li>' + names[i] + '</li>';
}
var ul = document.getElementById('namelist');
ul.innerHTML = list;
};