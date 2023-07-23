import React from 'react'
import bottomArt from '../assets/bottom-art.png'

const BottomArt = () => {
    return (
        <div className='hidden md:block fixed bottom-0 right-0 w-28'>
            <img src={bottomArt}></img>
        </div>
    )
}

export default BottomArt