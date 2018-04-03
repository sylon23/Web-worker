//This webworker function selects two random integers between 1 and 10.
function luckyNumber() {
  number = Math.floor((Math.random()* 10) + 1);
  WinningNumber = Math.floor((Math.random()* 10) + 1);
    postMessage([number,WinningNumber]); // PostMessage method posts number back to the main script
    
};
onmessage = luckyNumber();

// var luckyNumber = function() { 
//     number = Math.random();
// //;
// postMessage(number)
// };



// onmessage =luckyNumber;