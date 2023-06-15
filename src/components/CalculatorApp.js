import React, { useState } from 'react'
import Button from './common/Button'
import CalcDigitDisplay from './CalcDigitDisplay'

export default function CalculatorApp() {

    const [firstValue, setFirstValue] = useState('')
    const [operator, setOperator] = useState('')
    const [secondValue, setSecondValue] = useState('')
    const [finalValue, setFinalValue] = useState('')

    

    const enterNumber = (number) => {
        if(operator == '') {
            setFirstValue("" + firstValue + number)
        } else {
            setSecondValue(secondValue + number)
        }
            
    }

    const setOperation = (char) => {
        setOperator(char)
    }

    const calculate = () => {
        if(operator == '+') {
            setFinalValue(firstValue + secondValue)
        } else if (operator == '-') {
            setFinalValue(firstValue - secondValue)
        } else if (operator == '×') {
            setFinalValue(firstValue * secondValue)
        } else if (operator == '÷') {
            setFinalValue(firstValue / secondValue)
        }
    }

    const clear = () => {
        setFirstValue('')
        setSecondValue('')
        setOperation('')
        setFinalValue('')
    }
    // const numberButtons = Array.from({length: 10}, (_, index) => {
    //     return <Button name={index} handleClick={() => enterNumber(index)} />
    // }) //interesting way to create many buttons with numbers passed

    
    return (
        <>
            <h2 className='App-title'>Calculator App</h2>
            <div className='App-container'>
                <div className='Calc-container'>
                    <div className='Calc-textbox-container'></div> 
                    
                    <div className='Calc-calculation-container'>
                        <CalcDigitDisplay value={firstValue}/>
                        <CalcDigitDisplay value={operator}/>
                        <CalcDigitDisplay value={secondValue}/>
                        <CalcDigitDisplay value='='/>
                        <CalcDigitDisplay value={finalValue}/>
                    </div>
                    
                    <div className='Calc-button-container'>
                        <Button name="7" handleClick={() => enterNumber(7)} />
                        <Button name="8" handleClick={() => enterNumber(8)} />
                        <Button name="9" handleClick={() => enterNumber(9)} />
                        <Button name="÷" handleClick={() => setOperation('÷')} />

                        <Button name="4" handleClick={() => enterNumber(4)} />
                        <Button name="5" handleClick={() => enterNumber(5)} />
                        <Button name="6" handleClick={() => enterNumber(6)} />
                        <Button name="×" handleClick={() => setOperation('×')} />

                        <Button name="1" handleClick={() => enterNumber(1)} />
                        <Button name="2" handleClick={() => enterNumber(2)} />
                        <Button name="3" handleClick={() => enterNumber(3)} />
                        <Button name="+" handleClick={() => setOperation('+')} />

                        <Button name="c" handleClick={clear} />
                        <Button name="0" handleClick={() => enterNumber(0)} />
                        <Button name="=" handleClick={() => calculate()} />
                        <Button name="-" handleClick={() => setOperation('-')} />
                    </div>
                </div>
            </div>
        </>
    )
}
