import './style.scss'

import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context';

import { Link } from 'react-router-dom';
import { FinishedMeal, UserWodMeal } from '../../../types';
import { CardStatus, WodDay} from '../index'
import { getDataUser, modifyDataUser } from '../../../api';
import { getDataFinished, setDataFinished } from '../../../api/users';


const CardSport = () =>{

    const [title, setTitle]= useState(false);
    const [activityFinished, setAactivityFinished] = useState<FinishedMeal | undefined>();
    const [idmealToDelete, setIdmealToDelete]= useState<string | undefined>();

    const { data, setData } = useContext(AuthContext);

    useEffect ( () => {
        if(activityFinished){
            
            getDataFinished("activity").then(response=>{ 
            const array = response.filter((item)=>(item.day===activityFinished.day && item.userId===activityFinished.userId))

            if(array.length===0){
                setDataFinished("activity", activityFinished)
            }
        })

        }
        
    }, [activityFinished])

    useEffect ( () => {

        const remove = async(item:string, aux :UserWodMeal) =>{
            await modifyDataUser(item, aux)
            getDataUser().then(response=>{
                setData(response)
            })
        }

        if(idmealToDelete!== undefined){
            const item= data?.find(item => item.id === idmealToDelete)
        
            const itemAux = {
                ...item,
                wod: {
                    calories: 0,
                    description: ''
                }
            }
            remove(idmealToDelete, itemAux)
        }

    }, [idmealToDelete])
    
    useEffect ( ()=>{
        const moveTitle=()=>{
            if(window.scrollY >= 1000){
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
        <div className="box-sport">
            <h2 className={title ? 'title-sport title-scroll': 'title-sport'}>Weekly Workout</h2>
            <Link to='/add-activity/monday' className="add-activity">Add activity</Link>
                <div>
                    <div className="days">
                        <div className="sport">
                            <h4>Monday</h4>
                            <WodDay data={data} day={"monday"} setIdmealToDelete={setIdmealToDelete} setAactivityFinished={setAactivityFinished}/>
                        </div>
                        <div className="sport">
                            <h4>Tuesday</h4>
                            <WodDay data={data} day={"tuesday"} setIdmealToDelete={setIdmealToDelete} setAactivityFinished={setAactivityFinished}/>
                        </div>
                        <div className="sport">
                            <h4>Wednesday</h4>
                            <WodDay data={data} day={"wednesday"} setIdmealToDelete={setIdmealToDelete} setAactivityFinished={setAactivityFinished}/>
                        </div>
                        <div className="sport">
                            <h4>Thursday</h4>       
                            <WodDay data={data} day={"thursday"} setIdmealToDelete={setIdmealToDelete} setAactivityFinished={setAactivityFinished}/>
                        </div>
                        <div className="sport">
                            <h4>Friday</h4>
                            <WodDay data={data} day={"friday"} setIdmealToDelete={setIdmealToDelete} setAactivityFinished={setAactivityFinished}/>
                        </div>
                        <div className="sport">
                            <h4>Saturday</h4>
                            <WodDay data={data} day={"saturday"} setIdmealToDelete={setIdmealToDelete} setAactivityFinished={setAactivityFinished}/>
                        </div>
                        <div className="sport">
                            <h4>Sunday</h4>
                            <WodDay data={data} day={"sunday"} setIdmealToDelete={setIdmealToDelete} setAactivityFinished={setAactivityFinished}/>
                        </div>
                    </div>
                </div>
                <CardStatus typeItem={"activity"}/>
        </div>
    )

}

export { CardSport }