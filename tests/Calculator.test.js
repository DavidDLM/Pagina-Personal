import React from "react"
import { useState } from "react"

function CalculatorItem() {
    const [operator, setOperator] = useState("")
    const [negative, setNegative] = useState(false)
    const [result, setResult] = useState("")

    const math = ["+", "+/-", "-", "*", "/", "=", "%"]

    const inputNum = (e) => {
        if (e === "DEL") {
            setOperator("")
            setResult("")
            setNegative(false)
            return
        } else if (operator.length === 9) {
            return
        }
        if (math.includes(e) && operator === "" ||
            math.includes(e) && math.includes(operator.slice(-1))) {
            return
        }
        else if (e === "+/-" && math.includes(result.charAt(0)) === false) {
            setOperator("-" + operator)
            setResult("-" + result)
            setNegative(true)
        }
        setOperator(operator + e)
        if (e === "=") {
            if (math.includes(operator.slice(-1))) return
            else {
                if (parseFloat(eval(operator)) < 0) {
                    setOperator("MATH_ERROR")
                    setResult("")
                    setNegative(false)
                } else if (parseFloat(eval(operator)).toString().length > 9) {
                    setOperator(eval(operator).toFixed(8).toString())
                    setOperator(eval(operator).toFixed(8).toString())
                    setNegative(false)
                } else if (parseFloat(eval(operator)) > 999999999) {
                    setOperator("MATH_ERROR")
                    setResult("")
                    setNegative(false)
                } else {
                    setOperator(eval(operator).toString())
                    setResult(eval(operator).toString())
                }
            }
        }
    }

    test('SUM funciona', () => {
        operator = "1 + 2"
        expect(eval(operator)).toBe(3);
    })
    test('REST funciona', () => {
        operator = "2 - 1"
        expect(eval(operator)).toBe(1);
    })
    test('MUL funciona', () => {
        operator = "1 * 2"
        expect(eval(operator)).toBe(2);
    })
    test('DIV funciona', () => {
        operator = "2 / 1"
        expect(eval(operator)).toBe(1);
    })
}

export default CalculatorItem;