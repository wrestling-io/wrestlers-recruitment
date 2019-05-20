// TableWrapper.js
import React, { Component } from 'react';
import 'whatwg-fetch';
import Table from './Table'

class TableWrapper extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: null,
    };
    this.pollInterval = null;
  }

  componentDidMount() {
    this.loadWrestlersFromServer();
    if (!this.pollInterval) {
      this.pollInterval = setInterval(this.loadWrestlersFromServer, 2000);
    }
  }

  componentWillUnmount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  loadWrestlersFromServer = () => {
    // fetch returns a promise. If you are not familiar with promises, see
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    fetch('/api/wrestlers/')
      .then(data => data.json())
      .then((res) => {
        if (!res.success) this.setState({ error: res.error });
        else this.setState({ data: res.data });
      });
  }

  render() {
    return (
      <div>
        <div>
          <Table
            name='wrestlers_hs'
            data={this.state.data}
            cols='4'
          />
        </div>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

export default TableWrapper;
