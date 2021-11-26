import { FC, useContext, Dispatch, SetStateAction, useState} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import { FinishedMeal, UserWodMeal } from '../../../types';
import { BiTrash, BiCheckCircle } from "react-icons/bi"

type Props={
    data:UserWodMeal[] | undefined, 
    day: string,
    setIdmealToDelete: Dispatch<SetStateAction<string | undefined>>,
    setAactivityFinished: Dispatch<SetStateAction<FinishedMeal | undefined>>,
}

const WodDay : FC <Props> = (Props) =>{

    const { currentUser } = useContext(AuthContext);
    const [refresh, setRefresh] = useState(false)


    const showData = (data:UserWodMeal[] | undefined, day: string)=>{
        const itemWod = data?.find(item=> item.day===day && item.idUser === currentUser?.id)

        for(const i in itemWod?.wod){
            if(i==="description" && itemWod?.wod['description']!==''){
                return (<div className="line">
                            <div>
                                <p className="meal-to-eat">{itemWod?.wod["description"]}</p>
                                <p className="meal-to-eat"><span>Calories burned: </span>{itemWod?.wod["calories"]}</p>
                            </div>
                            <div>
                                <button className="button-delete-wod" onClick={() =>{
                                    const r = window.confirm("Press a button!");
                                    if (r === true) {
                                        Props.setIdmealToDelete(itemWod?.id);
                                        setRefresh(!refresh)
                                    }}
                                }>
                                    <BiTrash size={18}/>
                                </button>
                                <button className="button-delete-wod" onClick={() =>{
                                    setRefresh(!refresh)  
                                    Props.setAactivityFinished({day:day,  type: "wod", mealOrwod: itemWod?.wod?.description , userId: currentUser?.id})  
                                    }
                                    
                                }>
                                    <BiCheckCircle size={18}/>
                                </button>
                            </div>
                            
                        </div>
                )
            }
        }    
        return (<Link to={`/add-activity/${day}`} className="wod-missing">Add your wod</Link>)
    }

    return (
            <div>
                {showData(Props.data,Props.day)}
            </div>
    )
}

export { WodDay }