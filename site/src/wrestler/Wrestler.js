// Wrestler.js
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Wrestler = props => (
    <div>{props.first_name}|{props.last_name}|{props.school}|{props.weight}</div>
);

Wrestler.propTypes = {
	first_name: PropTypes.string,
  last_name: PropTypes.string,
  dob: PropTypes.string,
  weight: PropTypes.number,
  // todo: make below an object
  school: PropTypes.string,
};

export default Wrestler;
