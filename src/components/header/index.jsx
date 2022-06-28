import React from 'react'
import './style.css'

export default function header({black}) {

  return (
    <header className={black ? 'black' : ''}>
        <div className='Logo'>
            <a href='/'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Netflix'/>
            </a>
        </div>
        <div className='User'>
            <a href='/'>
                <img src='https://i.pinimg.com/564x/ba/2e/44/ba2e4464e0d7b1882cc300feceac683c.jpg' alt='Usuario'/>
            </a>
        </div>
    </header>
  )
}
