import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../service/Service"
import { toastAlerta } from "../util/toastAlerta"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        produto: "",
        id: 0,
        nome: "",
        email: "",
        senha: "",
        foto: "",
        tipo: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            toastAlerta('Usúario logado com sucesso', 'sucesso');
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            toastAlerta('Dados do usuário inconsistentes' , 'info')
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            produto: "",
            id: 0,
            nome: "",
            email: "",
            senha: "",
            foto: "",
            tipo: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}