import Input from 'Components/Input/Input';
import { useEffect, useState } from 'react';
import { ReactComponent as ConfirmedIcon } from 'assets/imgs/confirmed.svg';

import * as S from './styles';
import { useToggle } from 'hooks/useToggle';
import { GradientOverlay } from 'Components/GradientOverlay';
import { useTheme } from 'styled-components';
import { FormBase } from 'pages/Login/components/FormBase.styles';
import { api } from 'services/api';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

export const ConfirmEmail = () => {
    const [isLoading, setIsLoading] = useToggle(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const theme = useTheme();
    const { code } = useParams();

    useEffect(() => {
        setIsLoading(true);

        (async () => {
            try {
                const { data } = await api.post(`verify-email/${code}`);

                if (data) {
                    setIsLoading(false);
                    setIsConfirmed(true);
                }
            } catch (error) {
                setIsLoading(false);
            }
        })();
    }, [])

    if (isLoading) return (
        <SkeletonConfirmEmail />
    )

    return (
        <S.Container>
            <FormBase noValidate>
                <header>
                    {isConfirmed ? (
                        <>
                            <ConfirmedIcon />
                            <h3>E-mail confirmado {"\n"} <strong>com sucesso!</strong></h3>
                        </>
                    ) : (
                        <h3>Código inválido {"\n"} ou expirado</h3>
                    )}
                </header>

                <main>
                    <Link className='link-home' to="/">
                        Voltar para a página inicial
                    </Link>
                </main>

            </FormBase>
            <GradientOverlay />
        </S.Container>
    )
}


export const SkeletonConfirmEmail = () => {
    return (
        <S.Container>
            <FormBase noValidate>
                <header>
                    <Skeleton
                        height={70}
                        width={70}
                        className='cpf'
                        baseColor='#3C375B'
                        highlightColor='#6345EE'
                        borderRadius={4}
                        circle
                    />

                    <Skeleton
                        height={90}
                        width={300}
                        className='cpf'
                        baseColor='#3C375B'
                        highlightColor='#6345EE'
                        borderRadius={4}
                    />
                </header>

                <main>
                    <Skeleton
                        style={{
                            marginTop: 44,
                            marginBottom: 24
                        }}
                        height={24}
                        width={140}
                        className='cpf'
                        baseColor='#3C375B'
                        highlightColor='#6345EE'
                        borderRadius={4}
                    />
                </main>
            </FormBase>
        </S.Container>
    )
}
