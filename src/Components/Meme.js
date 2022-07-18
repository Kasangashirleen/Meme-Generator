// import './Meme.css'
import React, { useState, useEffect } from 'react'
import './Meme.css'


function Meme(){

    const [meme, setMeme] = useState({
        topText : '',
        bottomText : '',
        randomImage: "http://i.imgflip.com/1bij.jpg"

    })
    const [memeData, setMemeData] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(memesArray => setMemeData(memesArray.data.memes))
    }, [])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * memeData.length)
        const url = memeData[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
     function handleChange(event){
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name] : value
        }))
     }

    return(
        <section >
            <div className='meme-input'>
                <input 
                    className='topText'
                    type= 'text'
                    placeholder = 'Top Text'
                    name = 'topText'
                    value = {meme.topText}
                    onChange = {handleChange}
                />
                <input 
                    className='bottomText'
                    type= 'text'
                    placeholder = 'Bottom Text'
                    name = 'bottomText'
                    value = {meme.bottomText}
                    onChange = {handleChange}
                />                
            </div>
            <button 
                className='meme-btn'
                onClick = {getMemeImage}
            >
                Get a New Meme Image
            </button>
            <div className='meme'>
                <img src = {meme.randomImage} alt='meme' className='meme-img'/>
                <h3 className='meme-text top'>{meme.topText}</h3>
                <h3 className='meme-text bottom'>{meme.bottomText}</h3>
            </div>
        </section>
    )
}
export default Meme