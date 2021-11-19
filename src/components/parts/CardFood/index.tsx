import React, { useState, useEffect, useContext } from 'react';
import { Link} from 'react-router-dom';

import { getDataFinished, getDataUser, modifyDataUser, setDataFinished } from '../../../api/users';
import { AuthContext } from '../../../context';
import { FinishedMeal, UserWodMeal } from '../../../types';
import { CardStatus, MealsDay } from '../index'

import './style.scss';


const CardFood = () =>{

    const [title, setTitle]= useState(false);
    const [data, setData]= useState<UserWodMeal[]>();
    const [idmealToDelete, setIdmealToDelete]= useState<string | undefined>();
    const [typeMeal, setTypeMeal]= useState<string>('');
    const [mealFinished, setMealFinished] = useState<FinishedMeal | undefined>();
    const [refresh, setRefresh] = useState(false);

    useEffect ( () => {
        if(mealFinished){
            console.log("mealFinished:",mealFinished)
            getDataFinished().then(response=>{ console.log(response)
            const array = response.filter((item)=>(item.day===mealFinished.day && item.type===mealFinished.type && item.userId===mealFinished.userId))
            console.log("el array :",array.length, array)
            if(array.length==0){
                setDataFinished(mealFinished)
            }
        })

        }
        
    }, [mealFinished])
    

    useEffect ( () => {

        if(idmealToDelete!== undefined){
            const item= data?.find(item => item.id === idmealToDelete)
        
            const itemAux = {
                ...item,
                meal: {
                    ...item?.meal,
                    [typeMeal]: ''
                }
            }
            modifyDataUser(idmealToDelete, itemAux)
        }

    }, [idmealToDelete])


    
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
    }, [idmealToDelete, refresh])

    return (
            <div className='box-meal'>
                <h2 className={title ? 'title-food title-scroll': 'title-food'}>Weekly Meal</h2>
                <Link to='/add-meal/monday/breakfast' className="add-meal">Add weekly meal</Link>
                <div>
                    <div className="days">
                        {data && <div className="wrap">
                            <MealsDay data={data} day={"monday"} title={"Monday"}  setIdmealToDelete={setIdmealToDelete} setTypeMeal={setTypeMeal} setMealFinished={setMealFinished} setRefresh={setRefresh} refresh={refresh}/>
                            <MealsDay data={data} day={"tuesday"} title={"Tuesday"}  setIdmealToDelete={setIdmealToDelete} setTypeMeal={setTypeMeal} setMealFinished={setMealFinished} setRefresh={setRefresh} refresh={refresh}/>
                            <MealsDay data={data} day={"wednesday"} title={"Wednesday"} setIdmealToDelete={setIdmealToDelete} setTypeMeal={setTypeMeal} setMealFinished={setMealFinished} setRefresh={setRefresh} refresh={refresh}/>
                            <MealsDay data={data} day={"thursday"} title={"Thursday"} setIdmealToDelete={setIdmealToDelete} setTypeMeal={setTypeMeal} setMealFinished={setMealFinished} setRefresh={setRefresh} refresh={refresh}/>
                            <MealsDay data={data} day={"friday"} title={"Friday"} setIdmealToDelete={setIdmealToDelete} setTypeMeal={setTypeMeal} setMealFinished={setMealFinished} setRefresh={setRefresh} refresh={refresh}/>
                            <MealsDay data={data} day={"saturday"} title={"Saturday"} setIdmealToDelete={setIdmealToDelete} setTypeMeal={setTypeMeal} setMealFinished={setMealFinished} setRefresh={setRefresh} refresh={refresh}/>
                            <MealsDay data={data} day={"sunday"} title={"Sunday"} setIdmealToDelete={setIdmealToDelete} setTypeMeal={setTypeMeal} setMealFinished={setMealFinished} setRefresh={setRefresh} refresh={refresh}/>
                            </div>}
                        </div>
                </div>
                <CardStatus/>
            </div>
    )
}

export { CardFood }