// This declares all the variables and gives a value to the variable 'pi'
let diameter = 0
let radius = 0
let area = 0
let circumference = 0
let pi = 3.14159265359
// This makes the button start the calculate function
document.getElementById('start').addEventListener('click', calculate)

function calculate() {
  // This sets the value of the diameter variable to the the number that the user gives
  diameter = document.getElementById('user-input').value
  if (diameter >= 0) {
    // This removes the error message from inputing a negative
    document.getElementById('error').innerHTML = ''
    radius = diameter / 2
    // This calculates the circumference
    circumference = 2 * pi * radius
    // This rounds the answer to 5 digits
    circumference = circumference.toPrecision(5)
    // This calculates the area
    area = pi * radius * radius
    // This rounds the answer to 5 digits
    area = area.toPrecision(5)
    // These display the answers in their respective text-boxes
    document.getElementById('area').value = area
    document.getElementById('circumference').value = circumference
  } else {
    // This makes the error message appear
    document.getElementById('error').innerHTML = 'Input invalid, diameter must be a positive number'
    // This removes the text in the boxes to make sure there is no confusion over seeing the previous answer when there is an error code
    document.getElementById('area').value = ''
    document.getElementById('circumference').value = ''
  }
}
