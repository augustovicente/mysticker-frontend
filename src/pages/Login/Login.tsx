import Input from 'Components/Input/Input';
import * as Yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as S from './styles';
import { useToggle } from 'hooks/useToggle';
import { GradientOverlay } from 'Components/GradientOverlay';
import { useTheme } from 'styled-components';
import LogoPru from 'assets/imgs/logo.svg'
import { Link } from 'react-router-dom';
import { FormBase } from './components/FormBase.styles';
import { SignInCredentials, useAuth } from 'contexts/auth.context';

const loginSchema = Yup.object().shape({
    email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: Yup.string().required('Senha obrigatória'),
});


export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignInCredentials>({
        resolver: yupResolver(loginSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        shouldFocusError: true,
    });

    const theme = useTheme();
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
                    />
                </div>

                <button disabled={loading} type="submit">
                    {loading ? (
                        <div className="spinner-border spinner-border-md" role="status">
                        </div>
                    ) : 'Logar'}
                </button>

                <Link className='forgot-password' to="/forgot-password">
                    Esqueci a senha
                </Link>
            </FormBase>
            <GradientOverlay />
        </S.Container>
    )
}
