import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='bg-indigo-200'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <h1 className='font-bold flex flex-wrap text-lg'>
                    <span className='text-indigo-500 pr-1'>Sahand</span>
                    <span className='text-indigo-700'>Estate</span>
                </h1>
                <form action="" className='bg-indigo-100 p-3 rounded-lg flex items-center'>
                    <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
                    <FaSearch className='text-indigo-500' />
                </form>
                <ul className='flex gap-4'>
                    <Link to='/home'>
                        <li className='hidden sm:inline hover:underline hover:pointer'>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden sm:inline hover:underline hover:pointer'>About</li>
                    </Link>
                    <Link to='/sign-in'>
                        <li className='hover:underline hover:pointer'>Sign in</li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header
