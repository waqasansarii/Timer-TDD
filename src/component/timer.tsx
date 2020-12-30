import React, { useEffect, useState } from 'react'
import TimerButton from './timerBatton'
import './timer.css'


const Timer = () => {


    let [sec ,setSec] = useState<number>(0)
    let [min,setMin] = useState<number>(0)
    let [hour,setHour] = useState<number>(0)
    let [inter,setInter] = useState<number>(0)
    let [on ,setOn] = useState(false)

  
 const startTimer = ()=> {
     
     var   set:any = setInterval(():void=>{
         if(sec===59){
             setMin(++min)
             sec=0
             
            }
            if(min===59){
                setHour(++hour)
                min=0
            }
            else{
                setSec(++sec)
            }
        },1000)
        setInter(set)
        setOn(true)
        console.log(set)

    }
    const handleStop =()=>{
        setOn(false)
        console.log(inter)
        clearInterval(inter)
        console.log('stopp')
    }
    const hnadleReset=()=>{
        clearInterval(inter)
        setHour(0) ;setMin(0);setSec(0)
        console.log('reset')
        setOn(false)

    }

    return (
        <div>
            <div>
                <h1>Timer App</h1>
            </div>
            <div id="clockdiv">
                <div  >
                    <span data-testid='value' className="hours">{hour===0?'00':hour}</span>
                    <div className="smalltext">Hours</div>
                </div>
                <div>
                    <span data-testid='value' className="minutes">{min===0?'00':min}</span>
                    <div className="smalltext">Minutes</div>
                </div>
                <div>
                    <span data-testid='value' className="seconds">{sec===0?'00':sec}</span>
                    <div className="smalltext">Seconds</div>
                </div>
            </div>
            <div>
                <TimerButton start={startTimer} stop={handleStop} reset={hnadleReset} disable={on} />
            </div>
        </div>
    )
}
export default Timer