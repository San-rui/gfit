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

const food = async (query:string): Promise<Branded[]>=>{

    const response: Response= await apiFood.get(`/search/instant?query=${query}`);

    return response.data.branded;
}
export { food }


const setDataUser = async (data: UserWodMeal) =>{

    await api.post('/users-data.json', data);
}
export { setDataUser }

const modifyDataUser = async (query:string, data: UserWodMeal) =>{

    await api.patch(`/users-data/${query}.json`, data);
}

export { modifyDataUser }