import * as S from './styles';
import { ReactComponent as ChallengeIcon } from '../../../public/assets/img/icons/challenge-icon.svg';
import { ChallengeCard } from 'pages/Challenge/Components/ChallengeCard/ChallengeCard';

export const Challenge = () => {
    return (
        <S.Container>
            <header>
                <div className='title'>
                    <ChallengeIcon />
                    <h2>Meus dados</h2>
                </div>

                <div className='dots'>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </header>

            <section>
                {new Array(3).fill('').map((_, index) => (
                    <ChallengeCard />
                ))}
            </section>

        </S.Container>
    )
}
