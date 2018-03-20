import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, NavLink } from 'react-router-dom';

// import apiService from './shared/services/api-service';

import './App.css';

import Input from './components/Input'
import Button from './components/Button'
import PageTitle from './components/PageTitle';

const NewReport = () => <div>Start New Report</div>;
const DataView = () => <div>View All Reports</div>;

class HomePage extends Component {
  // componentDidMount() {
  //     apiService
  //         .get('/someModels')
  //         .then(function (response) {
  //             console.log(response);
  //         })
  //         .catch(function (error) {
  //             console.log(error);
  //         });
  // }
  changeFilter = ev => this.props.dispatch({ type: 'SET_FILTER', payload: ev.target.value })
  render() {
    const { filter } = this.props
    return (
      <div>
        <Input value={filter} onChange={this.changeFilter} />
        <NavLink className="btn" exact to="/report">Report Incident</NavLink>
        <NavLink className="btn" exact to="/data">View Reports</NavLink>
      </div>
    );
  }
}

const mapStateToProps = storeState => ({ filter: storeState.filter })
connect(mapStateToProps)(HomePage);

export const App = () => {
  return (
    <div className="App">
      <PageTitle>CatCall.io</PageTitle>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/report" component={NewReport}/>
        <Route exact path="/data" component={DataView}/>
      </Switch>
    </div>
  );
};
