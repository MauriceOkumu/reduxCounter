import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class EnglishCounter extends Component{
  render(){
    return(
      <div className="counter"> 
        <h2> Spanish Counter </h2>
        <div> Incrementar </div>
        <p> Disminución </p>
        <p></p>
      </div>
    )
  }
}