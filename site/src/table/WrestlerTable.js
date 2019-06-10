// WrestlerTable.js
import React from 'react';
import moment from 'moment'; import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Wrestler from './../wrestler/Wrestler';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

const WrestlerTable = (props) => {
  const wrestlerNodes = (props.data || []).map(wrestler => (
    <Wrestler
      key={wrestler._id}
      _id={wrestler._id}
      first_name={wrestler.first_name}
      last_name={wrestler.last_name}
      dob={wrestler.dob}
      weight={wrestler.weight}
      school={wrestler.school}
      accomplishments={wrestler.accomplishments}
    >
		{wrestler.first_name}
    </Wrestler>
  ));
  return (
    <div>
    <h1>Wrestlers</h1>
		<Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">School</TableCell>
          </TableRow>
        </TableHead>
				<TableBody>
					{wrestlerNodes}
        </TableBody>
			</Table>
    </Paper>
    </div>
  );
};

WrestlerTable.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
  })),
};

WrestlerTable.defaultProps = {
  data: [],
}

export default WrestlerTable;
