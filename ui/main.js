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