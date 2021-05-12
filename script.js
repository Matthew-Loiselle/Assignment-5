let diameter = 0
let radius = 0
let area = 0
let circumference = 0
let pi = 3.14159265359

document.getElementById('start').addEventListener('click', calculate)

function calculate() {
  diameter = document.getElementById('user-input').value
  if (diameter >= 0) {
    document.getElementById('error').innerHTML = ''
    radius = diameter / 2
    circumference = 2 * pi * radius
    circumference = circumference.toPrecision(5)
    area = pi * radius * radius
    area = area.toPrecision(5)
    document.getElementById('area').value = area
    document.getElementById('circumference').value = circumference
  } else {
    document.getElementById('error').innerHTML = 'Input invalid, diameter must be a positive number'
    document.getElementById('area').value = ''
    document.getElementById('circumference').value = ''
  }

}