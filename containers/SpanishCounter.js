import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseSpanish, decreaseSpanish } from '../src/actions/index';

class SpanishCounter extends Component{
  render(){
    return(
      <div className="counter"> 
        <h2> Contador en espanol </h2>
        <div onClick={() => this.props.increaseSpanish()}> Incrementare </div>
        <p onClick={() => this.props.decreaseSpanish()}> Reducir </p>
        <p>{this.props.Spanishcurrent}</p>
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log('spanish', state)
  return {
    Spanishcurrent: state.SpanishCurrentReducer
  };
} 

const mapDispatchToProps = dispatch => bindActionCreators({ increaseSpanish, decreaseSpanish}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SpanishCounter);