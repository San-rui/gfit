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


