let number1 = document.querySelector('#number1')
let number2 = document.querySelector('#number2')
let number3 = document.querySelector('#number3')
let number4 = document.querySelector('#number4')
let number5 = document.querySelector('#number5')
let number6 = document.querySelector('#number6')
let number7 = document.querySelector('#number7')
let number8 = document.querySelector('#number8')
let number9 = document.querySelector('#number9')
let number0 = document.querySelector('#number0')
let value = document.querySelector('#value')
let mathPlus = document.querySelector('#mathPlus')
let mathEquals = document.querySelector('#mathEquals')
// let interim = document.querySelector('#interim')
let abort = document.querySelector('#abort')


number1.addEventListener('click', changeValue)
number2.addEventListener('click', changeValue)
number2.addEventListener('click', changeValue)
number3.addEventListener('click', changeValue)
number4.addEventListener('click', changeValue)
number5.addEventListener('click', changeValue)
number6.addEventListener('click', changeValue)
number7.addEventListener('click', changeValue)
number8.addEventListener('click', changeValue)
number9.addEventListener('click', changeValue)
number0.addEventListener('click', changeValue)
mathPlus.addEventListener('click', changeValuePlus)
mathEquals.addEventListener('click', changeValueEquals)
abort.addEventListener('click', abortValue)


function changeValue () {
	value.textContent += this.textContent
}


function changeValuePlus () {
	interim = value.textContent
	value.textContent = '0'
	return interim
}

function changeValueEquals () {
	value.textContent = (+interim + +value.textContent)
}

function abortValue () {
	value.textContent = '0'
}