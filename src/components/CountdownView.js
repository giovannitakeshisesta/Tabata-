import React from 'react'
import { secToMin } from '../functions'
import BtnTabata from './BtnTabata';
import InputIInfo from './InputIInfo';

export default function CountdownView({
    totalTimeCounter,
    message,
    counter,
    cyclesCounter,
    roundsCounter,
    isPaused,
    switchtBtn,
    inputInfo }) {

    function colorTask(mes) {
        if (mes === "PREPARE") return { backgroundColor: 'pink' }
        if (mes === "WORK") return { backgroundColor: 'green' }
        if (mes === "REST") return { backgroundColor: 'red' }
        else return { backgroundColor: 'white' }
    }

    return (
        <div className='m-auto text-xl text-center flex flex-col justify-between  
                        md:w-2/4 md:py-10 md:px-20 md:border-2 md:border-blue-500 md:rounded-md'>

            <div className='flex justify-around pb-5'>
                <InputIInfo title="Prep" data={inputInfo.prep} />
                <InputIInfo title="Work" data={inputInfo.work} />
                <InputIInfo title="Rest" data={inputInfo.rest} />
                <InputIInfo title="Cycles" data={inputInfo.cycles} />
                <InputIInfo title="Rounds" data={inputInfo.rounds} />
                <InputIInfo title="REST Rounds" data={inputInfo.restRound} />
            </div>

            <div className='bg-gray-200 rounded-lg  leading-none p-3  my-2'>
                <p>TIME</p>
                <p className='text-5xl'>{secToMin(totalTimeCounter)}</p>
            </div>

            <div className=' rounded-lg leading-none p-3 my-2' style={colorTask(message)}>
                <p>{message}</p>
                <p className='text-7xl'>{counter}</p>
            </div>

            <div className='bg-white rounded-lg leading-none p-3 my-2'>
                <p >STATUS</p>
                <p className='text-5xl' >R:{roundsCounter}/{inputInfo.rounds}  C:{cyclesCounter}/{inputInfo.cycles}</p>
            </div>

            {isPaused === 0 ?
                <BtnTabata fn={switchtBtn} text="START" textcolor="text-blue-700" borderColor="border-blue-500" />
                : isPaused === 1 ?
                    <BtnTabata fn={switchtBtn} text="PAUSE" textcolor="hover:text-red-700 " borderColor="border-red-800 " />
                    : isPaused === 2 ?
                        <BtnTabata fn={switchtBtn} text="RESUME" textcolor="hover:text-green-700" borderColor="border-green-800" />
                        :                        
                        <BtnTabata fn={switchtBtn} text="RESTART" textcolor="hover:text-purple-700" borderColor="border-purple-800" />
            }

        </div >
    )
}
