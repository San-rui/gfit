import { FC, useState } from "react";
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo.png';


import './style.scss'

const Nav: FC = () => {

    const [nav, setNav]= useState(false);

    const changeBackground=()=>{
        console.log(window.scrollY)
        if(window.scrollY >= 1){
            setNav(true);
        } else{
            setNav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    
    return (
            <nav className={nav ? 'nav-primary active' : 'nav-primary'}>
                <img className="img-logo" src={logo} alt=""/>
                <ul>
                    <li>
                        <Link to="/profile">
                        <i className={nav ? "fas fa-user-circle icon icon-active":"fas fa-user-circle icon"}></i>
                            <p>My Profile</p>
                        </Link>
                        
                    </li>
                    <li>
                        <Link to="/">
                        <i className={nav ? "fas fa-columns  icon icon-active":"fas fa-columns icon"}></i>
                            <p>Dashboard</p>
                        </Link>
                        
                    </li>
                    <li>
                        <Link to="./login">
                        <i className={nav ? "fas fa-sign-out-alt  icon icon-active":"fas fa-sign-out-alt icon"}></i>
                            <p>Logout</p>
                        </Link>
                        
                    </li>
                </ul>
            </nav>
    )
    
}

export { Nav }