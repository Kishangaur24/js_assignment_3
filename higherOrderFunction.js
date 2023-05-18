// Callback functions
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  // Higher-order function
  function calculate(a, b, callback) {
    return callback(a, b);
  }
  
  // Calculations
  console.log(calculate(5, 3, add));       
  console.log(calculate(10, 4, subtract)); 
  console.log(calculate(7, 2, multiply));  
  