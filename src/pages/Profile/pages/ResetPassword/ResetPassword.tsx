import * as S from './styles';
import { ReactComponent as FingerprintIcon } from 'assets/imgs/fingerprint.svg';
import { ReactComponent as LogoCopaPru } from 'assets/imgs/logo.svg';
import { ReactComponent as ConfettiIcon } from 'assets/imgs/confetti.svg';
import Input from 'Components/Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useState } from 'react';
import { useToggle } from 'hooks/useToggle';
import { Link } from 'react-router-dom';
import { api } from 'services/api';
import { toast } from 'react-toastify';
import axios from 'axios';

type ProfileDataProps = {
    password: string;
    confirmPassword: string;
};

const resetPasswordSchema = Yup.object().shape({
    password: Yup.string().required('Campo obrigatória'),
    confirmPassword: Yup.string().oneOf([
        Yup.ref('password'),
        null,
    ], 'As senhas não são iguais'),
});

export const ResetPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ProfileDataProps>({
        resolver: yupResolver(resetPasswordSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        shouldFocusError: true,
    });

    const [isCompleted, setIsCompleted] = useState(false);
    const [isLoading, setIsLoading] = useToggle(false);

    const onSubmit: SubmitHandler<ProfileDataProps> = async (formValues) => {
        setIsLoading(true);

        try {
            await api.post('/reset-password', {
                password: formValues.password
            });

            setIsLoading(false);
            setIsCompleted(true);
        } catch (error) {
            setIsLoading(false);
            if (axios.isAxiosError(error)) {
                if (error?.response?.data?.errorCode === 'IS_THE_SAME') {
                    toast.error('A senha deve ser diferente da anterior', {
                        toastId: 'IS_THE_SAME',
                    });
                }
            } else {

                return toast.error('Erro ao redefinir a senha, tente novamente', {
                    toastId: 'RESET_PASSWORD_ERROR',
                });
            }
        }
    };

    return (
        <S.Container>
            <header>
                <div className='title'>
                    <FingerprintIcon />
                    <h2>Meus dados</h2>
                </div>

                <div className='dots'>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </header>

            <main>
                <div>
                    {!isCompleted ? (
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h5>Redefinir Senha</h5>
                            <Input
                                {...register('password')}
                                label='Senha'
                                name='password'
                                errors={errors.password}
                                type="password"
                                hasMobileStyle
                                leftIcon={(
                                    <i className="left-icon fi-sr-user"></i>
                                )}
                            />

                            <Input
                                {...register('confirmPassword')}
                                label='Confirmar senha'
                                name='confirmPassword'
                                errors={errors.confirmPassword}
                                type="password"
                                hasMobileStyle
                                leftIcon={(
                                    <i className="left-icon fi-sr-envelope"></i>
                                )}
                            />

                            <button
                                disabled={isLoading}
                                type='submit'
                                onClick={handleSubmit(onSubmit)}
                            >
                                {isLoading ? (
                                    <span className="spinner-border spinner-border-md">
                                    </span>
                                ) : 'Confirmar alteração'}
                            </button>
                        </form>
                    ) : (
                        <>
                            <div className='message-reset'>
                                <strong>
                                    Senha redefinida com sucesso!
                                </strong>

                                <ConfettiIcon />
                            </div>

                            <Link className='to-home d-none' to='/'>
                                Voltar para a página incial
                            </Link>
                        </>
                    )}

                    <LogoCopaPru className='logo' />
                </div>
            </main>
        </S.Container>
    )
}
