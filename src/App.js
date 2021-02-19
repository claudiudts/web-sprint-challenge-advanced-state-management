import React, { Component } from "react";
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { fetchSmurfs } from './actions/index';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


class App extends Component {
  // calling fetchSmurfs when component loads
  componentDidMount() {
    console.log('component did mount, yes!')
    // the component mounts and I can see the it if I console log, but nothing is rendering from the API request.
    fetchSmurfs();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SmurfList />
          <AddForm />
        </main>
      </div>
    );
  }
}

export default connect(null, {fetchSmurfs})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.