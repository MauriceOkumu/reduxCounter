import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class EnglishCounter extends Component{
  render(){
    return(
      <div className="counter"> 
        <h2> English Counter </h2>
        <div> Increase </div>
        <p> Decrease </p>
        <p></p>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
    
//   };
// } 

// const mapDispatchToProps = dispatch => bindActionCreators(, dispatch);

// export default connect()();
