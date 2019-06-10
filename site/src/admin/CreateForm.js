// CreateForm.js
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
	input: {
		color: 'white',
  },
	button: {
    marginLeft: theme.spacing(1),
	}
}));

export default function CreateForm(props) {
  const classes = useStyles();

  return (
		<div>
			<form className={classes.container} noValidate autoComplete="off">
				<TextField
					label="First Name"
					name="first_name"
					className={classes.textField}
					value={props.first_name}
					onChange={props.handleChangeText}
					margin="normal"
					InputProps={{
       	 		className: classes.input
      		}}
				/>
				<TextField
					label="Last Name"
					name="last_name"
					className={classes.textField} value={props.last_name}
					onChange={props.handleChangeText}
					margin="normal"
					InputProps={{
       	 		className: classes.input
      		}}
				/>
				<TextField
					label="Date of Birth"
					name="dob"
					className={classes.textField}
					value={props.dob}
					onChange={props.handleChangeText}
					margin="normal"
					InputProps={{
       	 		className: classes.input
      		}}
				/>
				<TextField
					label="Weight"
					name="weight"
					className={classes.textField}
					value={props.weight}
					onChange={props.handleChangeText}
					margin="normal"
					InputProps={{
       	 		className: classes.input
      		}}
				/>
				<TextField
					label="School"
					name="school"
					className={classes.textField}
					value={props.school}
					onChange={props.handleChangeText}
					margin="normal"
					InputProps={{
       	 		className: classes.input
      		}}
				/>
			</form>
			<Button variant="outlined" className={classes.button} onClick={props.submitWrestler}>
       	Submit 
      </Button>
		</div>
  );
}
