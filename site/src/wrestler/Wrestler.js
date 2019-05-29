// Wrestler.js
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Wrestler = props => (
    <div>
      <div>
        <h2>{props.first_name} {props.last_name}</h2>{props.school}: {props.weight} lbs</div>
      <div> Accomplishments: {props.accomplishments}</div>
    </div>
);

Wrestler.propTypes = {
  _id: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  dob: PropTypes.string,
  weight: PropTypes.number,
  // todo: make below an object
  school: PropTypes.string,
};

export default Wrestler;
