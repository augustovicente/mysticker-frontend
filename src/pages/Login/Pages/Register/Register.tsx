import Input from 'Components/Input/Input';
import React from 'react';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from './styles';
import { useToggle } from 'hooks/useToggle';
import { GradientOverlay } from 'Components/GradientOverlay';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import LogoPru from '../../../../assets/imgs/logo.svg';
import Header from 'Components/Header/Header';
const emailSchema = z.object({
    email: z.string().email('E-mail inválido'),
    password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

type emailSchemaType = z.infer<typeof emailSchema>;


export const Register = () => {
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
        <>
            <Header />
            <S.Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <header>
                        <div>
                            <h1>Cadastrar</h1>
                        </div>

                        <img src={LogoPru} alt="Logo copa pruu" />
                    </header>


                    <div className="container-inputs">
                        <Input
                            {...register('email')}
                            label='Nome completo *'
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
                            {...register('email')}
                            label='E-mail'
                            autoComplete='email'
                            autoCapitalize='off'
                            autoCorrect='off'
                            name='email'
                            errors={errors.email}
                            style={{
                                outline: errors.email ? `2px solid ${theme.colors.red}` : 'none',
                            }}
                        />

                        <Input
                            {...register('password')}
                            label='Confirmação de e-mail *'
                            autoComplete='email'
                            autoCapitalize='off'
                            autoCorrect='off'
                            name='password'
                            errors={errors.password}
                            style={{
                                outline: errors.password ? `2px solid ${theme.colors.red}` : 'none',
                            }}
                        />

                        <Input
                            {...register('password')}
                            label='Crie uma senha *'
                            autoComplete='password'
                            autoCapitalize='off'
                            autoCorrect='off'
                            name='password'
                            errors={errors.password}
                            style={{
                                outline: errors.password ? `2px solid ${theme.colors.red}` : 'none',
                            }}
                        />

                        <Input
                            {...register('password')}
                            label='Confirmar senha *'
                            autoComplete='password'
                            autoCapitalize='off'
                            autoCorrect='off'
                            name='password'
                            errors={errors.password}
                            style={{
                                outline: errors.password ? `2px solid ${theme.colors.red}` : 'none',
                            }}
                        />

                        <div className="container-checkbox">
                            <input name='therms' type="checkbox" />
                            <label htmlFor='therms'>Eu aceito os termos de uso</label>
                        </div>
                    </div>

                    <div className="container-buttons">
                        <button disabled={isLoading} type="submit">
                            {isLoading ? (
                                <div className="spinner-border spinner-border-md" role="status">
                                </div>
                            ) : 'Cadastrar'}
                        </button>

                        <button disabled={isLoading}>
                            <Link className='to-login' to="/login">
                                Já tenho conta
                            </Link>
                        </button>
                    </div>
                </form>
                <GradientOverlay />
            </S.Container>
        </>
    )
}
