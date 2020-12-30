import { type } from 'os'
import React from 'react'

type func={
    start:()=>void
    stop:()=>void
    reset:()=>void
    disable:boolean
}
const TimerButton:React.FC<func> =({start,stop,reset,disable})=>{
    return(
        <div data-testid='main-div'>
                {!disable?
            <div className='btn_div'>
                <button className='start' onClick={start}>start</button>
            </div>
                :
            <div className='btn_div'>
                
                <button className='stop' onClick={stop}>stop</button>
                <button className='reset' onClick={reset}>reset</button>
                </div>
                }
        </div>
    )
}

export default TimerButton;