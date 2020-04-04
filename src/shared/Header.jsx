import React from 'react'
import Logo from '../img/konetink.png'
import '../styles/header.css'

const Header = () =>{
    return(
    <div className='header'>
        <img className='header-image' src={Logo} alt=''/>
    </div>
    )
}

export default Header