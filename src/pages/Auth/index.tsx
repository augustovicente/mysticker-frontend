import Header from 'Components/Header/Header';
import SideBar from 'Components/IndexOne/SideBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

import * as S from './styles';

export const IndexAuth = () => {
    return (
        <S.Container>
            <SideBar />
            <Header hasContainer={false} />
            <Outlet />
        </S.Container>
    )
}
