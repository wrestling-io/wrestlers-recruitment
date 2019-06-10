// Admin.js
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types'; import ReactMarkdown from 'react-markdown'; import FormWrapper from './FormWrapper';
import WrestlerTable from './../table/WrestlerTableWrapper';
import './Admin.css';

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
    <div className="container">
      <h1>Admin</h1>
			<button id="sign_in_button" type="button" onClick={myFunction}>Sign In to CRUD</button>
			<p id="user_status"></p>
			<div hidden id="data">
        <FormWrapper />
			</div>
      <WrestlerTable />
    </div>
 	);
};

export default Admin;