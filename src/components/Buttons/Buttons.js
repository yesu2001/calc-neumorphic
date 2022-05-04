import React from 'react'
import './style.css';

function Buttons(props) {
  return (
    <div className="buttons">
        <button className="sign1" value = {'C'} onClick = {(e) => props.calcula(e.target.value)}> C </button>
        <button className="sign1" value = {'backspace'} onClick = {(e) => props.calcula(e.target.value)} >Del</button>
        <button className="sign1" value = {'%'} onClick = {(e) => props.calcula(e.target.value)}> % </button>
        <button value = {'/'} onClick = {(e) => props.calcula(e.target.value)} className = 'operador'>/</button>
        
        <button className="num" value = {'7'} onClick = {(e) => props.calcula(e.target.value)}>7</button>
        <button className="num" value = {'8'} onClick = {(e) => props.calcula(e.target.value)}>8</button>
        <button className="num" value = {'9'} onClick = {(e) => props.calcula(e.target.value)}>9</button>
        <button value = {'*'} onClick = {(e) => props.calcula(e.target.value)} className = 'operador' >x</button>

        <button className="num" value = {'4'} onClick = {(e) => props.calcula(e.target.value)} >4</button>
        <button className="num" value = {'5'} onClick = {(e) => props.calcula(e.target.value)}>5</button>
        <button className="num" value = {'6'} onClick = {(e) => props.calcula(e.target.value)}>6</button>
        <button  value = {'-'} onClick = {(e) => props.calcula(e.target.value)} className = 'operador'>-</button>


        <button className="num" value = {'1'} onClick = {(e) => props.calcula(e.target.value)}> 1 </button>
        <button className="num" value = {'2'} onClick = {(e) => props.calcula(e.target.value)}> 2 </button>
        <button className="num" value = {'3'} onClick = {(e) => props.calcula(e.target.value)} >3 </button>
        <button value = {'+'} onClick = {(e) => props.calcula(e.target.value)} className = 'operador'>+</button>

        <button className="zero" value = {'0'} onClick = {(e) => props.calcula(e.target.value)} >0</button>
        <button value = {'.'} className="dot" onClick = {(e) => props.calcula(e.target.value)} >.</button>
        <button value = {'='} onClick = {(e) => props.calcula(e.target.value)} className = 'operador equals'>=</button>
    </div>
  )
}

export default Buttons