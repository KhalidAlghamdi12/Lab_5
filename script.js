
var myInput = document.getElementById("inputNum")
myInput.addEventListener("change", refresh)
var n = 0
var result = 1
function refresh() {
    n = myInput.value;

}
function calculateFactorial() {
    const inputNumber = document.getElementById("input_number").value;
    let factorial = 1;
    for (let i = 1; i <= inputNumber; i++) {
      factorial *= i;
    }
    const output = document.getElementById("output");
    output.innerHTML = `The factorial of ${inputNumber} is ${factorial}.`;
  }
function calc() {
    calcFactorial(n);
    document.getElementById("result").textContent = result
    result = 1;
}


        function calculateAge() {
          const firstName = document.getElementById("first_name").value;
          const lastName = document.getElementById("last_name").value;
          const yearOfBirth = document.getElementById("year_of_birth").value;

          
          const currentYear = new Date().getFullYear();
          const age = currentYear - yearOfBirth;
    
         
          const output = document.getElementById("output");
          output.innerHTML = `Your name is ${firstName} ${lastName}.<br>You are ${age} years old.`;
    function updateUserInfo() {

    }
}
