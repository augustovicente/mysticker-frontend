import { useToggle } from "hooks/useToggle";
import React, { useState, useEffect, useContext, createContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "services/api";
import { PREFIX_AUTH } from "utils/constants";

type PropsProvider = {
    children?: React.ReactNode;
};

type SignInCredentials = {
    email: string;
    password: string;
};

type UserModel = {
    id: number;
    name: string;
    email: string;
    cpf: string;
    phone: string;
    address: Address
}

type Address = {
    street: string;
    number: number;
    complement: string;
    neighborhood: string;
    city: string;
    uf: string;
    cep: string;
}

export type User = {
    user: UserModel;
    token: string;
}

export type AuthContextData = {
    user: UserModel | null;
    token: string;
    loading: boolean;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    resetUser(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: PropsProvider) => {
    const [data, setData] = useState<User>({
        user: JSON.parse(localStorage.getItem(`${PREFIX_AUTH}:user`) || 'null'),
        token: JSON.parse(localStorage.getItem(`${PREFIX_AUTH}:token`) || 'null'),
    });

    const [loading, setLoading] = useToggle(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem(`${PREFIX_AUTH}:token`)
        const user = localStorage.getItem(`${PREFIX_AUTH}:user`)

        if (token && user) {
            setData({
                user: JSON.parse(user),
                token: JSON.parse(token),
            });
        }
    }, []);

    const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
        try {
            setLoading(true);

            const response = await api
                .post('auth/login', {
                    email,
                    password,
                })

            if (response.data) {
                const { token, user } = response.data;

                if (token && user) {
                    localStorage.setItem(`${PREFIX_AUTH}:token`, JSON.stringify(token))
                    localStorage.setItem(`${PREFIX_AUTH}:user`, JSON.stringify(user))

                    setData({ token, user });
                    setLoading(false);

                    navigate('/', { replace: true });
                } else {
                    // open_toast({
                    //     type: 'danger',
                    //     title: 'Erro',
                    //     subtitle: 'Desculpe. Não foi possível realizar o login.',
                    //     toastId: 'auth-error',
                    // })
                }
            }
        }
        catch (error: any) {
            setLoading(false);

            if (error?.response?.status === 403) {
                // open_toast({
                //     title: 'Usuário desabilitado!',
                //     subtitle: 'Entre em contato com o seu gestor',
                //     type: 'danger',
                //     toastId: 'UserDisabled'
                // })
            }
            else {
                // open_toast({
                //     title: 'CPF/E-mail ou Senha incorretos',
                //     subtitle: 'Tente novamente por favor',
                //     type: 'danger',
                //     toastId: 'UserOrPasswordIncorrect'
                // })
            }
        }
    }, []);

    const resetUser = () => {
        localStorage.clear();
        setData({} as User);
        navigate('/', { replace: true });
    }

    const signOut = useCallback(async () => {
        resetUser()
    }, [data?.user, data?.token]);


    return (
        <AuthContext.Provider
            value={{
                user: data.user,
                loading,
                signIn,
                signOut,
                token: data.token,
                resetUser
            }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};
