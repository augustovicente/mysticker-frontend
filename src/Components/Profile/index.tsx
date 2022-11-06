import React from 'react';

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
            <div className="">
                <div className="avatar">
                    <img
                        src='https://media-exp1.licdn.com/dms/image/C560BAQE6dhRu8vd0gw/company-logo_200_200/0/1646226557889?e=2147483647&v=beta&t=Divc--AFbswqf5Orp6r0V7zh2dZleL0Th0XAQi-gyPg'
                        alt="imagem de perfil"
                        onError={(e) => {
                            e.currentTarget.src = 'https://media-exp1.licdn.com/dms/image/C560BAQE6dhRu8vd0gw/company-logo_200_200/0/1646226557889?e=2147483647&v=beta&t=Divc--AFbswqf5Orp6r0V7zh2dZleL0Th0XAQi-gyPg'
                        }}
                    />
                </div>

                <div className="user-info">
                    <div>
                        <span>Bem-Vindo Colecionador</span>
                        <strong className='username'>{user.name}</strong>

                        <button>
                            Conecte sua Carteia
                        </button>
                    </div>

                    <div>
                        <span className="ranking">
                            Ranking do Jogador <strong>#{user.ranking}</strong>
                        </span>
                        <hr />

                        <span className='closed-teams'>
                            Times Fechados <strong>{user.closedTeams}/{user.totalTeams}</strong>
                        </span>
                        <hr />

                        <span className='closed-continents'>
                            Continentes Fechados
                            <div className="continents">
                                {user.closedContinents.map(continent => (
                                    <span key={continent}>{continent}</span>
                                ))}
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </S.Container>
    )
}

export default Profile;
