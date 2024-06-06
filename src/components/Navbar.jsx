import React from 'react'

function Navbar() {
  return (
    <>
    <nav>
        <ul className='w-full flex justify-center p-2 bg-zinc-900 gap-3 '>
            <li className='text-zinc-200 bg-zinc-800 rounded'><a className='p-3 flex text-center w-full h-full' href="#">Home</a></li>
            <li className='text-zinc-200 bg-zinc-800 rounded'><a className='p-3 flex text-center w-full h-full' href="#">Scan QR</a></li>
            <li className='text-zinc-200 bg-zinc-800 rounded'><a className='p-3 flex text-center w-full h-full' href="#">Add Client</a></li>
            <li className='text-zinc-200 bg-zinc-800 rounded'><a className='p-3 flex text-center w-full h-full' href="#">Clients</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar

