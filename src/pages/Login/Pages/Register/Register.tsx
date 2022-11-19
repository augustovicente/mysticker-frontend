import Input from 'Components/Input/Input';
import * as Yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as S from './styles';
import { useToggle } from 'hooks/useToggle';
import { GradientOverlay } from 'Components/GradientOverlay';
import { useTheme } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import LogoPru from 'assets/imgs/logo.svg';
import { FormBase } from 'pages/Login/components/FormBase.styles';
import { toast } from 'react-toastify';
import axios from 'axios';
import { api } from 'services/api';
import { useState } from 'react';
import SendImg from 'assets/imgs/logo-send.svg'


type formType = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    confirmEmail: string;
    therms: boolean;
}

type Register = {
    name: string;
    email: string;
    password: string;
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
    therms: Yup.boolean().required()
}).required();

export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<formType>({
        resolver: yupResolver(registerSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        shouldFocusError: true,
    });

    const [isLoading, setIsLoading] = useToggle(false);
    const [isEmailSended, setIsEmailSended] = useState(false);

    const onSubmit: SubmitHandler<formType> = async (formValues) => {
        if (!formValues.therms) {
            return toast.info('Você precisa aceitar os termos de uso');
        }

        setIsLoading(true);

        try {
            await api.post<Register>('register', {
                name: formValues.name,
                email: formValues.email,
                password: formValues.password,
            });

            setIsLoading(false);
            setIsEmailSended(true);
        } catch (error) {
            setIsLoading(false);

            if (axios.isAxiosError(error)) {
                if (error?.response?.status === 422) {
                    return toast.error('E-mail já utilizado');
                } else {
                    return toast.error('Erro ao realizar cadastro');
                }
            } else {
                return toast.error('Erro ao realizar cadastro');
            }
        }
    };

    return (
        <S.Container className={isEmailSended ? 'sended' : 'test'}>
            {!isEmailSended ? (
                <FormBase
                    noValidate
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

                        <img className='logo-pru' src={LogoPru} alt="Logo copa pruu" />
                    </header>

                    <div className="container-inputs">
                        <Input
                            {...register('name')}
                            label='Nome completo *'
                            autoComplete='name'
                            autoCorrect='off'
                            errors={errors.name}
                            hasMobileStyle
                        />

                        <Input
                            hasMobileStyle
                            {...register('email')}
                            label='E-mail'
                            autoComplete='email'
                            inputMode='email'
                            autoCapitalize='off'
                            autoCorrect='off'
                            errors={errors.email}
                        />

                        <Input
                            hasMobileStyle
                            {...register('confirmEmail')}
                            label='Confirmação de e-mail *'
                            autoComplete='email'
                            inputMode='email'
                            autoCapitalize='off'
                            autoCorrect='off'
                            errors={errors.confirmEmail}
                        />

                        <Input
                            hasMobileStyle
                            {...register('password')}
                            label='Crie uma senha *'
                            autoComplete='password'
                            type='password'
                            autoCapitalize='off'
                            autoCorrect='off'
                            errors={errors.password}
                        />

                        <Input
                            hasMobileStyle
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
                            <label htmlFor='therms'>Li e aceito os Termos e Compromissos</label>
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
            ) : (
                <FormBase noValidate>
                    <header>
                        <h1>Confirme seu email</h1>
                    </header>

                    <div className='message-email'>
                        <strong>
                            Verifique a caixa de entrada do seu e-mail para ativar a sua conta!
                        </strong>

                        <img src={SendImg} alt="Logo copa pru" />
                    </div>
                </FormBase>
            )}

            <GradientOverlay />
        </S.Container>
    )
}
