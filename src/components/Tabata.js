import React, { useRef, useState } from 'react';
import CountdownView from './CountdownView';
import InputForm from './InputForm';
import Nav from './Nav';

export default function Tabata() {

    // view
    const [showTabata, setShowTabata] = useState(false)

    // form input
    const [prepInput, setPrepInput] = useState(0);
    const [workInput, setWorkInput] = useState(0);
    const [restInput, setRestInput] = useState(0);
    const [cyclesInput, setCyclesInput] = useState(0);
    const [roundsInput, setRoundsInput] = useState(0);
    const [restRoundsInput, setRestRoundInput] = useState(0);
    const [inputInfo, setInputInfo] = useState({});
    const [totalTime, setTotalTime] = useState(0);

    // counters
    const [counter, setCounter] = useState(0);
    const [cyclesCounter, setCyclesCounter] = useState(0);
    const [roundsCounter, setRoundsCounter] = useState(0);
    const [totalTimeCounter, setTotalTimeCounter] = useState(0);
    const [message, setMessage] = useState("");

    // IsPaused status: 
    // 0 shows start btn   time is not running -> onclick : start  & setIsPaused(1)
    // 1 shows pause btn   time is running     -> onclick : pause  & setIsPaused(2)
    // 2 shows resume btn  time is not running -> onclick : resume & setIsPaused(1)
    // 3 shows restart btn time is not running -> onclick : start
    const [isPaused, setIsPaused] = useState(0);

    // When buttons are pressed:
    const switchtBtn = () => {
        switch (stateRef.current[1]) {
            case 0: setIsPaused(1); pre(); break;
            case 1: setIsPaused(2); break;
            case 2: setIsPaused(1); break;
            case 3: pre(); break;
            default:
        }
    }

    // use ref
    const stateRef = useRef([]);
    stateRef.current[0] = cyclesCounter;
    stateRef.current[1] = isPaused;
    stateRef.current[2] = counter;
    stateRef.current[3] = totalTimeCounter;
    stateRef.current[4] = roundsCounter;

    // -------------- preparacion --------------
    function pre() {
        setIsPaused(1)
        setMessage("PREPARE")
        setCounter(prepInput)

        let interv = setInterval(() => {
            //if start or resume are pressed
            if (stateRef.current[1] === 1) {
                setCounter((prevCounter) => prevCounter - 1)
                setTotalTimeCounter((prevCounter) => prevCounter - 1)
                //if prepare time is finish, execute work()
                if (stateRef.current[2] === 1) {
                    clearInterval(interv)
                    setRoundsCounter((prevCounter) => prevCounter + 1)
                    work()
                }
            }
        }, 1000);
    }

    // -------------- work --------------
    function work() {
        setMessage("WORK")
        setCyclesCounter((prevCounter) => prevCounter + 1)
        setCounter(workInput)
        let interv = setInterval(() => {
            //if start or resume are pressed
            if (stateRef.current[1] === 1) {
                setCounter((prevCounter) => prevCounter - 1)
                setTotalTimeCounter((prevCounter) => prevCounter - 1)
                //if  work time is finish 
                if (stateRef.current[2] === 1) {
                    // if  cycles are completed,  
                    if (stateRef.current[0] === cyclesInput) {
                        setCyclesCounter(0)

                        // if rounds are completed
                        if (stateRef.current[4] === roundsInput) {

                            clearInterval(interv)
                            setMessage("FINISH")
                            setIsPaused(3)
                            setRoundsCounter(0)
                            setTotalTimeCounter(totalTime)
                        } else {
                            //if rounds are not completed
                            setRoundsCounter((prevCounter) => prevCounter + 1)
                            clearInterval(interv)
                            restRound()
                        }

                        //if  work time is finish & rounds are not completed
                    } else {
                        clearInterval(interv)
                        rest()
                    }
                }
            }
        }, 1000);
    }
    // -------------- rest --------------
    function rest() {
        setMessage("REST")
        setCounter(restInput)
        let interv = setInterval(() => {
            //if start or resume are pressed
            if (stateRef.current[1] === 1) {
                setCounter((prevCounter) => prevCounter - 1)
                setTotalTimeCounter((prevCounter) => prevCounter - 1)
                //if  rest time is finish , execute work()
                if (stateRef.current[2] === 1) {
                    clearInterval(interv)
                    work()
                }
            }
        }, 1000);
    }
    // -------------- rest round--------------
    function restRound() {
        setMessage("REST ROUND")
        setCounter(restRoundsInput)
        let interv = setInterval(() => {
            //if start or resume are pressed
            if (stateRef.current[1] === 1) {
                setCounter((prevCounter) => prevCounter - 1)
                setTotalTimeCounter((prevCounter) => prevCounter - 1)
                //if  rest time is finish , execute work()
                if (stateRef.current[2] === 1) {
                    clearInterval(interv)
                    work()
                }
            }
        }, 1000);
    }

    function formSubmit(info) {
        setPrepInput(info.prep)
        setWorkInput(info.work)
        setRestInput(info.rest)
        setCyclesInput(info.cycles)
        setRoundsInput(info.rounds)
        setRestRoundInput(info.restRound)
        setTotalTime(info.totalTime)
        setTotalTimeCounter(info.totalTime)
        setInputInfo(info)
        setShowTabata(true)
    }

    let dataToCountdownView = {
        totalTimeCounter, counter, cyclesCounter, roundsCounter,
        inputInfo, message, isPaused, switchtBtn
    }
    return (
        <div >
            <Nav />

            <div className='sm:w-screen h-[calc(100vh-64px)] flex '>
                {!showTabata ?
                    <InputForm formSubmit={formSubmit} />
                    :
                    <CountdownView data={dataToCountdownView} />
                }
            </div>
        </div>
    )
}
