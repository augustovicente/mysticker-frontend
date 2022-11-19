import * as S from './styles';
import { ReactComponent as FingerprintIcon } from 'assets/imgs/fingerprint.svg';
import { ReactComponent as GalleryIcon } from 'assets/imgs/galery.svg';
import { ReactComponent as LogoCopaPru } from 'assets/imgs/logo.svg';
import { ReactComponent as ConfettiIcon } from 'assets/imgs/confetti.svg';
import Input from 'Components/Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useState } from 'react';
import { useToggle } from 'hooks/useToggle';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { api } from 'services/api';

type ProfileDataProps = {
    password: string;
    confirmPassword: string;
};

const resetPasswordSchema = Yup.object().shape({
    password: Yup.string().required('Campo obrigatório'),
    confirmPassword: Yup.string().oneOf([
        Yup.ref('password'),
        null,
    ], 'As senhas não conferem'),
});

export const NewPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ProfileDataProps>({
        resolver: yupResolver(resetPasswordSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        shouldFocusError: true,
    });

    const [isCompleted, setIsCompleted] = useState(false);
    const [isLoading, setIsLoading] = useToggle(false);

    const { code } = useParams();

    const onSubmit: SubmitHandler<ProfileDataProps> = async (formValues) => {
        setIsLoading(true);

        try {
            await api.post(`reset-password-by-link/${code}`, {
                password: formValues.password,
            });

            setIsCompleted(true);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);

            if (axios.isAxiosError(error)) {
                if (error?.response?.data?.error === 'Code not found or expired') {
                    return toast.error('Código inválido ou expirado', {
                        toastId: 'code-not-found-or-expired',
                    });
                }

                return toast.error('Erro ao resetar a senha, tente novamente');
            } else {
                toast.error('Erro ao resetar a senha, tente novamente');
            }
        }
    };

    return (
        <S.Container>
            <main>
                <div>
                    {!isCompleted ? (
                        <form noValidate>
                            <h5>Redefinir Senha</h5>
                            <Input
                                {...register('password')}
                                label='Senha'
                                name='password'
                                autoComplete='password'
                                autoCapitalize='off'
                                autoCorrect='off'
                                errors={errors.password}
                                type="password"
                                hasMobileStyle
                            />

                            <Input
                                {...register('confirmPassword')}
                                label='Confirmar senha'
                                name='confirmPassword'
                                errors={errors.confirmPassword}
                                type="password"
                                hasMobileStyle
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
                                    Senha redefinida {'\n'}com sucesso!
                                </strong>

                                <ConfettiIcon />
                            </div>

                            <Link className='link-home' to="/">
                                Voltar para a página inicial
                            </Link>
                        </>
                    )}
                </div>
            </main>
        </S.Container>
    )
}
