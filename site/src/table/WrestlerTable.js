// WrestlerTable.js
import React from 'react';
import moment from 'moment'; import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Wrestler from './../wrestler/Wrestler';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: AddBox,
  Check: Check,
  Clear: Clear,
  Delete: DeleteOutline,
  DetailPanel: ChevronRight,
  Edit: Edit,
  Export: SaveAlt,
  Filter: FilterList,
  FirstPage: FirstPage,
  LastPage: LastPage,
  NextPage: ChevronRight,
  PreviousPage: ChevronLeft,
  ResetSearch: Clear,
  Search: Search,
  SortArrow: ArrowUpward,
  ThirdStateCheck: Remove,
  ViewColumn: ViewColumn
};

export default function WrestlerTable(props) {
  const [state, setState] = React.useState({
    columns: [
      { title: 'First Name', field: 'first_name' },
      { title: 'Last Name', field: 'last_name' },
      { title: 'Date of Birth', field: 'dob'},
      { title: 'Weight', field: 'weight'},
      { title: 'School', field: 'school'},
    ],
  });

  return (
    <MaterialTable
      title="Wrestlers"
      columns={state.columns}
      data={props.data}
			icons={tableIcons}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}

const restlerTable = (props) => {
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

