import React from 'react'

export default function InputMinSec({ register, title, name1, required1, name2, required2 }) {
    return (
        <div className='flex justify-between items-center'>
            {/* TITLE */}
            <p>  {title} </p>

            <div className='flex h-12 my-2'>

                {/* INPUT MINUTES  */}
                <input
                    className='w-12 text-center rounded-lg bg-gray-800  '
                    type="number"
                    placeholder="00"
                    min="0" max="99"
                    {...register(name1, { max: 99, min: 0 })}
                />

                <p className=' mx-2 flex items-center' >:</p>

                {/* INPUT SECONDS  */}
                <input
                    className='w-12 text-center rounded-lg bg-gray-800  '
                    type="number"
                    placeholder="00"
                    min="0" max="99"
                    {...register(name2, { max: 99, min: 0 })}
                />

            </div>
        </div>
    )
}
