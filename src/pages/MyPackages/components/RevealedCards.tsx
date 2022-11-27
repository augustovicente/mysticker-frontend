import { useState } from "react";
import { RevealedStickersContainer } from "./styles";

type RevealedCardsProps = {
    revealedCards: number[];
}

export const RevealedCards = ({revealedCards}:RevealedCardsProps) =>
{
    const [focusedCard, setFocusedCard] = useState<number>(0);

    const prev = () =>
    {
        if (focusedCard > 0)
        {
            setFocusedCard(focusedCard - 1);
        }
    }

    const next = () =>
    {
        if (focusedCard < revealedCards.length - 1)
        {
            setFocusedCard(focusedCard + 1);
        }
    }

    return <RevealedStickersContainer>
        <div className="revealed-cards">
            {revealedCards.map((card, index) => (
                <div 
                    className={'revealed-card '+((index == focusedCard)?'focused':'')}
                    key={'revealed-card-'+index}
                    style={{
                        marginLeft: (index == focusedCard)
                            ? (index == revealedCards.length - 1)
                                ? '-5rem'
                                :'6rem'
                            : (index < focusedCard)
                                ?'-6rem'
                                :'2rem',
                    }}
                >
                    <img src={`/copa_pruu/${card}.png`} alt="" />
                </div>
            ))}
        </div>
        <div className="footer-btns">
            <div className="arrows-container">
                <button
                    className="prev-sticker"
                    onClick={prev}
                >
                    <img src="/assets/img/icons/arrow-left-white.svg" alt="" />
                </button>
                <div className="divisor"></div>
                <button
                    className="next-sticker"
                    onClick={next}
                >
                    <img src="/assets/img/icons/arrow-right-white.svg" alt="" />
                </button>
            </div>
            <div className="action-buttons">
                <button>
                    <img src="/assets/img/icons/package-white.svg" alt="" />
                    <span>Abrir + Pacotinho</span>
                </button>
                <button>
                    <img src="/assets/img/icons/album-icon.svg" alt="" />
                    <span>Ir para o album</span>
                </button>
                <button>
                    <img src="/assets/img/icons/market-icon.svg" alt="" />
                    <span>Comprar + Pacotinho</span>
                </button>
            </div>
        </div>
    </RevealedStickersContainer>
}