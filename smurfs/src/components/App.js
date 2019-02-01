import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import { fetchSmurfs, addSmurf, deleteSmurf } from "../actions";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div>
        {this.props.fetchingSmurfs ? (
          <h2>Fetching some Smurfs...</h2>
        ) : (
          <div>
            <h1>You have entered Smurf Village</h1>
            <SmurfForm />
            <h2>Residents Include:</h2>
            <SmurfList {...this.props} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  {
    fetchSmurfs,
    addSmurf,
    deleteSmurf
  }
)(App);
