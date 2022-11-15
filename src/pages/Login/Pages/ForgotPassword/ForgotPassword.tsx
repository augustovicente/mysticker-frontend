import Input from 'Components/Input/Input';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SendImg from '../../../../assets/imgs/logo-send.svg'
import LogoPru from '../../../../assets/imgs/logo.svg';

type formType = {
    email: string;
}

const emailSchema = Yup.object().shape({
    email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
});

import * as S from './styles';
import { useToggle } from 'hooks/useToggle';
import { GradientOverlay } from 'Components/GradientOverlay';
import { useTheme } from 'styled-components';
import { FormBase } from 'pages/Login/components/FormBase.styles';

export const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<formType>({
        resolver: yupResolver(emailSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        shouldFocusError: true,
    });

    const [isLoading, setIsLoading] = useToggle(false);
    const theme = useTheme();
    const [isEmailSended, setIsEmailSended] = useState(false);

    const onSubmit: SubmitHandler<formType> = (data) => {
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
                <FormBase
                    initial={{ x: '100vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, easings: 'easeInOut' }}
                    exit={{ x: '100vw', opacity: 0 }}
                    noValidate onSubmit={handleSubmit(onSubmit)}>
                    <header>
                        <h1>Esqueci minha senha</h1>
                    </header>

                    <Input
                        {...register('email')}
                        label='Insira o e-mail da conta que deseja recuperar:'
                        autoComplete='email'
                        inputMode='email'
                        autoCapitalize='off'
                        autoCorrect='off'
                        errors={errors.email}
                        name="email"
                    />

                    <footer>
                        <button type="submit">
                            {isLoading ? (
                                <div className="spinner-border spinner-border-md">
                                </div>
                            ) : 'Recuperar senha'}
                        </button>

                        <img src={LogoPru} alt="Logo copa pru" />
                    </footer>

                </FormBase>
            ) : (
                <FormBase noValidate>
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
                </FormBase>
            )}

            <GradientOverlay />
        </S.Container>
    )
}
