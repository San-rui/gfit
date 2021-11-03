import { title } from 'process';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';


const CardFood = () =>{

    const [title, setTitle]= useState(false);

    useEffect ( ()=>{
        const moveTitle=()=>{
            if(window.scrollY >= 150){
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
        <div className='box-meal'>
            <h2 className={title ? 'title-food title-scroll': 'title-food'}>Weekly Meal</h2>
            <Link to='/add-meal' className="add-meal">Add weekly meal</Link>
                <div>
                    <div className="days">
                        <div className="food">
                            <h4>Monday</h4>
                            <div>
                                <h5>Breakfast</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Lunch</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Afternoon snack</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Diner</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="food">
                            <h4>Tuesday</h4>
                            <div>
                                <h5>Breakfast</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Lunch</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Afternoon snack</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Diner</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="food">
                            <h4>Wednesday</h4>
                            <div>
                                <h5>Breakfast</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Lunch</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Afternoon snack</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Diner</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="food">
                            <h4>Thursday</h4>
                            <div>
                                <h5>Breakfast</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Lunch</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Afternoon snack</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Diner</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="food">
                            <h4>Friday</h4>
                            <div>
                                <h5>Breakfast</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Lunch</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Afternoon snack</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Diner</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="food">
                            <h4>Saturday</h4>
                            <div>
                                <h5>Breakfast</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Lunch</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Afternoon snack</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Diner</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="food">
                            <h4>Sunday</h4>
                            <div>
                                <h5>Breakfast</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Lunch</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Afternoon snack</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <h5>Diner</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )

}

export { CardFood }