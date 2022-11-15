import Input from 'Components/Input/Input';
import React from 'react';
import * as Yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as S from './styles';
import { useToggle } from 'hooks/useToggle';
import { GradientOverlay } from 'Components/GradientOverlay';
import { useTheme } from 'styled-components';
import LogoPru from '../../assets/imgs/logo.svg'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type loginType = {
    email: string;
    password: string;
}

const loginSchema = Yup.object().shape({
    email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: Yup.string().required('Senha obrigatória'),
});


export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<loginType>({
        resolver: yupResolver(loginSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        shouldFocusError: true,
    });

    const [isLoading, setIsLoading] = useToggle(false);
    const theme = useTheme();

    const onSubmit: SubmitHandler<loginType> = (data) => {
        console.log('data', data)

        setIsLoading(true);
    };


    return (
        <S.Container>
            <motion.form
                onSubmit={handleSubmit(onSubmit)}
                initial={{ x: '100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, easings: 'easeInOut' }}
                exit={{ x: '100vw', opacity: 0 }}
            >
                <header>
                    <div>
                        <h1>Login</h1>

                        <div>
                            <span>Não tem uma conta?</span> <Link to="/register">Crie uma aqui</Link>
                        </div>
                    </div>

                    <img src={LogoPru} alt="Logo copa pruu" />
                </header>


                <div className="container-inputs">
                    <Input
                        {...register('email')}
                        label='E-mail'
                        autoComplete='email'
                        inputMode='email'
                        autoCapitalize='off'
                        autoCorrect='off'
                        errors={errors.email}
                        name="email"
                        style={{
                            outline: errors.email ? `2px solid ${theme.colors.red}` : 'none',
                        }}
                    />

                    <Input
                        {...register('password')}
                        label='Senha'
                        autoComplete='password'
                        autoCapitalize='off'
                        autoCorrect='off'
                        name='password'
                        errors={errors.password}
                        type="password"
                        style={{
                            outline: errors.password ? `2px solid ${theme.colors.red}` : 'none',
                        }}
                    />
                </div>

                <button disabled={isLoading} type="submit">
                    {isLoading ? (
                        <div className="spinner-border spinner-border-md" role="status">
                        </div>
                    ) : 'Logar'}
                </button>

                <Link className='forgot-password' to="/forgot-password">
                    Esqueci a senha
                </Link>
            </motion.form>
            <GradientOverlay />
        </S.Container>
    )
}
