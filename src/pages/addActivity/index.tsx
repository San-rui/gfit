import { FC, useState, useEffect, FormEvent, useContext} from "react";
import { useHistory, useParams } from 'react-router-dom';

import {trainingApi, caloriesBurned} from './api'
import { getDataUser, modifyDataUser, setDataUser } from '../../api'
import { Activity, UserWodMeal} from '../../types'
import { Layout } from '../../components/layout';
import { WithAuth} from '../../components/hoc';

import { AuthContext } from "../../context";

import './style.scss'

type ParamsType = {
    day: string,
};

const AddActivity :FC= () => {

    const { day} = useParams<ParamsType>();

    const [inputs, setInputs] = useState ({
        day:day,
        level: "",
        id: "",
        time:"",
    });
    const [training, setTraining]= useState<Activity[] | undefined>();
    const [calories, setCalories]=useState(0)
    const [description, setDescription]= useState<string | undefined>('')
    const { currentUser } = useContext(AuthContext);

    const [data, setData]= useState<UserWodMeal>();
    const [idPack, setIdPack] = useState<string | undefined>('');

    const { push } = useHistory();

    useEffect ( () => {
        if(inputs.level!=='' ){
            trainingApi(inputs.level).then(response=>{
                setTraining(response);
            })
        }
        
    }, [inputs.level])

    useEffect ( () => {
        if(inputs.time!==''){
            caloriesBurned(inputs.id, inputs.time, currentUser?.weight).then(response=>{
                const cal= Math.round(Number(response));
                setCalories(cal)
                
                getDataUser().then(response=>{
                    for(const item of response){
                        if(item.idUser===currentUser?.id && item.day===inputs.day){
                            setIdPack(item.id)

                            const itemAux = {
                                ...item,
                                wod: {
                                    calories: cal,
                                    description: description
                                }
                            }
                            setData(itemAux)
                            break
                        } else{
                            
                            !idPack && setData({wod:{
                                calories: cal,
                                description: description
                            },
                            day:inputs.day,
                            idUser: currentUser?.id})
                        }
                    }
                })
            })
        }
    }, [inputs.time])

    const handleSubmit = (e: FormEvent) =>  {
        e.preventDefault();

        if(idPack){
            modifyDataUser(idPack, data)
            setIdPack('')
        
        }else {
            setDataUser(data)
        }

        alert("Your wod was added")
        push("/");
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
                        <button type="submit" className="button-style">Add</button>
                    </div>
                </div>
                
            )
        }
    }

    return (
        <Layout>
            <div className='add-activity-card'>
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
                                    <option value="thursday">Thursday</option>
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