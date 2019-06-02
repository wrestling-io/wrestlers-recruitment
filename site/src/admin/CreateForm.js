// CreateForm.js
import React from 'react';
import PropTypes from 'prop-types';

const CreateForm = props => (
  <form onSubmit={props.submitWrestler}>
    <input
      type="text"
      name="first_name"
      placeholder="First Name…"
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
      value={props.dob}
      onChange={props.handleChangeText}
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
<button type="submit">Submit</button>
  </form>
);

CreateForm.propTypes = {
  submitWrestler: PropTypes.func.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  text: PropTypes.string,
  author: PropTypes.string,
};

CreateForm.defaultProps = {
  text: '',
  author: '',
};

export default CreateForm;
