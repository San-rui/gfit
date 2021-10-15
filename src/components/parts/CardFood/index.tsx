import { food } from './api'
import { useState, useEffect } from 'react'
import {Branded} from '../../../types'
import './style.scss'



const CardFood = () =>{

    const [meal, setMeal]= useState<Branded[]>();
    const [search, setSearch]=useState('');
    const [title, setTitle]= useState(false);

    const moveTitle=()=>{
        if(window.scrollY >= 150){
            setTitle(true);
        } else{
            setTitle(false);
        }
    }

    window.addEventListener('scroll', moveTitle);



    useEffect (  () => {
        food(search).then(response=>{
            setMeal(response)
        })
    }, [search])
    
    return (
        <div>
            <h2 className={title ? 'title-food title-scroll': 'title-food'}>Weekly Meal</h2>
                <div>
                    <input id="food" 
                        type="text" name="food" 
                        placeholder="Enter your meal" 
                        onChange={e =>{ 
                            setSearch( e.target.value)
                        }}
                    />
                    <select name="food-added" id="food-added">
                        {
                            meal?.map(item =>{
                                return <option>{item.food_name}</option>
                            })
                        }
                    </select>
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