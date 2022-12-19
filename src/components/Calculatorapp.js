import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber, addResult, addHistory, clear } from '../Redux/reducer'
import { numberSelector, totalSelector,historySelector } from '../Redux/useSelector'


const Calculatorapp = () => {
        const dispatch = useDispatch()
        const number = useSelector(numberSelector) 
        const history = useSelector(historySelector)
        const total = useSelector(totalSelector)
  return (
    <React.Fragment className="w-[100%]">
        <section className='w-[30%] mx-auto bg-black mt-10 h-[90vh]'>
            <div className=''>
                <div className='border-2 border-white'>
                    <input value={number} stype='text' placeholder='0' className='w-full mt-10 h-[2em] bg-black text-[3em] text-white text-right pr-[30px]'></input>
                    <p stype='text' placeholder='' className='w-full mt-10 h-[2em] bg-black text-[3em] text-white text-right pr-[30px]'>{total}</p>
                </div>
                <div>
                    <div className='grid grid-cols-4 gap-x-5 gap-y-5 m-5'>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#f97316]' onClick={() =>dispatch(clear())}>AC</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#f97316]' onClick={() => addHistory()}>H</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]' onClick={()=>dispatch(addNumber(' / '))}>/</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635] row-span-2' onClick={()=>dispatch(addNumber(' + '))}>+</button>

                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]' onClick={()=>dispatch(addNumber(7 ))}>7</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]' onClick={()=>dispatch(addNumber(8))}>8</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]' onClick={()=>dispatch(addNumber(9))}>9</button>

                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]' onClick={()=>dispatch(addNumber(4))}>4</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]' onClick={()=>dispatch(addNumber(5))}>5</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]' onClick={()=>dispatch(addNumber(6))}>6</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]' onClick={()=>dispatch(addNumber(' - '))}>-</button>

                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]' onClick={()=>dispatch(addNumber(1))}>1</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]' onClick={()=>dispatch(addNumber(2))}>2</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]' onClick={()=>dispatch(addNumber(3))}>3</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]' onClick={()=>dispatch(addNumber(' * '))}>*</button>
                        
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]' onClick={()=>dispatch(addNumber(' . '))}>.</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]' onClick={()=>dispatch(addNumber(0))}>0</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#f97316] w-[215%]' onClick={()=>{
                            if(!number)return 
                            // if(history[history.length-1]=)
                            console.log(history[history.length-1]);
                            dispatch(addResult(eval(number)))
                        }}>=</button>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Calculatorapp