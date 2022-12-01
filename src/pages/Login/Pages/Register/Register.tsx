import Input from 'Components/Input/Input';
import * as Yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as S from './styles';
import { useToggle } from 'hooks/useToggle';
import { GradientOverlay } from 'Components/GradientOverlay';
import { Link, useNavigate } from 'react-router-dom';
import LogoPru from 'assets/imgs/logo.svg';
import WorldBackground from '../../../../../public/assets/img/others/world.png'
import { FormBase } from 'pages/Login/components/FormBase.styles';
import { toast } from 'react-toastify';
import axios from 'axios';
import { api } from 'services/api';
import { useState } from 'react';
import SendImg from 'assets/imgs/logo-send.svg'
import { useTranslation } from 'react-i18next';

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

export const Register = () =>
{
    const { t } = useTranslation();
    const registerSchema = Yup.object().shape({
        name: Yup.string().required(t('signup.errors.required_name') || ''),
        email: Yup.string().required(t('signup.errors.required_email') || '').email(t('signup.errors.invalid_email') || ''),
        password: Yup.string().required(t('signup.errors.required_password') || ''),
        confirmPassword: Yup.string()
            .required(t('signup.errors.required_password_confirmation') || '')
            .oneOf([Yup.ref('password'), null], t('signup.errors.password_confirmation') || ''),
        confirmEmail: Yup.string()
            .required(t('signup.errors.required_email_confirmation') || '')
            .oneOf([Yup.ref('email'), null], t('signup.errors.email_confirmation') || ''),
        therms: Yup.boolean().required()
    }).required();

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
            return toast.info(t('signup.errors.terms_of_use') || '');
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
                    return toast.error(t('signup.errors.email_used') || '');
                } else {
                    return toast.error(t('signup.errors.general_error') || '');
                }
            } else {
                return toast.error(t('signup.errors.general_error') || '');
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
                            <h1>{t('signup.title')}</h1>
                        </div>

                        <img className='logo-pru' src={LogoPru} alt="Logo copa pruu" />
                    </header>

                    <div className="container-inputs">
                        <Input
                            {...register('name')}
                            label={t('signup.fields.name')}
                            autoComplete='name'
                            autoCorrect='off'
                            errors={errors.name}
                            hasMobileStyle
                        />

                        <Input
                            hasMobileStyle
                            {...register('email')}
                            label={t('signup.fields.email')}
                            autoComplete='email'
                            inputMode='email'
                            autoCapitalize='off'
                            autoCorrect='off'
                            errors={errors.email}
                        />

                        <Input
                            hasMobileStyle
                            {...register('confirmEmail')}
                            label={t('signup.fields.email_confirmation')}
                            autoComplete='email'
                            inputMode='email'
                            autoCapitalize='off'
                            autoCorrect='off'
                            errors={errors.confirmEmail}
                        />

                        <Input
                            hasMobileStyle
                            {...register('password')}
                            label={t('signup.fields.password')}
                            autoComplete='password'
                            type='password'
                            autoCapitalize='off'
                            autoCorrect='off'
                            errors={errors.password}
                        />

                        <Input
                            hasMobileStyle
                            {...register('confirmPassword')}
                            label={t('signup.fields.confirm_password')}
                            autoComplete='password'
                            type='password'
                            autoCapitalize='off'
                            autoCorrect='off'
                            errors={errors.confirmPassword}
                        />

                        <div className="container-checkbox">
                            <input {...register('therms')} id='therms' type="checkbox" />
                            <label htmlFor='therms'>
                                {t('signup.fields.terms_of_use')}
                            </label>
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
                            ) : t('signup.actions.submit')}
                        </button>

                        <button disabled={isLoading}>
                            <Link className='to-login' to="/login">
                                {t('signup.actions.already_have_an_account')}
                            </Link>
                        </button>
                    </div>
                </FormBase>
            ) : (
                <FormBase noValidate>
                    <header>
                        <h1>
                            {t('signup.email_validation.title')}
                        </h1>
                    </header>

                    <div className='message-email'>
                        <strong>
                            {t('signup.email_validation.subtitle')}
                        </strong>

                        <img src={SendImg} alt="Logo copa pru" />
                    </div>
                </FormBase>
            )}

            <GradientOverlay />
        </S.Container>
    )
}
