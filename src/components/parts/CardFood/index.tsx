import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getDataUser, modifyDataUser } from '../../../api/users';
import { UserWodMeal } from '../../../types';
import { MealsDay } from '../index'

import './style.scss';

const CardFood = () =>{

    const [title, setTitle]= useState(false);
    const [data, setData]= useState<UserWodMeal[]>();
    const [idmealToDelete, setIdmealToDelete]= useState<string | undefined>();
    const [typeMeal, setTypeMeal]= useState<string>('');

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
    }, [idmealToDelete])

    return (
            <div className='box-meal'>
                <h2 className={title ? 'title-food title-scroll': 'title-food'}>Weekly Meal</h2>
                <Link to='/add-meal' className="add-meal">Add weekly meal</Link>
                <div>
                    <div className="days">
                        {data && <div className="wrap">
                            <MealsDay data={data} day={"monday"} title={"Monday"}  setIdmealToDelete={setIdmealToDelete} setTypeMeal={setTypeMeal}/>
                            <MealsDay data={data} day={"tuesday"} title={"Tuesday"}  setIdmealToDelete={setIdmealToDelete} setTypeMeal={setTypeMeal}/>
                            <MealsDay data={data} day={"wednesday"} title={"Wednesday"} setIdmealToDelete={setIdmealToDelete} setTypeMeal={setTypeMeal}/>
                            <MealsDay data={data} day={"thursday"} title={"Thursday"} setIdmealToDelete={setIdmealToDelete} setTypeMeal={setTypeMeal}/>
                            <MealsDay data={data} day={"friday"} title={"Friday"} setIdmealToDelete={setIdmealToDelete} setTypeMeal={setTypeMeal}/>
                            <MealsDay data={data} day={"saturday"} title={"Saturday"} setIdmealToDelete={setIdmealToDelete} setTypeMeal={setTypeMeal}/>
                            <MealsDay data={data} day={"sunday"} title={"Sunday"} setIdmealToDelete={setIdmealToDelete} setTypeMeal={setTypeMeal}/>
                            </div>}
                        </div>
                </div>
            </div>
    )
}

export { CardFood }