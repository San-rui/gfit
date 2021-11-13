
import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import { UserWodMeal } from '../../../types';

type Props={
    data:UserWodMeal[] | undefined, 
    day: string,
    title: string
}

const MealsDay : FC <Props> = (Props) =>{

    const { currentUser } = useContext(AuthContext);

    const showData = (data:UserWodMeal[] | undefined, mealdata:string, day: string)=>{
        const itemDay = data?.find(item=> item.day===day && item.idUser === currentUser?.id)
        const myMeals= itemDay?.meal

        for(const i in myMeals){
            if(i===mealdata){
                return (<p className="meal-to-eat">{myMeals[mealdata]}</p>)
            }
        }
        return (<Link to='/add-meal' className="meal-missing">Add your {mealdata}</Link>)
    }

    return (
                        <div className="food">
                            <h4>{Props.title}</h4>
                            <div>
                                <h5>Breakfast</h5>
                                {showData(Props.data, "breakfast" ,Props.day)}
                            </div>
                            <div>
                                <h5>Lunch</h5>
                                {showData(Props.data, "lunch" , Props.day)}
                            </div>
                            <div>
                                <h5>Afternoon snack</h5>
                                {showData(Props.data, "afternoonSnack" ,Props.day)}
                            </div>
                            <div>
                                <h5>Diner</h5>
                                {showData(Props.data, "diner" , Props.day)}
                            </div>
                        </div>
    )
}

export { MealsDay }