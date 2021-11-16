import { FC, FormEvent,  useState, useEffect, useContext  } from 'react';
import { useHistory } from 'react-router-dom';

import {Layout } from '../../components/layout'
import { Branded, UserWodMeal } from '../../types';
import { WithAuth } from '../../components/hoc';
import { getDataUser } from '../../api';
import { food} from '../../pages/AddMeal/api';
import { setDataUser, modifyDataUser } from '../../api'

import { AuthContext } from "../../context";

import './style.scss';



const defaultValues = {
    day:"monday",
    search: "",
    typeMeal: "breakfast",
    chosenMeal:"",
};

const AddMeal: FC= () => {

    const [meal, setMeal]= useState<Branded[]>();
    const [src, setSrc]=useState<string | undefined>();
    const [inputs, setInputs]=useState(defaultValues);
    const [data, setData]= useState<UserWodMeal>();
    const [idPack, setIdPack] = useState<string | undefined>('');

    const { currentUser } = useContext(AuthContext);
    const { push } = useHistory();


    //Si ya hay un dato que coincide con el usuario y el dia me guardo el id de ese elemento
    useEffect ( () => {
        if(inputs.day!==''){
            getDataUser().then(response=>{
                for(const item of response){
                    if(item.idUser===currentUser?.id && item.day===inputs.day){
                        setIdPack(item.id)

                        const itemAux = {
                            ...item,
                            meal: {
                                ...item.meal,
                                [inputs.typeMeal]: inputs.chosenMeal
                            }
                        }
                        setData(itemAux)
                        break

                    } else{

                        !idPack && setData({meal:{
                            [inputs.typeMeal]: inputs.chosenMeal
                        },
                        day:inputs.day,
                        idUser: currentUser?.id})
                    }
                }
            })
        } 
    },[inputs.chosenMeal])

    const handleSubmit = (e: FormEvent) =>  {
        e.preventDefault();

        if(idPack){
            modifyDataUser(idPack, data)
            setIdPack('')
        
        }else {
            setDataUser(data)
        }

        alert("Your meal was added")
        push("/");
    };

    //---busca la comida seleccionada----//

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
                        <select name="food-added" id="food-added" value={inputs.chosenMeal} onChange={e =>{ 
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
                    <button type="submit" className="button-style">Add</button>
                </>)
        }
    };


    return (
        <Layout>
            <div className='add-meal-card'>
                <h2 className='title'>Weekly Meal</h2>
                    <div className='meal'>
                        <form action="" onSubmit={handleSubmit}>
                        <div className="form-line">
                            <label>Choose day</label>
                            <select name="day-selected" id="day-selected" value={inputs.day} onChange={e =>{ 
                            setInputs({ ...inputs, day: e.target.value }) 
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
                            <label>Type of meal</label>
                            <select name="day-selected" id="day-selected" value={inputs.typeMeal} onChange={e =>{ 
                            setInputs({ ...inputs, typeMeal: e.target.value })
                        } } required>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="afternoonSnack">Afternoon snack</option>
                                <option value="dinner">Dinner</option>
                            </select>
                        </div>
                        <div className="form-line">
                            <label>Write what you want to eat</label>
                            <input id="food" 
                            type="text" name="food" 
                            placeholder="Enter your meal" 
                            value={inputs.search}
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