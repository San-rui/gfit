import { FC, FormEvent } from 'react';
import {Layout } from '../../components/layout'

import { food} from '../../pages/AddMeal/api';
import { setDataUser, modifyDataUser } from '../../api'
import { useState, useEffect } from 'react';
import './style.scss';
import { Branded, User, UserWodMeal } from '../../types';
import { WithAuth } from '../../components/hoc';
import { getDataUser } from '../../api';

const defaultValues = {
    day:"monday",
    search: "",
    typeMeal: "",
    chosenMeal:"",
};

const AddMeal: FC= () => {

    const [meal, setMeal]= useState<Branded[]>();
    const [src, setSrc]=useState<string | undefined>();
    const [inputs, setInputs]=useState(defaultValues);
    const idUser: User = JSON.parse(localStorage.getItem('user') || "")

    const [data, setData]= useState<UserWodMeal>();
    const [idPack, setIdPack] = useState('');
    
    const obj: UserWodMeal= {
        meal:{
            breakfast:"",
            lunch:"",
            afternoonSnack:"",
            diner: ""
        },
        day:"",
        id: "",
    };
    const [userPack, setUserPack]=useState<UserWodMeal>(obj);

    const setValues=(obj: UserWodMeal)=>{
        const objeto= obj.meal;
        for(let prop in objeto){
            if(prop===inputs.typeMeal){
                
                console.log("aca", prop)
                setUserPack(prevState =>({
                    ...prevState, 
                    day:inputs.day,
                    id: idUser.id,
                    meal: {
                        ...prevState.meal, 
                        [prop]:inputs.chosenMeal
                    }
                }
                ))
                
            }
        };
    };

    useEffect ( () => {
        console.log("data",data)
        if(inputs.day!==''){
            getDataUser().then(response=>{
                console.log("resp", response)
                for(const prop in response){
                    if(response[prop].id===idUser.id && response[prop].day===inputs.day){
                        setIdPack(prop)
                        console.log("el id ", prop)
                        setData(response[prop])
                        console.log("la respuesta",response[prop])
                    }
                }
            });
        }
        
    }, [inputs.day])

    

    useEffect ( () => {
        if(inputs.chosenMeal!==''){
            setValues(obj)
        }
    },[inputs.chosenMeal])


    const handleSubmit = (e: FormEvent) =>  {
        e.preventDefault();
        
        if(data===undefined){
            setDataUser(userPack);
        } else{
            
            modifyDataUser(idPack, userPack)
        }
        setData(obj)
    };

    useEffect ( () => {
        if(inputs.search!==''){
            food(inputs.search).then(response=>{
                setMeal(response)
            })
        }
    }, [inputs.search])

    const addImg=()=>{
        if((src==='https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png')){
            return <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrgu4a7W_OM8LmAuN7Prk8dzWXm7PVB_FmA&usqp=CAU'></img>

        }else{
            return <img src={src}></img>
        }
    };

    const addSelect=()=>{
        if(inputs.search!==''){
            return(
                <>
                    <div className="form-line">
                        <label>Select your meal</label>
                        <select name="food-added" id="food-added" onChange={e =>{ 
                            setInputs({ ...inputs, chosenMeal: e.target.value })
                            
                            const srcSelectedItem: Branded | undefined=meal?.find(item=> item.food_name===e.target.value)
                            setSrc(srcSelectedItem?.photo.thumb);
                            
                        } } required>
                        {
                            meal?.map(item =>{
                                return <option value={item.food_name} key={item.nix_item_id}>{item.food_name}</option>
                            })
                        }
                        </select>
                    </div>
                    {addImg()}
                    <button type="submit">Add</button>
                </>)
        }
    };


    //console.log("userPack", userPack)
    return (
        <Layout>
            <div className='add-meal'>
                <h2 className='title'>Weekly Meal</h2>
                    <div className='meal'>
                        <form action="" onSubmit={handleSubmit}>
                        <div className="form-line">
                            <label>Choose day</label>
                            <select name="day-selected" id="day-selected" onChange={e =>{ 
                            setInputs({ ...inputs, day: e.target.value })
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
                            setInputs({ ...inputs, typeMeal: e.target.value })
                        } } required>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="afternoonSnack">Afternoon snack</option>
                                <option value="diner">Diner</option>
                            </select>
                        </div>
                        <div className="form-line">
                            <label>Write what you want to eat</label>
                            <input id="food" 
                            type="text" name="food" 
                            placeholder="Enter your meal" 
                            onChange={e =>{ 
                                setInputs({ ...inputs, search: e.target.value })
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

export default WithAuth(AddMeal)