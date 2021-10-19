import { FC, FormEvent } from 'react';
import {Layout } from '../../components/layout'

import { food, setDataUser} from '../../pages/AddMeal/api';
import { useState, useEffect } from 'react';
import './style.scss';
import { Branded, Common, User, UserWodMeal } from '../../types';



const AddMeal: FC= () => {
    const [meal, setMeal]= useState<Common[]>();
    const [search, setSearch]=useState('');
    const [day, setDay]=useState('monday');
    const [chosenMeal, setChosenMeal]=useState('');
    const [typeMeal, setTypeMeal]=useState('breackfast');
    const [src, setSrc]=useState('');

    const idUser: User = JSON.parse(localStorage.getItem('user') || "")
    console.log(idUser.id)

    const obj: UserWodMeal= {
        
        meal:{
            breakfast:chosenMeal,
            lunch:typeMeal,
            afternoonSnack:"Merienda",
            diner: "La cena"
        },
        day:day,
        id: idUser.id,
    }


        
    const handleSubmit = (e: FormEvent) =>  {
        e.preventDefault();
        setDataUser(obj);
    };


    useEffect (  () => {
        food(search).then(response=>{
            setMeal(response)
        })
    }, [search])

    const addImg=()=>{
        if((src=='https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png')){
            return <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrgu4a7W_OM8LmAuN7Prk8dzWXm7PVB_FmA&usqp=CAU'></img>

        }else{
            return <img src={src}></img>
        }
    }

    const addSelect=()=>{
        if(search!==''){
            return(
                <>
                    <div className="form-line">
                        <label>Select your meal</label>
                        <select name="food-added" id="food-added" onChange={e =>{ 
                            setChosenMeal(e.target.value)
                            setSrc(e.target.value)
                            //item.photo.thumb
                        } } required>
                        {
                            meal?.map(item =>{
                                return <option value={item.food_name}>{item.food_name}</option>
                            })
                        }
                        </select>
                    </div>
                    {addImg()}
                    <button type="submit">Add</button>
                </>)
        }
    }
    return (
        <Layout>
            <div className='add-meal'>
                <h2 className='title'>Weekly Meal</h2>
                    <div className='meal'>
                        <form action="" onSubmit={handleSubmit}>
                        <div className="form-line">
                            <label>Choose day</label>
                            <select name="day-selected" id="day-selected" onChange={e =>{ 
                            setDay( e.target.value)
                        } } required>
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thrusday">Thursday</option>
                                <option value="friday">Friday</option>
                                <option value="saturday">Saturday</option>
                                <option value="sunday">Sunday</option>
                            </select>
                        </div>
                        <div className="form-line">
                            <label>Type of meal</label>
                            <select name="day-selected" id="day-selected" onChange={e =>{ 
                            setTypeMeal( e.target.value)
                        } } required>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="fternoonSnack">Afternoon snack</option>
                                <option value="diner">Diner</option>
                            </select>
                        </div>
                        <div className="form-line">
                            <label>Write what you want to eat</label>
                            <input id="food" 
                            type="text" name="food" 
                            placeholder="Enter your meal" 
                            onChange={e =>{ 
                                setSearch(e.target.value)
                            }}
                            />
                        </div>
                            {addSelect()}
                        </form>
                    </div>
            </div>
        </Layout>
    )
}

export { AddMeal }