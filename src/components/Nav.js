import React from 'react'

export default function Nav() {

    return (
        <nav className=' w-screen h-16   flex items-center  justify-between 
                         text-3xl  text-white border-b-2 border-blue-500 '>
            <h1 className='ml-3 md:ml-10' onClick={() => window.location.reload(false)}>TABATA</h1>
            <img className='mr-3 md:mr-4 ' src=' \favicon.ico ' width="50" alt='logo' />
        </nav>
    )
}
