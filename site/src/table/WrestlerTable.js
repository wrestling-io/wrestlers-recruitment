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
		error: null,
  });
  
  const CRUDAction = {
    onRowAdd: newData =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve();
					fetch('/api/wrestlers', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(newData),
					}).then(res => res.json()).then((res) => {
						if (!res.success) setState({ error: res.error.message || res.error });
						else console.log("Wrestler add success");
					});
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
					fetch(`api/wrestlers/${oldData._id}`, { method: 'DELETE' })
      			.then(res => res.json()).then((res) => {
       	 			if (!res.success) this.setState({ error: res.error });
							else console.log("Wrestler delete success");
      			});
        }, 600);
      }),
  }

  let action = null;
  if (props.canCRUD == true) {
    action = CRUDAction;
  }

  return (
    <MaterialTable
      title="Wrestlers"
      columns={state.columns}
      data={props.data}
			icons={tableIcons}
      editable={action}
    />
  );
}
