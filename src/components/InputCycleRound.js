import React from 'react'

export default function InputCycleRound({ register, title, name1}) {
    return (
        <div className='flex justify-between items-center '>
            <p className=' '>{title}  </p>
            <div className='flex h-12 my-2'>
                <input 
                className='w-12 text-center rounded-lg  bg-gray-800' 
                type="number" 
                placeholder="00"
                min="0" max="99"
                {...register(name1, { required: true, max: 99, min: 1 })} />
            </div>
        </div>
    )
}
