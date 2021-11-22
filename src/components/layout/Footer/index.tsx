import { FC } from "react";
import  heart  from '../../../assets/images/heart.png'

import './style.scss'

const Footer:FC = ()=>{
    return (
        <footer className='footer'>
            <div className="footer-container">
                <p className="footer-text">Made with</p>
                <img className="img-footer" src={heart} alt=""/>
                <p className="footer-text">by San</p>
            </div>
            
        </footer>
    )
}

export {Footer}