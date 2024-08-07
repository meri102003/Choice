import React, { useContext } from 'react'
import { IoCheckmarkDone } from "react-icons/io5";
import { Context } from './Context';

export default function AddingAnimation() {
    const $ = useContext(Context)
    return (
        <div className='adding_animation_container' style={{display : $.productAdding ? 'block' : 'none'}}>
            <p>Your Product Added Successfully<IoCheckmarkDone /></p>
            <div className="adding_text_bottomline"></div>
        </div>
    )
}
