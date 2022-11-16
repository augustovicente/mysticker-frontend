import React from 'react';
import NotFoundImg from '../../assets/imgs/404-not-found.svg';
import { ReactComponent as HomeIcon } from '../../assets/imgs/home.svg';

import * as S from './styles';
import Header from 'Components/BaseTemplate/components/Header/Header'
import { Link } from 'react-router-dom';
import { GradientOverlay } from 'Components/GradientOverlay';


export const NotFoundPage = () => {
    return (
        <>
            <Header />
            <S.Container>
                <img src={NotFoundImg} alt="404" />
                <h1>Página não encontrada</h1>

                <Link to='/' className="btn-home">
                    <HomeIcon />
                    <span>
                        Voltar para o início
                    </span>
                </Link>
            </S.Container>
            <GradientOverlay />
        </>
    )
}
