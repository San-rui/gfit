import { apiFood } from '../../../utils'
import { Branded } from '../../../types'
import { Common } from '../../../types'

type Response ={
    data: {
        branded: Branded[],
        Common: Common[],
    }
}

const food = async (query:string): Promise<Branded[]>=>{

    const response: Response= await apiFood.get(`/search/instant?query=${query}`);
    console.log(response)
    return response.data.branded;

}

export { food }