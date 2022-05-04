import React,{useState} from 'react';
import Buttons from '../Buttons/Buttons';
import Display from '../display/Display';
import './style.css';

function Calculate() {
    //States for Display
    const [numDisplay1, setNumDisplay1] = useState('')
    const [numDisplay2, setNumDisplay2] = useState('')
    const [operatorClick, setOperatorClick] = useState('') 
    const [result, setResult] = useState('')

    // States used to check situations
    const [operator, setOperator] = useState(false)
    const [operator2, setOperator2] = useState(true)
    const [firstClick, setFirstClick] = useState(false)
    const [firstCalc, setFirstCalc] = useState(false)

    // State that receives the First value, the operator, the second value and does the operation
    // 'lastNumber' is the result of the last operation
    const [calculo, setCalculo] = useState({
        'firstNum': '',
        'operator': '',
        'secNum': '',
        'finalAnswer': ''
    })

    // Function to receive the values ​​to be displayed on the Display and saved in the state Calculation
    const receivesValues = (num) => {
        if(operator === false){
            // This IF will check if it already has a result on the screen and click on a number, it will clear and put the number typed
            if(firstCalc){
                cleanValues(num, true)
                setFirstCalc(false)
            }if( num === '.'){
                // Adding point to Float value
                calculo.firstNum += num
                setNumDisplay1(numDisplay1 + num)
                calculo.finalAnswer = ''
                }else if (num === 'backspace'){
                //Deletes the last value of the 'firstNum' key from the calculated state
                setCalculo({ 
                    'firstNum': calculo.firstNum.slice(0, -1),
                    'operator': '',
                    'secNum': ''
                })
                setNumDisplay1(numDisplay1)   
            }else{ 
                //Add number to screen/object
                calculo.firstNum += num
                setNumDisplay1(numDisplay1 + num)
                calculo.finalAnswer = ''
            }
        }else{
            if (num === '.'){
                // Adding point to Float value
                calculo.secNum += num
                setNumDisplay2(numDisplay2 + num)
            }else if(num === 'backspace'){
                //Delete the last value of the 'secondNum' key from the calculated state and keep the others
                setCalculo({
                    'firstNum': calculo.firstNum,
                    'operator': calculo.operator,
                    'secNum': calculo.secNum.slice(0, -1),
                })
            }else{
                // Add number to screen/object
                calculo.secNum += num
                setNumDisplay2(numDisplay2 + num)
            }
        }
    }

    // Function to receive the clicked operator

    const receivesOperator = (num) => {
        calculo['operator'] = num
        setOperatorClick(num)
        setOperator(true)
        setOperator2(false)

        // Check if there was already the first click on the '=', if so, it will add the last number and the operation
        // to do another calculation.
        if(firstClick){
            setCalculo({
            'firstNum': calculo.finalAnswer,
            'operator': calculo.operator,
            'secNum': '',
            })
            setNumDisplay1(calculo.finalAnswer)
            setNumDisplay2('')   
        }

        setFirstClick(true)
    }

    // Function to calculate the received values
    const doOperation = (num) => {
        // Object with the respective functions of each type of operation
        const operacoes = {
            '+': (num1, num2) => (parseFloat(num1) + parseFloat(num2)),
            '-': (num1, num2) => (parseFloat(num1) - parseFloat(num2)),
            '/': (num1, num2) => (parseFloat(num1) / parseFloat(num2)),
            '%': (num1, num2) => (parseFloat(num1) % parseFloat(num2)),
            '*': (num1, num2) => (parseFloat(num1) * parseFloat(num2)),
        }
        
        // Playing the result of the operation on the screen
        let result = operacoes[calculo['operator']](calculo.firstNum, calculo.secNum)
        calculo.finalAnswer = result
        setResult(result)

        // Adjusting verification states
        setOperator2(true)
        setOperator(false)
        setFirstCalc(true)
    }

    
// Function to clear the display and object values, for the next operation
    const cleanValues = (num, calculaDnv) => {
        // This IF will check if it already has a result on the screen and click on a number, it will clear and put the number typed
        if(calculaDnv){ 
            setCalculo({
                'firstNum': num,
                'operator': calculo.operator,
                'secNum': '',  
            })

            setFirstClick(false)
            setResult('')
            setNumDisplay1('')
            setNumDisplay2('')
            setOperatorClick('')
        }else{
            setCalculo({
                'firstNum': '',
                'operator': calculo.operator,
                'secNum': '',  
            })

            setFirstClick(false)
            setResult('')
            setNumDisplay1('')
            setNumDisplay2('')
            setOperatorClick('')
        }
    }
    
    // Function to show error message
    const showError = () => {
        setResult('Error')
    }
    
    // General function responsible for supporting the other functions and making the necessary checks to execute each function according to the button click
    const calcula = (num) => {
        if (!isNaN(num) || num === '.' || num === 'backspace'){
            receivesValues(num)
        }else if ((num === '+' || num === '-' || num === '/' || num === '*' || num === '%') & operator2){
            receivesOperator(num)
        }else if(num === 'C'){
            cleanValues()
        }else if(num === '='){
            if(calculo.secNum !== ''){
                doOperation(num)
            }else{
                showError()
            }
        }
    }
    return (
        <div className='calculate'>
            <Display
                    result = {result} 
                    number1 = {calculo.firstNum}
                    number2 = {calculo.secNum}
                    operator = {operatorClick}
                />
            <Buttons calcula = {calcula} />
        </div>
    )
}

export default Calculate