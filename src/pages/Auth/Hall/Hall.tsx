import { GradientOverlay } from 'Components/GradientOverlay';
import Header from 'Components/BaseTemplate/components/Header/Header';
import Profile from 'Components/Profile';
import AuthorProfile from 'pages/AuthorProfile';
import React from 'react';

import * as S from './styles';

export const Hall = () => {
    return (
        <S.Container>
            <header>
                <div></div>
                <div>
                    <h1>Hall de Entrada</h1>

                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>

            <div className="grid">
                <div className='profile'>
                    <Profile />
                </div>

                <div>
                    <div className='menu'>

                        <h1>teste</h1>
                    </div>
                </div>
            </div>

            <GradientOverlay />
        </S.Container>
    )
}
