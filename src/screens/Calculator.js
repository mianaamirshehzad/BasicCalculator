import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';

//react native code to make a calculator?
const Calculator = (props) => {

    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [operator, setOperator] = useState("");
    const [result, setResult] = useState("");

    const handleNumber = (n) => {
        if (!operator) {
            if (firstNum === "0") {
                setFirstNum(n);
            } else {
                setFirstNum(firstNum + n);
            }
        } else {
            setSecondNum(secondNum + n);
        }

    }
    // Clearing the first input number
    const clearIt = () => {
        setFirstNum('');
        setSecondNum('');
        setOperator('');
    }

    const handleOperator = (op) => {
        if (firstNum) {
            setOperator(op);
        }
    }

    const handleResult = () => {
        let total;
        switch (operator) {
            case "+":
                // Unary operator + before any string can make it a number. 
                // Plus operator can do concatenation if the first number and second number are 
                // being treated as strings
                total = +firstNum + +secondNum;
                break;
            case '-':
                total = firstNum - secondNum;
                break;
            case '*':
                total = firstNum * secondNum;
                break;
            case '/':
                total = firstNum / secondNum;
                break;
            case '%':
                total = (firstNum / secondNum) * 100;
                break;
            default:
                console.log("Error in Arithmatic Operations");
        }
        setResult(total);
        setSecondNum("");
        setOperator("");
        setFirstNum(result);
    };

    const deleteSingle = () => {

    };

    const invertSign = () => {
        let n = firstNum;
        if (n > 0) {
            n = -n;
        } else {
            n = n * -1;
        }
        setFirstNum(n);
    };


    return (
        <View style={styles.container}>
            {/* Calculation View */}
            <View style={styles.calView} >
                <Text style={{ fontSize: 20 }} >
                    {firstNum} {operator} {secondNum}
                </Text>
            </View>
            <View style={styles.resultView} >
                <Text style={{ fontSize: 25, fontWeight: 'bold' }} >
                    {result}
                </Text>
            </View>
            <View>
                {/* Numbers buttons */}
                <View >
                    <View style={{ flexDirection: 'row' }} >
                        <CustomButton
                            number="DE"
                            onPress={() => clearIt()}
                        />
                        <CustomButton
                            number="+/-"
                            onPress={() => invertSign()} />
                        <CustomButton
                            number="%"
                            onPress={() => handleOperator('%')} />
                        <CustomButton
                            number="/"
                            onPress={() => handleOperator('/')} />
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <CustomButton
                            number="7"
                            onPress={() => handleNumber('7')} />
                        <CustomButton
                            number="8"
                            onPress={() => handleNumber('8')} />
                        <CustomButton
                            number="9"
                            onPress={() => handleNumber('9')} />
                        <CustomButton
                            number="*"
                            onPress={() => handleOperator('*')} />

                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <CustomButton
                            number="4"
                            onPress={() => handleNumber('4')} />
                        <CustomButton
                            number="5"
                            onPress={() => handleNumber('5')} />
                        <CustomButton
                            number="6"
                            onPress={() => handleNumber('6')} />
                        <CustomButton
                            number="-"
                            onPress={() => handleOperator('-')} />
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <CustomButton
                            number="1"
                            onPress={() => handleNumber('1')} />
                        <CustomButton
                            number="2"
                            onPress={() => handleNumber('2')} />
                        <CustomButton
                            number="3"
                            onPress={() => handleNumber('3')} />
                        <CustomButton
                            number="+"
                            onPress={() => handleOperator('+')} />
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <CustomButton
                            number="0"
                            onPress={() => handleNumber('0')} />
                        <CustomButton
                            number="."
                            onPress={() => handleNumber('.')} />
                        <CustomButton
                            number="="
                            style={{ backgroundColor: '#f1cb4e', width: 160 }}
                            onPress={() => handleResult()} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66b6d2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    calView: {
        backgroundColor: 'white',
        width: '97%',
        height: '12%',
        padding: 10,
        margin: 5,
        borderRadius: 8,

    },
    resultView: {
        backgroundColor: '#F9F3F1',
        width: '97%',
        height: '6%',
        borderRadius: 8,
        padding: 7,
        justifyContent: 'center'

    }
});

export default Calculator;