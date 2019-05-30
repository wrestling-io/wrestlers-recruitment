import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import TableWrapper from './table/TableWrapper';
import Admin from './admin/Admin';
import registerServiceWorker from './registerServiceWorker';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={TableWrapper} />
      <Route path="/admin" component={Admin} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

registerServiceWorker();
