import Input from 'Components/Input/Input';
import { motion } from 'framer-motion';
import React from 'react';
import * as Yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as S from './styles';
import { useToggle } from 'hooks/useToggle';
import { GradientOverlay } from 'Components/GradientOverlay';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import LogoPru from '../../../../assets/imgs/logo.svg';
import Header from 'Components/BaseTemplate/components/Header/Header';
import { FormBase } from 'pages/Login/components/FormBase.styles';

type formType = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    confirmEmail: string;
    therms: boolean;
}

const registerSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigátorio'),
    email: Yup.string().required('Campo obrigátorio').email('E-mail inválido'),
    password: Yup.string().required('Campo obrigátorio'),
    confirmPassword: Yup.string()
        .required('Campo obrigátorio')
        .oneOf([Yup.ref('password'), null], 'Senha não confere'),
    confirmEmail: Yup.string()
        .required('Campo obrigátorio')
        .oneOf([Yup.ref('email'), null], 'E-mail não confere'),
    therms: Yup.boolean().oneOf([true], 'Aceite os termos de uso'),
}).required();

export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<formType>({
        resolver: yupResolver(registerSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        shouldFocusError: true,
    });

    const [isLoading, setIsLoading] = useToggle(false);
    const theme = useTheme();

    const onSubmit: SubmitHandler<formType> = (data) => {
        console.log('data', data)

        setIsLoading(true);
    };

    return (
        <S.Container>
            <FormBase
                onSubmit={handleSubmit(onSubmit)}
                initial={{ x: '100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, easings: 'easeInOut' }}
                exit={{ x: '100vw', opacity: 0 }}
            >
                <header>
                    <div>
                        <h1>Cadastrar</h1>
                    </div>

                    <img src={LogoPru} alt="Logo copa pruu" />
                </header>

                <div className="container-inputs">
                    <Input
                        {...register('name')}
                        label='Nome completo *'
                        autoComplete='name'
                        autoCorrect='off'
                        errors={errors.name}
                    />

                    <Input
                        {...register('email')}
                        label='E-mail'
                        autoComplete='email'
                        inputMode='email'
                        autoCapitalize='off'
                        autoCorrect='off'
                        errors={errors.email}
                    />

                    <Input
                        {...register('confirmEmail')}
                        label='Confirmação de e-mail *'
                        autoComplete='email'
                        inputMode='email'
                        autoCapitalize='off'
                        autoCorrect='off'
                        errors={errors.confirmEmail}
                    />

                    <Input
                        {...register('password')}
                        label='Crie uma senha *'
                        autoComplete='password'
                        type='password'
                        autoCapitalize='off'
                        autoCorrect='off'
                        errors={errors.password}
                    />

                    <Input
                        {...register('confirmPassword')}
                        label='Confirmar senha *'
                        autoComplete='password'
                        type='password'
                        autoCapitalize='off'
                        autoCorrect='off'
                        errors={errors.confirmPassword}
                    />

                    <div className="container-checkbox">
                        <input {...register('therms')} id='therms' type="checkbox" />
                        <label htmlFor='therms'>Eu aceito os termos de uso</label>
                    </div>
                </div>

                <div className="container-buttons">
                    <button
                        disabled={isLoading}
                        type="submit"
                    >
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
            </FormBase>
            <GradientOverlay />
        </S.Container>
    )
}
