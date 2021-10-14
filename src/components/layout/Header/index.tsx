import { FC, useState } from "react";
import { Nav } from '../index'


import logo from '../../../assets/images/logo.png';

import './style.scss'

const Header:FC = () => {
    
    return (
        <header >
            <Nav/>
            <div className="header-secondary">
                <div className="header-text">
                    <h1>
                        <span className='health-fitness'>Fitness</span>
                        <span className="and">&</span> 
                        <span className='health-text'>Health</span>
                    </h1>
                    <p className="text-header">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo laboriosam accusantium architecto consequatur earum fuga nisi sed ducimus necessitatibus iste. Vitae nostrum repellat, praesentium velit eaque voluptas fugit eius mollitia.</p>
                </div>
                
            </div>
            
        </header>
    )
    
}

export { Header }