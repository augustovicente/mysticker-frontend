import { useState } from "react";
import { Link } from "react-router-dom";
import { RevealedStickersContainer } from "./styles";

type RevealedCardsProps = {
    revealedCards: number[];
    openMoreCards: () => void;
}

export const RevealedCards = ({revealedCards, openMoreCards}:RevealedCardsProps) =>
{
    const [focusedCard, setFocusedCard] = useState<number>(1);

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
            <div
                className="cards-scroll"
                style={{
                    transform: `translateX(-${focusedCard*10.5}rem)`
                }}
            >
                {revealedCards.map((card, index) => (
                    <div
                        className={'revealed-card '+((index == focusedCard)?'focused':'')}
                        key={'revealed-card-'+index}
                        onClick={() => setFocusedCard(index)}
                    >
                        <img src={`/copa_pruu/${card}.png`} alt="" />
                    </div>
                ))}
            </div>
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
                <button onClick={openMoreCards}>
                    <img src="/assets/img/icons/package-white.svg" alt="" />
                    <span>Abrir + Pacotinho</span>
                </button>
                <Link to={'/album'}>
                    <img src="/assets/img/icons/album-icon.svg" alt="" />
                    <span>Ir para o album</span>
                </Link>
                <Link to={'/marketplace'}>
                    <img src="/assets/img/icons/market-icon.svg" alt="" />
                    <span>Comprar + Pacotinho</span>
                </Link>
            </div>
        </div>
    </RevealedStickersContainer>
}
