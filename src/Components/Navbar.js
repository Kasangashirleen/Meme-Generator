import React from 'react';
import './Navbar.css'
import {BsEmojiSunglasses} from 'react-icons/bs'

function Navbar(){
    return(
        <nav>
            <BsEmojiSunglasses  size={35}/>
            <h3 className='nav-title'>Meme Generator</h3>
            <h4 className='nav-text'>Project 3</h4>
        </nav>
    )
}
export default Navbar