import {calculatorReducer} from './calculatorRedux/calculator.reducer'
import {combineReducers} from 'redux'


let rootReducer = combineReducers({
    [CALCULATOR_KEY]:calculatorReduce
})

export {rootReducer}