import { apiFood } from '../../../utils';
import { Branded } from '../../../types';
import { Common } from '../../../types';
import { UserWodMeal } from '../../../types';
import { api } from '../../../utils';


type Response ={
    data: {
        branded: Branded[],
        common: Common[],
    }
}

const food = async (query:string): Promise<Common[]>=>{

    const response: Response= await apiFood.get(`/search/instant?query=${query}`);
    console.log(response.data.common)
    return response.data.common;
}
export { food }


const setDataUser = async (data: UserWodMeal) =>{

    await api.post('/users-data.json', data);
}
export { setDataUser }