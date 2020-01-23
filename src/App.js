import React,{Component} from 'react';
import './App.css';

import {connect} from 'react-redux';

class App extends Component {

  // state = {
  //   age : 21
  // }

  // onAgeUp = () => {
  //   this.setState({
  //     ...this.state,
  //     age : ++this.state.age
  //   })
  // }

  // onAgeDown = () => {
  //   this.setState({
  //     ...this.state,
  //     age : --this.state.age
  //   })  
  // }

render(){
  return (
    <div className="App">
        <h2>React Redux</h2>
        <div>
            <div>Age: <span>{this.props.age}</span></div>
            <button onClick={this.props.onAgeUp}>Age Up</button>
            <button onClick={this.props.onAgeDown}>Age Down</button>

            {/* <div>Age: <span>{this.state.age}</span></div>
            <button onClick={this.onAgeUp}>Age Up</button>
            <button onClick={this.onAgeDown}>Age Down</button> */}
        </div>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
    age : state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp : () => dispatch({type:'AGE_UP'}),
    onAgeDown : () => dispatch({type : 'AGE_DOWN'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
