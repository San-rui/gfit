import { Activity } from '../../../types'
import { apiTraining } from '../../../utils'

type Response ={
    data: Activity[]
}

const trainingApi= async (): Promise<Activity[]>=>{
    const response: Response= await apiTraining.get('/mets');
    return response.data
}

export{ trainingApi }
