import React, { Component } from 'react';
import {connect} from 'react-redux';
import {api} from '../../actions/api';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(api('some text'))
  }

  render() {
    return (
      <div className="App">
        app
      </div>
    );
  }
}

const mapStateToProps = ({api}) => {
  return {
    api
  };
};

export default connect(mapStateToProps)(App);
