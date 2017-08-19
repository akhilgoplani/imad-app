// Counter code
var button = document.getElementById('counter');
var counter = 0;

button.oneclick = function () {
    
    //make a request to the counter endpoint
    
    //capture the response and store it in a variable
    
    //Render the variable in the correct span
    Counter = counter + 1;
    var span = document.getElememntById('count');
    span.innerHTML = counter.tostring();
};

//Submit name
Var name = nameInput.value;
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