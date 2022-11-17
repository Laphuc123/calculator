import { LOAD_ANS, LOAD_CLEAR, LOAD_BUTTONS, LOAD_BACKSPACE } from "./calculator_actionType";

export const loatButtons = (number) => {
    return{
        type:LOAD_BUTTONS,
        payload:number
    }
}

export const loatAns = (number) => {
    return{
        type:LOAD_ANS,
        payload:number
    }
}

export const loatClear = (number) => {
    return{
        type:LOAD_CLEAR,
        payload:number
    }
}

export const loatBackspace = (number) => {
    return{
        type:LOAD_BACKSPACE,
        payload:number
    }
}