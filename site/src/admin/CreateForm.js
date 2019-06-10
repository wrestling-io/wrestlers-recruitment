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
  input: {
    margin: theme.spacing(1),
  },
	button: {
    margin: theme.spacing(1),
  },
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
				/>
				<TextField
					label="Last Name"
					name="last_name"
					className={classes.textField}
					value={props.last_name}
					onChange={props.handleChangeText}
					margin="normal"
				/>
				<TextField
					label="Date of Birth"
					name="dob"
					className={classes.textField}
					value={props.dob}
					onChange={props.handleChangeText}
					margin="normal"
				/>
				<TextField
					label="Weight"
					name="weight"
					className={classes.textField}
					value={props.weight}
					onChange={props.handleChangeText}
					margin="normal"
				/>
				<TextField
					label="School"
					name="school"
					className={classes.textField}
					value={props.school}
					onChange={props.handleChangeText}
					margin="normal"
				/>
			</form>
			<Button variant="outlined" className={classes.button} onClick={props.submitWrestler}>
       	Submit 
      </Button>
		</div>
  );
}
const reateForm = props => (
    <div>
  <form onSubmit={props.submitWrestler}>
    <input
      type="text"
      name="first_name" placeholder="First Name…"
      value={props.first_name}
      onChange={props.handleChangeText}
    />
    <input
      type="text"
      name="last_name"
      placeholder="Last Name..."
      value={props.last_name}
      onChange={props.handleChangeText}
    />
    <input
      type="text"
      name="dob"
      placeholder="DOB…"
      value={props.dob} onChange={props.handleChangeText}
    />
    <input
      type="text"
      name="weight"
      placeholder="Weight…"
      value={props.weight}
      onChange={props.handleChangeText}
    />
    <input
      type="text"
      name="school"
      placeholder="School…"
      value={props.school}
      onChange={props.handleChangeText}
    />
  </form>
  <button type="submit">Submit</button>
  </div>
);

CreateForm.propTypes = {
  submitWrestler: PropTypes.func.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  dob: PropTypes.string,
  weight: PropTypes.string,
  school: PropTypes.string,
};

CreateForm.defaultProps = {
  first_name: '',
  last_name: '',
  dob: '',
  weight: '', 
  school: '',
};

