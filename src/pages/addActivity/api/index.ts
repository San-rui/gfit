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
    return response.data.data
}

export{ trainingApi }

const caloriesBurned = async (id:string, time:string, weight:string) =>{
    const response :Calories = await apiTraining.get(`/burnedcalorie?activityid=${id}&activitymin=${time}&weight=${weight}`);
    return response.data.data.burnedCalorie
}

export { caloriesBurned }