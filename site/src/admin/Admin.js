// Admin.js
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import FormWrapper from './FormWrapper';

const Admin = (props) => {
	const autheticated = false;
	const myFunction = () => {
		var txt;
		var input = prompt("Password:");
		if (input == null || input != "robert420") {
			txt = "You are unauthenticated";
		} else {
			txt = "You are authenticated";
			document.getElementById("data").style.display = "block";
			document.getElementById("sign_in_button").style.display = "none";
		}
		document.getElementById("user_status").innerHTML = txt;
	}

  return (
    <div>
      <h1>Admin</h1>
			<button id="sign_in_button" type="button" onClick={myFunction}>Sign In</button>
			<p id="user_status"></p>
			<div hidden id="data">
				IF YOU CAN SEE THIS YOU ARE AUTHENTICATED	
			</div>
      <FormWrapper />
    </div>
 	);
};

export default Admin;
