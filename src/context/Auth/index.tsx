import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';
import { User } from '../../types'

type ContextType={
    currentUser?: Partial<User>,
    setCurrentUser: Dispatch<SetStateAction<Partial<User>>>,
}

const AuthContext = createContext <ContextType>({
    currentUser: {},
    setCurrentUser: () => undefined
});

const AuthProvider: FC = ({ children }) => {

    const [currentUser, setCurrentUser]= useState<Partial<User>>({})

    return (
        <>
        {/* lo que esta dentro de value puede ser lo que yo quiera, todo lo que quiwro compartir con el resto del codigo */}
            <AuthContext.Provider value={ {currentUser, setCurrentUser} }>
                { children }
            </AuthContext.Provider>
        </>
    )
}

export  { AuthProvider, AuthContext}