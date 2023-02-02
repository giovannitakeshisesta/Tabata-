import React from 'react'

export default function InputIInfo({ title, data }) {
    return (
        <div className='bg-gray-800 text-white  w-20 h-20 rounded-full flex flex-col items-center justify-center '>
            <p>{title}</p>
            <p>{data}</p>
        </div>
    )
}
