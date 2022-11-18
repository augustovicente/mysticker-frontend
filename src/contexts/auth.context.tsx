import axios from "axios";
import { useToggle } from "hooks/useToggle";
import React, { useState, useEffect, useContext, createContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "services/api";
import { PREFIX_AUTH } from "utils/constants";
import { toast } from 'react-toastify';

type PropsProvider = {
    children?: React.ReactNode;
};

export type UserModel = {
    id:                 number;
    name:               string;
    email:              string;
    cpf:                string;
    full_number:        string;
    address_zip_code:   string;
    address_number:     string;
    address_complement: string;
    email_verified:     boolean;
    created_at:         Date;
    updated_at:         Date;
}

export type SignInCredentials = {
    email: string;
    password: string;
};

export type User = {
    user: UserModel;
    token: string;
}

export type AuthContextData = {
    user: UserModel;
    token: string;
    loading: boolean;
    signIn(credentials: SignInCredentials): Promise<any>;
    signOut(): void;
    resetUser(): void;
    getUser(): void;
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
        setLoading(true);

        try {
            const response = await api
                .post('login', {
                    email,
                    password,
                })

            const { token, user } = response.data;

            if (token && user) {
                localStorage.setItem(`${PREFIX_AUTH}:token`, JSON.stringify(token))
                localStorage.setItem(`${PREFIX_AUTH}:user`, JSON.stringify(user))

                setData({ token, user });
                setLoading(false);

                navigate('/', { replace: true });
            } else {
                return toast.error('Desculpe. Não foi possível realizar o login.')
            }
        }
        catch (error) {
            setLoading(false);

            if (axios.isAxiosError(error)) {
                if (error.response?.status === 405) {
                    return toast.error(error?.response?.data?.message);
                }

                console.log('error message: ', error.message);
                return toast.error("E-mail ou senha incorretos.");
            } else {
                console.log('unexpected error: ', error);
                return toast.error("Erro ao realizar login, tente novamente");
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
    }, []);

    const getUser = useCallback(async () => {
        const { data } = await api.post('get-authenticated-user');

        if (data) {
            setData(prevState => ({ ...prevState, user: data }));
            localStorage.setItem(`${PREFIX_AUTH}:user`, JSON.stringify(data));
        }
    }, []);


    return (
        <AuthContext.Provider
            value={{
                user: data.user,
                loading,
                signIn,
                signOut,
                token: data.token,
                resetUser,
                getUser
            }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};
