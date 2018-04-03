// Create a new webworker object
var worker = new Worker("js/luckyworker.js"); 
//onmessage event handler allow reception of message from the web worker
worker.onmessage = function(event){ 
    document.getElementById("result1").textContent = event.data[1];

var playbutton = document.querySelector("#playbutton");
playbutton.onclick = function(){
    document.getElementById("result").textContent = event.data[0];

    if (event.data[1] === event.data[0] ){
        document.getElementById("finalresult").textContent = "Yay! You win"
    }else {
        document.getElementById("finalresult").textContent = "No match! Try again"
    }
}
};
