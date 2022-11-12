import Input from 'Components/Input/Input';
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SendImg from '../../../../assets/imgs/logo-send.svg'

const emailSchema = z.object({
    email: z.string().email('E-mail inválido'),
});

type emailSchemaType = z.infer<typeof emailSchema>;

import * as S from './styles';
import { useToggle } from 'hooks/useToggle';
import { GradientOverlay } from 'Components/GradientOverlay';
import { useTheme } from 'styled-components';

export const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<emailSchemaType>({
        resolver: zodResolver(emailSchema),
        mode: 'all',
    });

    const [isLoading, setIsLoading] = useToggle(false);
    const theme = useTheme();
    const [isEmailSended, setIsEmailSended] = useState(false);

    const onSubmit: SubmitHandler<emailSchemaType> = (data) => {
        console.log('data', data)

        new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
                setIsEmailSended(true);
                setIsLoading(false);
            }, 1200);
        })

        setIsLoading(true);
    };

    return (
        <S.Container>
            {!isEmailSended ? (
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <header>
                        <h1>Esqueci minha senha</h1>
                    </header>

                    <Input
                        {...register('email')}
                        label='Insira o e-mail da conta que deseja recuperar:'
                        autoComplete='email'
                        autoCapitalize='off'
                        autoCorrect='off'
                        errors={errors.email}
                        name="email"
                        style={{
                            outline: errors.email ? `2px solid ${theme.colors.red}` : 'none',
                        }}
                    />

                    <button type="submit">
                        {isLoading ? (
                            <div className="spinner-border spinner-border-md">
                            </div>
                        ) : 'Recuperar senha'}
                    </button>
                </form>
            ) : (
                <form noValidate>
                    <header>
                        <h1>Enviado com sucesso</h1>
                    </header>

                    <div className='message-email'>
                        <strong>
                            E-mail de recuperação foi enviado com <b>sucesso</b>
                        </strong>
                        <p>
                            Verifique sua caixa de entrada para criar uma nova senha
                        </p>

                        <img src={SendImg} alt="Logo copa pru" />
                    </div>
                </form>
            )}



            <GradientOverlay />
        </S.Container>
    )
}
