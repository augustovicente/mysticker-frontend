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

    const onSubmit: SubmitHandler<ProfileDataProps> = (data) => {
        setIsLoading(true);

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
                setIsCompleted(true);
                setIsLoading(false);
            }, 1200);
        })
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
                        <form noValidate>
                            <h5>Redefinir Senha</h5>
                            <Input
                                {...register('password')}
                                label='Senha'
                                name='password'
                                errors={errors.password}
                                type="password"
                                hasMobileStyle
                                leftIcon={(
                                    <i className="fi-sr-user"></i>
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
                                    <i className="fi-sr-envelope"></i>
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
                        <div className='message-reset'>
                            <strong>
                                Senha redefinida com sucesso!
                            </strong>

                            <ConfettiIcon />
                        </div>
                    )}

                    <LogoCopaPru className='logo' />
                </div>
            </main>
        </S.Container>
    )
}
