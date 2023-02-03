import React from 'react'

export default function InputIInfo({ title, data }) {
    return (
        <div className='w-full h-16 my-2 mx-1 rounded-md flex flex-col items-center justify-center bg-gray-800 text-white '>
            <p>{title}</p>
            <p>{data}</p>
        </div>
    )
}
