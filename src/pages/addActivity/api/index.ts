import { Activity } from '../../../types'
import { apiTraining } from '../../../utils'

type Response ={
    data: {
        data: Activity[]
    }
}

type Calories = {
    data: {
        data:{
            burnedCalorie: string, 
            unit: string
        }
    }
}

const trainingApi= async (level:string): Promise<Activity[]>=>{
    const response: Response= await apiTraining.get(`/activities?intensitylevel=${level}`);
    const rta= response.data
    return response.data.data
}

export{ trainingApi }

const caloriesBurned = async (id:string, time:string, weight:string) =>{
    const response :Calories = await apiTraining.get(`/burnedcalorie?activityid=${id}&activitymin=${time}&weight=${weight}`);
    console.log(response.data.data.burnedCalorie)
    return response.data.data.burnedCalorie
}

export { caloriesBurned }