import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseEnglish, decreaseEnglish, random } from '../src/actions/index';

class EnglishCounter extends Component{
  render(){
    return(
      <div className="counter"> 
        <h2> English Counter </h2>
        <div onClick={() => this.props.increaseEnglish()}> Increase </div>
        <p onClick={() => this.props.decreaseEnglish()}> Decrease </p>
        <p>{this.props.Englishcurrent}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    Englishcurrent: state.EnglishCurrentReducer
  };
} 

const mapDispatchToProps = dispatch => bindActionCreators({ increaseEnglish, decreaseEnglish, random }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EnglishCounter);