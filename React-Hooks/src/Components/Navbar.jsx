import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className={click ? "navbar navbar-bg" : "navbar"}>
            <div className='logo'>
                <img src={Logo} alt='logo' />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'><Link to="/home"><a>Home</a></Link></li>
                <li className='nav-item'><Link to="/data"><a>Data</a></Link></li>
                <li className='nav-item'><Link to="/hooks"><a>Hooks</a></Link></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: '#f8f8f8' }} />) : (<FaBars size={30} style={{ color: '#f8f8f8' }} />)}

            </div>
        </div >
    )
}

export default Navbar;