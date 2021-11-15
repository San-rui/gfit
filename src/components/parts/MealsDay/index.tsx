
import {  Dispatch, FC, useContext, useState, SetStateAction, useEffect } from 'react';
import { Link } from 'react-router-dom';


import { AuthContext } from '../../../context';
import { UserWodMeal } from '../../../types';
import { BiTrash } from "react-icons/bi"

type Props={
    data:UserWodMeal[] | undefined, 
    day: string,
    title: string,
    setIdmealToDelete: Dispatch<SetStateAction<string | undefined>>,
    setTypeMeal: Dispatch<SetStateAction<string>>,
}

const MealsDay : FC <Props> = ({data, day, title, setIdmealToDelete, setTypeMeal}) =>{

    const { currentUser } = useContext(AuthContext);

    const showData = (data:UserWodMeal[] | undefined, mealdata:string, day: string)=>{
        
        const itemDay = data?.find(item=> item.day===day && item.idUser === currentUser?.id)
        const myMeals= itemDay?.meal

        for(const i in myMeals){
            if(i===mealdata && myMeals[mealdata]!== ''){
                return (<div className="line-food">
                            <p className="meal-to-eat">{myMeals[mealdata]}</p>
                            <button className="button-delete-food" onClick={() =>{
                                
                                const r = window.confirm("Press a button!");
                                if (r == true) {
                                    setIdmealToDelete(itemDay?.id)
                                    setTypeMeal(mealdata)
                                }}
                            }>
                                <BiTrash size={18}/>
                            </button>
                        </div>
                )
            }
        }
        return (<Link to='/add-meal' className="meal-missing">Add your {mealdata}</Link>)
    }


    return (
                        <div className="food">
                            <h4>{title}</h4>
                            <div className="line">
                                <h5>Breakfast</h5>
                                {showData(data, "breakfast" , day)}
                            </div>
                            <div className="line">
                                <h5>Lunch</h5>
                                {showData(data, "lunch" , day)}
                            </div>
                            <div className="line">
                                <h5>Afternoon snack</h5>
                                {showData(data, "afternoonSnack" , day)}
                            </div>
                            <div>
                                <h5>Dinner</h5>
                                {showData(data, "dinner" , day)}
                            </div>
                        </div>
    )
}

export { MealsDay }