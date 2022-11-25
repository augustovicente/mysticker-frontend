import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AlbumModal } from "../styles";

type StickerProps = {
    stickerId: number;
    rarity: number;
    name: string;
}

export const Sticker = ({ stickerId, name, rarity }: StickerProps) => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [playerSelected, setPlayerSelected] = useState(stickerId)

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleNextPlayer = useCallback(() => {
        if (playerSelected < 12) {
            setPlayerSelected(playerSelected + 1);
        }
    }, [playerSelected])

    const handlePreviewPlayer = useCallback(() => {
        if (playerSelected > 1) {
            setPlayerSelected(playerSelected - 1);
        }
    }, [playerSelected])

    return (
        <>
            <div
                className="sticker"
                onClick={showModal}
            >

                <img className="player-img" src={`/copa_pruu/${stickerId}.png`} alt={name} />
                <img className="player-tier" src={`/assets/img/icons/tier-${rarity}-icon.svg`} />
                <img className="player-base-tier" src={`/assets/img/icons/tier-base-${rarity}-icon.svg`} />

                {/* {currentPlayer[stickerId - 1] ? (
                    <>
                        <img className="player-img" src="/assets/img/icons/team-players/player.svg" />
                        <img className="player-tier" src="/assets/img/icons/tier-gold-icon.svg" />
                        <img className="player-base-tier" src="/assets/img/icons/tier-base-gold-icon.svg" />
                    </>
                ) : (
                    <>
                        <span>{`#0${stickerId}`}</span>
                        <img className="add-icon" src="/assets/img/icons/add-icon.svg" />
                        <img src="/assets/img/icons/paste-sticker-action-icon.svg" />
                    </>
                )} */}

            </div>

            <AlbumModal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div
                    className="sticker"
                >

                    <img className="player-img" src={`/copa_pruu/${stickerId}.png`} alt={name} />
                    <img className="player-tier" src={`/assets/img/icons/tier-${rarity}-icon.svg`} />
                    <img className="player-base-tier" src={`/assets/img/icons/tier-base-${rarity}-icon.svg`} />
                    {/* {currentPlayer[playerSelected - 1] ? (
                        <>
                            <img className="player-img" src="/assets/img/icons/team-players/player.svg" />
                            <img className="player-tier" src="/assets/img/icons/tier-gold-icon.svg" />
                            <img className="player-base-tier" src="/assets/img/icons/tier-base-gold-icon.svg" />
                        </>
                    ) : (
                        <>
                            <span>{`#0${playerSelected}`}</span>
                            <img className="add-icon" src="/assets/img/icons/add-icon.svg" />
                            <img src="/assets/img/icons/paste-sticker-action-icon.svg" />
                        </>
                    )} */}
                </div>

                <div className="rarity-number">
                    <div className="rarity">
                        Raridade
                        <span>ouro</span>
                    </div>

                    <span>{`#0${playerSelected}`}</span>
                </div>

                <div className="next-preview-sticker">
                    <span className="next-preview-line" />
                    <div className="next-preview">
                        <button
                            onClick={handlePreviewPlayer}
                        >
                            <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.6875 14.1L3.5 8.65623L7.6875 3.21248" stroke="white" stroke-width="5" stroke-linecap="round" />
                            </svg>
                        </button>

                        <button
                            onClick={handleNextPlayer}
                        >
                            <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.9873 14.1L7.1748 8.65623L2.9873 3.21248" stroke="white" stroke-width="5" stroke-linecap="round" />
                            </svg>

                        </button>
                    </div>
                </div>

                <div className="paste-sell-buy-container">
                    <button className="paste-sell-buy-btn">
                        <img src="/assets/img/icons/paste-burn-green-icon.svg" />

                        <p>Colar</p>

                        <span />
                    </button>
                    <button className="paste-sell-buy-btn" disabled={true}>
                        <img src="/assets/img/icons/sell-green-icon.svg" />

                        <p>vender</p>

                        <span>
                            <img src="/src/assets/imgs/lock.svg" />
                        </span>
                    </button>
                    <Link className="paste-sell-buy-btn" to="/marketplace">
                        <img src="/assets/img/icons/cart-buy-green-icon.svg" />

                        <p>comprar</p>

                        <span />
                    </Link>
                </div>
            </AlbumModal>
        </>

    )
}
