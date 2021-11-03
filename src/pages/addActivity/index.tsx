import './style.scss'
import {trainingApi, caloriesBurned} from './api'
import { getDataUser, setDataUser } from '../../api'
import { Activity, User, UserWodMeal} from '../../types'
import { Link } from 'react-router-dom';

import { FC, useState, useEffect, FormEvent} from "react";
import { Layout } from '../../components/layout';
import { WithAuth} from '../../components/hoc';
import {useAuth} from '../../hooks'

const defaultValues = {
    day:"",
    level: "",
    id: "",
    time:"",

};

const AddActivity :FC= () => {

    const [inputs, setInputs] = useState(defaultValues);
    const [training, setTraining]= useState<Activity[] | undefined>();
    const [calories, setCalories]=useState(0)
    const [description, setDescription]= useState<string | undefined>('')
    const { userSession } = useAuth();
    const [data, setData]= useState<UserWodMeal>();

    const idUser: User = JSON.parse(localStorage.getItem('user') || "")

    console.log(idUser.id)

    useEffect ( () => {
        if(inputs.level!=='' ){
            trainingApi(inputs.level).then(response=>{
                setTraining(response);
            })
        }
        
    }, [inputs.level])

    useEffect ( () => {
        if(inputs.time!==''){
            caloriesBurned(inputs.id, inputs.time, userSession.weight,).then(response=>{
                const cal= Math.round(Number(response));
                setCalories(cal)
                getDataUser().then(response=>{
                    for(const prop in response){
                        if(response[prop].id===idUser.id && response[prop].day===inputs.day){
                            setData(response[prop])
                        }
                    }
                })
            })
        }
    }, [inputs.time])

    const handleSubmit = (e: FormEvent) =>  {
        e.preventDefault();
        const rest : UserWodMeal= {...data, wod: description, id: idUser.id}
        setDataUser(rest)
        
    };


    const renderOptions =()=>{
        
        const array: any[]=[];
        if(inputs.level!==''){
            training?.map(item=>{
                array.push(<option value={item.id}>{item.description}</option>)
            })
            return(
                <div>
                    <div className="form-line">
                        <label>Choose your activity</label>
                        <select name="trainingOptions" id="trainingOptions" value={inputs.id}
                        onChange={e =>{ 
                            setInputs(prevState=>({ ...prevState, id: e.target.value }))
                            const mealSelectedItem: Activity | undefined=training?.find(item=> item.id===e.target.value)
                            setDescription(mealSelectedItem?.description )
                        }}
                        >
                            { array }
                        </select>
                    </div>
                    <div className="form-line">
                        <label>Add minutes </label>
                        <input id="time" 
                            type="text" name="time" 
                            placeholder="Time of activity" 
                            value={inputs.time}
                            onChange={e =>{ 
                                setInputs(prevState=>({ ...prevState, time: e.target.value}))
                            }}
                        />
                    </div>
                    <div className='center'>
                        <p>You will burn: <span>{calories} calories</span></p>
                        <button type="submit">Add</button>
                    </div>
                </div>
                
            )
        }
    }

    return (
        <Layout>
            <div className='add-activity'>
                <h2 className='title'>Weekly Activity</h2>
                    <div className='sport'>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="form-line">
                                <label>Choose day</label>
                                <select name="day-selected" id="day-selected" value={inputs.day} onChange={e =>{ 
                                setInputs(prevState=>({ ...prevState, day: e.target.value }))
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
                                <label>Enter your activity level</label>
                                <input id="level" 
                                type="number" name="level" 
                                placeholder="Activity level" 
                                value={inputs.level}
                                onChange={e =>{ 
                                    setInputs(prevState=>({ ...prevState, level: e.target.value }))
                                }}
                                />
                            </div>
                            <div>
                                { renderOptions() }
                            </div>
                        </form>
                    </div>
            </div>
        </Layout>
    )
}

export default WithAuth(AddActivity)