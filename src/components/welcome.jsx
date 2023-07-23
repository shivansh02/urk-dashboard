import React from 'react'
import Avatar from '../assets/avatar.jpg'
import Today from './today'
import Transactions from "./transactions";


const welcome = () => {
    return (
            <div className='welcome w-screen flex flex-col md:h-screen md:w-[22rem] px-6 pt-20 md:px-16 md:py-12 bg-white md:bg-[#FBFBFA]'>
                <div className='avatar-row flex flex-row space-x-4 mb-8'>
                <img src={Avatar} alt='avatar' className='avatar h-16 w-16 rounded-full'/>
                <div className='flex flex-col'>
                <h1 className='text-2xl font-roboto-slab'>Hi Mike,</h1>
                <h2 className='text-sm'>welcome back.</h2>
                </div>
                </div>
            <Today/>
            <Transactions/>
            </div>
            
    )
}

export default welcome;