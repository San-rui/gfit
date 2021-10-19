import { api } from '../../../utils'

type Payload ={
    id: string,
    wod?: string[],
    meal?: string[],
};

const setUserLoggedId = async (data: Payload) =>{

    await api.post('/data-user.json', data);
}



export { setUserLoggedId }