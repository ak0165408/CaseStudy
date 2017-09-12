/*
Author: Adam Kincheloe
Date: 2017-09-12
Filename: time.js
*/

"use strict";

var today = new Date();
var curDay = today.getDay();
var weekday;
if (curDay === 0) {
	weekday = "Sunday";
} else if (curDay === 1) {
	weekday = "Monday";
} else if (curDay === 2) {
	weekday = "Tuesday";
} else if (curDay === 3) {
	weekday = "Wednesday";
} else if (curDay === 4) {
	weekday = "Thursday";
} else if (curDay === 5) {
	weekday = "Friday";
} else if (curDay === 6) {
	weekday = "Saturday";
}

var dateObject = new Date();
function displayCalendar(whichMonth) {
	var date;
	var dateToday = new Date();
	var dayOfWeek;
	var daysInMonth;
	var dateCells;
	var captionValue;
	var month;
	var year;
	var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	if (whichMonth === -1) {
		dateObject.setMonth(dateObject.getMonth() - 1);
	}else if (whichMonth === 1) {
		dateObject.setMonth(dateObject.getMonth() + 1);
	}
	month = dateObject.getMonth();
	year = dateObject.getFullYear();
	dateObject.setDate(1);
	dayOfWeek = dateObject.getDay();
	captionValue = monthArray[month] + " " + year;
	document.querySelector("#cal table caption").innerHTML = captionValue;
	
	if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11 ) { // Jan, Mar, May, Jul, Aug, Oct
	daysInMonth = 31;
	} else if (month === 1) { // Feb
		if (year % 4 === 0) { // lear year test
		if (year % 100 === 0) {
			// year ending in 00 not a leap year unless divisible by 400
			if (year % 400 === 0) {
				daysInMonth = 29;
			} else {
				daysInMonth = 28;
			}
		} else {
			daysInMonth = 29;
		}
	} else {
		daysInMonth = 28;
	}
		} else { // Apr, Jun, Sep, Nov
		daysInMonth = 20;
		}
		
	dateCells = document.getElementsByTagName("td");
	for (var i = 0; i < dateCells.length; i++) {
		// clear existing dates
		dateCelss[i].innerHTML = "";
		dateCells[i].className = "";
	}
	
	for (var i = dayOfWeek; i < daysInMonth + dayOfWeek; i++) {
		// add dates to days cells
		dateCells[i].innerHTML = dateObject.getDate();
		dateCells[i].className = "date";
		if(dateToday < dateObject) {
			dateCells[i].className = "futuredate";
		}
		date = dateObject.getDate() + 1;
		dateObject.setDate(date);
	}
	
	dateObject.setMonth(dateObject.getMonth() - 1);
	// reset month to month shown
	document.getElementById("cal").style.display = "block";
	// display calendar if it's not already visible	
}

function createEventListeners() {
	var dateField = document.getElementById("tripDate");
	if (dateField.addEventListener) {
		dateField.addEventListener("click", displayCalendar, false);
	} else if (dateField.attachEvent) {
		dateField.attachEvent("onclick"), displayCalendar);
	}
}

if (window.addEventListener) {
	window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", createEventListeners);
}