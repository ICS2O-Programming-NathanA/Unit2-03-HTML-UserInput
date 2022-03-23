// Copyright (c) 2022 Nathan Araujo All rights reserved
//
// Created by: Nathan Araujo
// Created on: Sep 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's first name and age and displays it back to user

  // get first name from text field
  let firstName = document.getElementById("first-name").value
	// get age from text field and cast it to integer
  let userAge = parseInt(document.getElementById("age-entered").value)

  // display name and age back to user
  document.getElementById('user-info').innerHTML = "To confirm your credit card number is " + firstName + " and your PIN is " + userAge + ". Pending gift card!"
}
