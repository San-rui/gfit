import { User, UserWodMeal  } from "../types";
import { api } from '../utils';


const mapToArray = (object: any)=>{

    const array = [];

    for (const elem in object) {
    array.push({
        id: elem,
        ...object[elem],
    });
    }

    return array;
}

const getUsers = async (): Promise<User[]>  =>{
    const response =  await api.get('/users.json');
    return mapToArray(response.data)
};

export { getUsers }; 

const getDataUser = async (): Promise<UserWodMeal[]>  =>{
    const response =  await api.get('/users-data.json');
    return response.data
};
export { getDataUser }; 


const setDataUser = async (data: UserWodMeal) =>{
    
    await api.post('/users-data.json', data);
}
export { setDataUser }

const modifyDataUser = async (query:string, data: UserWodMeal) =>{

    await api.patch(`/users-data/${query}.json`, data);
}

export { modifyDataUser }