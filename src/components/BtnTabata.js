import React from 'react'

export default function BtnTabata({fn, text , textcolor,borderColor}) {
    return (
        <button
            className={`bg-transparent py-2 px-4 border font-semibold   rounded my-5
            hover:bg-gray-700 
             ${borderColor} ${textcolor}`}

            onClick={fn}
        >{text}
        </button>
    )
}

//  hover:bg-gray-700  