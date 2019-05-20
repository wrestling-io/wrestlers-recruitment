import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TableWrapper from './table/TableWrapper';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TableWrapper />, document.getElementById('root'));

registerServiceWorker();
