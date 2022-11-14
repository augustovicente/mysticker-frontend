import Input from 'Components/Input/Input';
import React from 'react';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from './styles';
import { useToggle } from 'hooks/useToggle';
import { GradientOverlay } from 'Components/GradientOverlay';
import { useTheme } from 'styled-components';
import LogoPru from '../../assets/imgs/logo.svg'
import { Link } from 'react-router-dom';

const emailSchema = z.object({
    email: z.string().email('E-mail inválido'),
    password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

type emailSchemaType = z.infer<typeof emailSchema>;


export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<emailSchemaType>({
        resolver: zodResolver(emailSchema),
        mode: 'all',
        shouldFocusError: false,
    });

    const [isLoading, setIsLoading] = useToggle(false);
    const theme = useTheme();

    const onSubmit: SubmitHandler<emailSchemaType> = (data) => {
        console.log('data', data)

        setIsLoading(true);
    };

    return (
        <S.Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <header>
                    <div>
                        <h1>Login</h1>

                        <div>
                            <span>Não tem uma conta?</span> <Link to="../register">Crie uma aqui</Link>
                        </div>
                    </div>

                    <img src={LogoPru} alt="Logo copa pruu" />
                </header>


                <div className="container-inputs">
                    <Input
                        {...register('email')}
                        label='E-mail'
                        autoComplete='email'
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
            </form>
            <GradientOverlay />
        </S.Container>
    )
}
