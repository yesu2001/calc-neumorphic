import React from 'react'
import './style.css';

function Display(props) {
  return (
    <div className="display">
       <p className = 'expression'>{props.number1} {props.operator} {props.number2}</p>
        <p className = 'result'>{props.result}</p>
    </div>
  )
}

export default Display