import React from 'react'

const Calculatorapp = () => {
  return (
    <React.Fragment className="w-[100%]">
        <section className='w-[30%] mx-auto bg-black mt-10 h-[80vh]'>
            <div className=''>
                <div className='border-2 border-white'>
                    <input stype='text' placeholder='0' className='w-full mt-10 h-[2em] bg-black text-[3em] text-right pr-[30px]'></input>
                </div>
                <div>
                    <div className='grid grid-cols-4 gap-x-5 gap-y-5 m-5'>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#f97316]'>AC</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#f97316]'>C</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]'>/</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635] row-span-2'>+</button>

                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]'>7</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]'>8</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]'>9</button>

                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]'>4</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]'>5</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]'>6</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]'>-</button>

                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]'>1</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]'>2</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]'>3</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]'>*</button>
                        
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]'>.</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#a3e635]'>0</button>
                        <button className='text-white text-[2em] py-[0.7em] bg-[#f97316] w-[215%]'>=</button>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Calculatorapp