
const path = require('path')
const url = require('url')

function moveToInformationPage() {
	document.getElementById(infoPage).innerHTML = window.location.replace("informationPage.html");
}