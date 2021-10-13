import { FC } from "react";
import { Link } from 'react-router-dom'

import woman from '../../../assets/images/woman.png'
import sport from '../../../assets/images/sport.png'
import diet from '../../../assets/images/diet.png'


import './style.scss'

const Header:FC = () => {

    return (
        <header className="header-primary">
            <ul>
                <li>
                    <Link to="/profile">
                        <img src={woman} alt=""/>
                        <p>My Profile</p>
                    </Link>
                    
                </li>
                <li>
                    <Link to="/">
                        <img src={diet} alt=""/>
                        <p>Dashboard</p>
                    </Link>
                    
                </li>
                <li>
                    <Link to="./training">
                        <img src={sport} alt=""/>
                        <p>Home</p>
                    </Link>
                    
                </li>
            </ul>
        </header>
    )
    
}

export { Header }