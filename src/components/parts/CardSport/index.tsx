import './style.scss'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


const CardSport = () =>{

    const [title, setTitle]= useState(false);

    useEffect ( ()=>{
        const moveTitle=()=>{
            if(window.scrollY >= 450){
                setTitle(true);
            } else{
                setTitle(false);
            }
        }
    
        window.addEventListener('scroll', moveTitle);

        return()=>{
            window.removeEventListener('scroll', moveTitle);
        }
    }, [title])
    

    return (
        <div className="box-sport">
            <h2 className={title ? 'title-sport title-scroll': 'title-sport'}>Weekly Workout</h2>
            <Link to='/add-activity' className="add-activity">Add activity</Link>
                <div>
                    <div className="days">
                        <div className="sport">
                            <h4>Monday</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="sport">
                            <h4>Tuesday</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="sport">
                            <h4>Wednesday</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="sport">
                            <h4>Thursday</h4>       
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="sport">
                            <h4>Friday</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="sport">
                            <h4>Saturday</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="sport">
                            <h4>Sunday</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )

}

export { CardSport }