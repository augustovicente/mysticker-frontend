import React from 'react';
import AvatarImg from '../../assets/imgs/avatar.png'

import * as S from './styles';

const Profile = () => {
    const user = {
        name: 'John Doe',
        ranking: '94803',
        closedTeams: '2',
        totalTeams: '32',
        closedContinents: ['América Norte', 'Ásia'],
        continents: ['América Norte', 'América Sul', 'África', 'Ásia', 'Europa']
    }

    return (
        <S.Container>
            <section>
                <div className="avatar">
                    <img
                        src={AvatarImg}
                        alt="imagem de perfil"
                        onError={(e) => {
                            e.currentTarget.src = 'https://media-exp1.licdn.com/dms/image/C560BAQE6dhRu8vd0gw/company-logo_200_200/0/1646226557889?e=2147483647&v=beta&t=Divc--AFbswqf5Orp6r0V7zh2dZleL0Th0XAQi-gyPg'
                        }}
                    />
                </div>

                <div className="user-info">
                    <header>
                        <text>Bem-Vindo Colecionador</text>
                        <strong className='username'>{user.name}</strong>

                        <button>
                            Conecte sua Carteia
                        </button>
                    </header>

                    <div className="ranking">
                        <span>
                            Ranking do Jogador
                        </span>
                        <strong>#{user.ranking}</strong>
                    </div>

                    <hr />

                    <div className='closed-teams'>
                        <span>
                            Times Fechados
                        </span>
                        <div>
                            <strong>{user.closedTeams}</strong> / <b>{user.totalTeams}</b>
                        </div>
                    </div>

                    <hr />

                    <span className='closed-continents'>
                        Continentes Fechados
                    </span>

                    <div className="continents">
                        {user.continents.map(continent => (
                            <span className={user.closedContinents.includes(continent) ? 'continent active' : 'continent'} key={continent}>{continent}</span>
                        ))}
                    </div>
                </div>
            </section>
        </S.Container>
    )
}

export default Profile;
