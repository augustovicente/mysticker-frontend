import * as S from './styles';
import { ReactComponent as ChallengeIcon } from '../../../public/assets/img/icons/challenge-icon.svg';
import { ChallengeCard } from 'pages/Challenge/Components/ChallengeCard/ChallengeCard';

import { challengeMock } from './mock/challenge';
import { Row } from 'antd';
import { GradientOverlay } from 'Components/GradientOverlay';

export const Challenge = () => {
    return (
        <S.Container>
            <header>
                <div className='title'>
                    <ChallengeIcon />
                    <h2>Desafios</h2>
                </div>

                <div className='dots'>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </header>

            <section>
                <main>
                    <Row className='challenge-list'>
                        {challengeMock.map(({ title, link, headerImage, text, mainTopIcon, bg, redeemComponent, invitedFriends, buyedPackages, completeAlbum }, index) => (
                            <ChallengeCard
                                key={index}
                                bg={bg}
                                title={title}
                                link={link}
                                headerImage={headerImage}
                                mainTopIcon={mainTopIcon}
                                text={text}
                                redeemComponent={redeemComponent}
                                invitedFriends={invitedFriends}
                                buyedPackages={buyedPackages}
                                completeAlbum={completeAlbum}
                            />
                        ))}
                    </Row>
                </main>
            </section>

            <GradientOverlay />

        </S.Container>
    )
}
