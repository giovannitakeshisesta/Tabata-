import React from 'react'
import { useForm } from 'react-hook-form';
import BtnTabata from './BtnTabata';
import InputCycleRound from './InputCycleRound';
import InputMinSec from './InputMinSec';

export default function InputForm({ formSubmit}) {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        let prep = (Number(data.prepMin) * 60) + Number(data.prepSec)
        let work = (Number(data.workMin) * 60) + Number(data.workSec)
        let rest = (Number(data.restMin) * 60) + Number(data.restSec)
        let restRound = (Number(data.restRoundMin) * 60) + Number(data.restRoundSec)
        let cycles = Number(data.cycles)
        let rounds = Number(data.rounds)
        let totalTime = prep + ((((work + rest) * cycles)- rest +restRound) * rounds) - restRound
        let allFormInfo = { prep, work, rest, cycles,rounds,restRound,totalTime}
         formSubmit(allFormInfo)
    }

    return (
        <div className='text-white text-xl p-10 m-auto 
                        w-screen h-fit 
                        md:w-2/4
                        md:border-2 md:border-blue-500 md:rounded-md  '>

            <form className='h-auto  flex flex-col justify-between   ' onSubmit={handleSubmit(onSubmit)} >
                <InputMinSec title='PREPARE' name1="prepMin" name2="prepSec" register={register} />
                <br/>
                <InputMinSec title='WORK' name1="workMin" name2="workSec" register={register} />
                <InputMinSec title='REST' name1="restMin" name2="restSec" register={register} />
                <InputCycleRound title='CYCLES' name1="cycles" register={register} />
                <br/>
                <InputCycleRound title='ROUNDS' name1="rounds" register={register} />
                <InputMinSec title='REST ROUND' name1="restRoundMin" name2="restRoundSec" register={register} />

                <BtnTabata text="OK!" textcolor="text-blue-700" borderColor="border-blue-500" />
            </form>
        </div>
    )
}
