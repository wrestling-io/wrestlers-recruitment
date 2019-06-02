// FormWrapper.js
import React, { Component } from 'react';
import 'whatwg-fetch';
import CreateForm from './CreateForm';

class FormWrapper extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      first_name: '',
      last_name: '',
      dob: '',
      weight: 0,
      school: '',
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

  onChangeText = (e) => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  onUpdateWrestler = (id) => {
    const oldWrestler = this.state.data.find(c => c._id === id);
    if (!oldWrestler) return;
    this.setState({ first_name: oldWrestler.first_name, last_name: oldWrestler.last_name, dob: oldWrestler.dob, weight: oldWrestler.weight, school: oldWrestler.school, updateId: id });
  }

  onDeleteWrestler = (id) => {
    const i = this.state.data.findIndex(c => c._id === id);
    const data = [
      ...this.state.data.slice(0, i),
      ...this.state.data.slice(i + 1),
    ];
    this.setState({ data });
    fetch(`api/wrestlers/${id}`, { method: 'DELETE' })
      .then(res => res.json()).then((res) => {
        if (!res.success) this.setState({ error: res.error });
      });
  }

  submitWrestler = (e) => {
    e.preventDefault();
    console.log("working")
    const { first_name, last_name, dob, weight, school, updateId } = this.state;
    if (!first_name || !last_name || !dob || !weight || !school) return;
    if (updateId) {
      this.submitUpdatedWrestler();
    } else {
      this.submitNewWrestler();
    }
  }

  submitNewWrestler = () => {
    const { first_name, last_name, dob, weight, school, updateId } = this.state;
    const data = [...this.state.data, { first_name, last_name, dob, weight, school, _id: Date.now().toString() }];
    this.setState({ data });
    fetch('/api/wrestlers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ first_name, last_name, dob, weight, school }),
    }).then(res => res.json()).then((res) => {
      if (!res.success) this.setState({ error: res.error.message || res.error });
      else this.setState({ first_name: '', last_name: '', dob: '', weight: 0, school: '', error: null });
    });
  }

  submitUpdatedWrestler = () => {
    const { first_name, last_name, dob, weight, school, updateId } = this.state;
    fetch(`/api/wrestlers/${updateId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ first_name, last_name, dob, weight, school }),
    }).then(res => res.json()).then((res) => {
      if (!res.success) this.setState({ error: res.error.message || res.error });
      else this.setState({ first_name: '', last_name: '', dob: '', weight: 0, school: '', error: null });
    });
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
      <div className="container">
        <div className="form">
          <CreateForm
            author={this.state.author}
            first_name={this.state.first_name}
            last_name={this.state.last_name}
            dob={this.state.dob}
            weight={this.state.weight}
            school={this.state.school}
            handleChangeText={this.onChangeText}
            submitWrestler={this.submitWrestler}
          />
        </div>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

export default FormWrapper;
