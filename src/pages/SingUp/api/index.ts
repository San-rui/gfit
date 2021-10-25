import { api } from '../../../utils'
import {User} from '../../../types'

type Payload =Omit<User, 'id'>

const signup = async (data: Payload) =>{

    await api.post('/users.json', data);
}

export { signup }