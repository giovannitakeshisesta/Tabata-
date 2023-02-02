import React from 'react'
import { useForm } from 'react-hook-form';
import BtnTabata from './BtnTabata';
import InputMinSec from './InputMinSec';

export default function InputForm({ setTotalTime,setTotalTimeCounter, setPrepInput, setWorkInput, setRestInput, setRoundsInput, setShowForm, setInputInfo }) {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        let prep = (Number(data.prepMin) * 60) + Number(data.prepSec)
        let work = (Number(data.workMin) * 60) + Number(data.workSec)
        let rest = (Number(data.restMin) * 60) + Number(data.restSec)
        let rounds = Number(data.rounds)
        let totalTime = prep + ((work + rest) * rounds) - rest
        setPrepInput(prep)
        setWorkInput(work)
        setRestInput(rest)
        setRoundsInput(rounds)
        setShowForm(true)
        setTotalTime(totalTime)
        setTotalTimeCounter(totalTime)
        setInputInfo({ prep, work, rest, rounds })

    }

    return (
        <div className='text-white text-xl p-10 m-auto 
                        w-screen h-fit 
                        md:w-2/4
                        md:border-2 md:border-blue-500 md:rounded-md  '>

            <form className='h-auto  flex flex-col justify-between   ' onSubmit={handleSubmit(onSubmit)} >
                <InputMinSec title='PREPARE' name1="prepMin" name2="prepSec" register={register} />
                <InputMinSec title='WORK' name1="workMin" name2="workSec" register={register} />
                <InputMinSec title='REST' name1="restMin" name2="restSec" register={register} />

                <div className='flex justify-between items-center '>
                    <p className=' '>CYCLES  </p>
                    <div className='flex h-12 my-2'>
                        <input className='w-12 text-center rounded-lg  bg-gray-800' type="number" placeholder="00" {...register("rounds", { required: true, max: 99, min: 1 })} />
                    </div>
                </div>

                <BtnTabata text="OK!" textcolor="text-blue-700" borderColor="border-blue-500" />
            </form>
        </div>
    )
}
