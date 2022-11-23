import Input from 'Components/Input/Input';
import * as Yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as S from './styles';
import { GradientOverlay } from 'Components/GradientOverlay';
import LogoPru from 'assets/imgs/logo.svg'
import { Link } from 'react-router-dom';
import { FormBase } from './components/FormBase.styles';
import { SignInCredentials, useAuth } from 'contexts/auth.context';
import { useTranslation } from 'react-i18next';

export const Login = () =>
{
    const { t } = useTranslation();
    const loginSchema = Yup.object().shape({
        email: Yup.string().required(t('login.errors.required_email') || '').email(t('login.errors.invalid_email') || ''),
        password: Yup.string().required(t('login.errors.required_password') || ''),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<SignInCredentials>({
        resolver: yupResolver(loginSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        shouldFocusError: true,
    });

    const { signIn, loading } = useAuth();

    const onSubmit: SubmitHandler<SignInCredentials> = async (dataValues) => {
        await signIn(dataValues);
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
                        <h1>{t('login.title')}</h1>

                        <div>
                            <span>{t('login.signup_quest')}</span> <Link to="/register">{t('login.signup_action')}</Link>
                        </div>
                    </div>

                    <img src={LogoPru} alt="Logo copa pruu" />
                </header>


                <div className="container-inputs">
                    <Input
                        {...register('email')}
                        label={t('login.input_email')}
                        autoComplete='email'
                        inputMode='email'
                        autoCapitalize='off'
                        autoCorrect='off'
                        errors={errors.email}
                        name="email"
                    />

                    <Input
                        {...register('password')}
                        label={t('login.input_password')}
                        autoComplete='password'
                        autoCapitalize='off'
                        autoCorrect='off'
                        name='password'
                        errors={errors.password}
                        type="password"
                    />
                </div>

                <button disabled={loading} type="submit">
                    {loading ? (
                        <div className="spinner-border spinner-border-md" role="status">
                        </div>
                    ) : 'Logar'}
                </button>

                <Link className='forgot-password' to="/forgot-password">
                    {t('login.forgot_password')}
                </Link>
            </FormBase>
            <GradientOverlay />
        </S.Container>
    )
}
