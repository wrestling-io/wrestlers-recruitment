// Wrestler.js
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Wrestler = props => (
<TableRow key={props._id}>
	<TableCell component="th" scope="props">{props.first_name} {props.last_name}</TableCell>
	<TableCell align="right">{props.dob}</TableCell>
	<TableCell align="right">{props.weight}</TableCell>
	<TableCell align="right">{props.school}</TableCell>
</TableRow>
);

Wrestler.propTypes = {
  _id: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  dob: PropTypes.string,
  weight: PropTypes.string,
  // todo: make below an object
  school: PropTypes.string,
};

export default Wrestler;
