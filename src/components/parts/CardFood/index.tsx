import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDataUser } from '../../../api/users';
import { UserWodMeal } from '../../../types';
import { MealsDay } from '../index'

import './style.scss';

const CardFood = () =>{

    const [title, setTitle]= useState(false);
    const [data, setData]= useState<UserWodMeal[]>();
    
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

    useEffect ( () => {
            getDataUser().then(response=>{
            setData(response)
            })
    }, [window])

    return (
        <div className='box-meal'>
            <h2 className={title ? 'title-food title-scroll': 'title-food'}>Weekly Meal</h2>
            <Link to='/add-meal' className="add-meal">Add weekly meal</Link>
                <div>
                    <div className="days">
                        {data && <>
                        <MealsDay data={data} day={"monday"} title={"Monday"}/>
                        <MealsDay data={data} day={"tuesday"} title={"Tuesday"}/>
                        <MealsDay data={data} day={"wednesday"} title={"Wednesday"}/>
                        <MealsDay data={data} day={"thrusday"} title={"Thrusday"}/>
                        <MealsDay data={data} day={"friday"} title={"Friday"}/>
                        <MealsDay data={data} day={"saturday"} title={"Saturday"}/>
                        <MealsDay data={data} day={"sunday"} title={"Sunday"}/>
                        </>}
                    </div>
                </div>
        </div>
    )

}

export { CardFood }