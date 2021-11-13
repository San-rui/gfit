import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context";
import { mapToArray } from "../../helpers"
import { User } from "../../types";
import { api } from "../../utils";

const useAuth = ()  => {
    const { setCurrentUser } = useContext(AuthContext);
    const [ tokenStorage, setTokenStorage] = useState <string | undefined>(
        localStorage.getItem('user-token') || undefined)

    const { push }= useHistory();

    const createUserToken = async (user: User): Promise<string | null> => {
        try {
            const newToken = Math.random().toString(36).substr(2);
            await api.patch(`/users/${user.id}.json`, { sessionToken: newToken });
            return newToken;
            } catch (err) {
            return null;
            }
        };

        useEffect ( () => {
            if(tokenStorage) localStorage.setItem('user-token', tokenStorage)
        },[tokenStorage])

        const login = async (email: string, password: string) => {
            try {
                const response = await api.get("/users.json");
            
                /* Tarea de backend */
                const users: User[] = mapToArray(response.data);
            
                const user = users.find(
                    (user) => user.email === email && user.password === password
                );
            
                if (user) {
                    // Definir un token
                    const token = await createUserToken(user);
            
                    if (token) {
                    setTokenStorage(token)
                    setCurrentUser(user);
                    }
                } else {
                    throw new Error("El usuario no existe");
                }
                /* / Tarea de backend */
                } catch (e) {
                console.log(e);
                }
        };
        const loginWithToken = () => {};

        const logout = () => {
            localStorage.removeItem('user-token')
            push('/login')
        };

        const signUp = () => {};

    return { login, loginWithToken, logout, signUp  }
}

export { useAuth }
