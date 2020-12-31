import  {  useState } from 'react'
import './timer.css'


const Timer = () => {


    let [sec, setSec] = useState<number>(0)
    let [min, setMin] = useState<number>(0)
    let [hour, setHour] = useState<number>(0)
    let [inter, setInter] = useState<number>(0)
    let [on, setOn] = useState(false)


    const startTimer = () => {

        var set: any = setInterval((): void => {
            if (sec === 59) {
                setMin(++min)
                sec = 0

            }
            if (min === 59) {
                setHour(++hour)
                min = 0
            }
            else {
                setSec(++sec)
            }
        }, 1000)
        setInter(set)
        setOn(true)
        console.log(set)

    }
    const handleStop = () => {
        setOn(false)
        console.log(inter)
        clearInterval(inter)
        console.log('stopp')
    }
    const hnadleReset = () => {
        clearInterval(inter)
        setHour(0); setMin(0); setSec(0)
        console.log('reset')
        setOn(false)

    }

    return (
        <div data-testid="timer">
            <div>
                <h1>Timer App</h1>
            </div>
            <div id="clockdiv">
                <div  >
                    <span data-testid='value1' className="hours">{hour === 0 ? '00' : hour}</span>
                    <div className="smalltext">Hours</div>
                </div>
                <div>
                    <span data-testid='value' className="minutes">{min === 0 ? '00' : min}</span>
                    <div className="smalltext">Minutes</div>
                </div>
                <div>
                    <span data-testid='sec' className="seconds">{sec === 0 ? '00' : sec}</span>
                    <div className="smalltext">Seconds</div>
                </div>
            </div>
            <div >
                {!on?
                    <div className='btn_div'>
                        <button className='start'  onClick={startTimer} data-testid='start'>start</button>
                    </div>
                    :
                    <div className='btn_div'>
                        <button className='stop' onClick={handleStop}>stop</button>
                        <button className='reset' onClick={hnadleReset}>reset</button>
                    </div>

                }
            </div>
        </div>
    )
}
export default Timer