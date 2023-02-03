import React from 'react'
import { secToMin } from '../functions'
import BtnTabata from './BtnTabata';
import InputIInfo from './InputIInfo';

export default function CountdownView({ data }) {

    let { totalTimeCounter, counter, cyclesCounter, roundsCounter,
        inputInfo, message, isPaused, switchtBtn } = data

    function colorTask(mes) {
        if (mes === "PREPARE") return { backgroundColor: 'pink' }
        if (mes === "WORK") return { backgroundColor: 'green' }
        if (mes === "REST") return { backgroundColor: 'red' }
        else return { backgroundColor: 'white' }
    }

    return (
        <div className='m-auto text-xl text-center flex flex-col justify-between  
                        w-5/6
                        md:w-2/4 md:py-10 md:px-20 md:border-2 md:border-blue-500 md:rounded-md'>

            <div className='flex justify-between'>
                <InputIInfo title="Prep" data={inputInfo.prep} />
                <InputIInfo title="Work" data={inputInfo.work} />
                <InputIInfo title="Rest W." data={inputInfo.rest} />
            </div>
            <div className='flex justify-between'>
                <InputIInfo title="Cycles" data={inputInfo.cycles} />
                <InputIInfo title="Rounds" data={inputInfo.rounds} />
                <InputIInfo title="Rest R." data={inputInfo.restRound} />
            </div>

            <div className='bg-gray-200 rounded-lg  leading-none p-3  my-2'>
                <p>TIME</p>
                <p className='text-5xl'>{secToMin(totalTimeCounter)}</p>
            </div>

            <div className=' rounded-lg leading-none p-3 my-2' style={colorTask(message)}>
                <p>{message}</p>
                <p className='text-7xl'>{counter}</p>
            </div>

            <div className='bg-white rounded-lg leading-none p-3 my-2 flex justify-around'>
                <div>
                    <p>ROUNDS</p>
                    <p className='text-5xl' >{roundsCounter}/{inputInfo.rounds}   </p>
                </div>
                <div>
                    <p>CYCLES</p>
                    <p className='text-5xl' >{cyclesCounter}/{inputInfo.cycles}</p>
                </div>
            </div>

            {isPaused === 0 ?
                <BtnTabata fn={switchtBtn} text="START" myClass="text-blue-700 border-blue-500" />
                : isPaused === 1 ?
                    <BtnTabata fn={switchtBtn} text="PAUSE" myClass=" text-red-700  border-red-800 " />
                    : isPaused === 2 ?
                        <BtnTabata fn={switchtBtn} text="RESUME" myClass=" text-green-700   border-green-800" />
                        :
                        <BtnTabata fn={switchtBtn} text="RESTART" myClass=" text-purple-700  border-purple-800" />
            }

        </div >
    )
}
