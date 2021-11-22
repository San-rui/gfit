import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';
import { User, UserWodMeal } from '../../types'

type ContextType={
    currentUser?: Partial<User> | undefined,
    setCurrentUser: Dispatch<SetStateAction<Partial<User | undefined>>>,
    data: UserWodMeal[] | undefined,
    setData: Dispatch<SetStateAction<UserWodMeal[] | undefined>>

}

const AuthContext = createContext <ContextType>({
    currentUser: {},
    setCurrentUser: () => undefined,
    data: [],
    setData: ()=> undefined
});

const AuthProvider: FC = ({ children }) => {

    const [currentUser, setCurrentUser]= useState<Partial<User> | undefined>({})
    const [data, setData]= useState<UserWodMeal[] | undefined>();

    return (
        <>
        {/* lo que esta dentro de value puede ser lo que yo quiera, todo lo que quiwro compartir con el resto del codigo */}
            <AuthContext.Provider value={ {currentUser, setCurrentUser, data, setData} }>
                { children }
            </AuthContext.Provider>
        </>
    )
}

export  { AuthProvider, AuthContext}