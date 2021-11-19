import { FinishedMeal, User, UserWodMeal  } from "../types";
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
    return mapToArray(response.data)
};
export { getDataUser }; 


const setDataUser = async (data: UserWodMeal | undefined) =>{
    
    await api.post('/users-data.json', data);
}
export { setDataUser }

const modifyDataUser = async (query:string | undefined, data: UserWodMeal | undefined) =>{

    await api.patch(`/users-data/${query}.json`, data);
}

export { modifyDataUser }

const setDataFinished = async (data: FinishedMeal | undefined) =>{
    
    await api.post('/user-meal-activity-finished.json', data);
}
export { setDataFinished }

const getDataFinished = async (): Promise<FinishedMeal[]>  =>{
    const response =  await api.get('/user-meal-activity-finished.json');
    return mapToArray(response.data)
};
export { getDataFinished }; 

const deleteFinishedMeal = async () =>{
    
    await api.delete('/user-meal-activity-finished.json');
}

export { deleteFinishedMeal }

