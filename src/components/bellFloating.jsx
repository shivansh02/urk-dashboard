import React from 'react'
import { MdOutlineNotificationsNone } from "react-icons/md";


const BellFloating = () => {
    return (
        <div className='fixed md:hidden top-10 right-10 rounded-full w-10 h-10 bg-white flex items-center justify-center'>
            <MdOutlineNotificationsNone className='text-gray-400 text-2xl'/>
        </div>
    )
}

export default BellFloating;