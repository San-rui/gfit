import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import { UserWodMeal } from '../../../types';

type Props={
    data:UserWodMeal[] | undefined, 
    day: string,
}

const WodDay : FC <Props> = (Props) =>{

    const { currentUser } = useContext(AuthContext);

    const showData = (data:UserWodMeal[] | undefined, day: string)=>{
        const itemWod = data?.find(item=> item.day===day && item.idUser === currentUser?.id)

        for(const i in itemWod?.wod){
            if(i==="description"){
                return (<>
                            <p className="meal-to-eat">{itemWod?.wod["description"]}</p>
                            <p className="meal-to-eat"><span>Calories burned: </span>{itemWod?.wod["calories"]}</p>
                        </>
                )
            }
        }
        
        return (<Link to='/add-activity' className="meal-missing">Add your wod</Link>)
    
        
    }

    return (
            <div className="food">
                {showData(Props.data,Props.day)}
            </div>
    )
}

export { WodDay }