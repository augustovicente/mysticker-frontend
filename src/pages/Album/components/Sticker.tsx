import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AlbumModal } from "../styles";

type StickerProps = {
    stickerId: number;
    teamsGroupSelected: string;
    team: {
        icon: string;
        name: string;
        players: ({
            id: number;
            name: string;
            img: string;
            tier: string;
        } | {
            id: number;
            name: string;
            img?: undefined;
            tier?: undefined;
        })[];
    }
}

const userOwnedStickers = [
    {
        teamsGroupName: "north-america",
        teams: [
            {
                name: "Canadá",
                players: [
                    {
                        id: 1,
                    },
                    {
                        id: 2,
                    },
                ]
            }
        ]
    }
]

export const Sticker = ({ stickerId, team, teamsGroupSelected }: StickerProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [playerSelected, setPlayerSelected] = useState(stickerId)

    const currentPlayer = useMemo(() => {
        const ownedGrouop: any = userOwnedStickers.map(group => group.teamsGroupName === teamsGroupSelected && group);
        const ownedTeam: any = ownedGrouop[0].teams.map((ownedTeam: any) => ownedTeam.name === team.name && ownedTeam)
        const players = ownedTeam[0].players
        return players.map((player: any) => player.id === stickerId)
    }, [teamsGroupSelected, userOwnedStickers, stickerId])

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

                {currentPlayer[stickerId - 1] ? (
                    <>
                        <img className="player-img" src="/assets/img/icons/team-players/player.svg" alt="" />
                        <img className="player-tier" src="/assets/img/icons/tier-gold-icon.svg" alt="" />
                        <img className="player-base-tier" src="/assets/img/icons/tier-base-gold-icon.svg" alt="" />
                    </>
                ) : (
                    <>
                        <span>{`#0${playerSelected}`}</span>
                        <img className="add-icon" src="/assets/img/icons/add-icon.svg" alt="" />
                        <img src="/assets/img/icons/paste-sticker-action-icon.svg" alt="" />
                    </>
                )}

            </div>

            <AlbumModal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div
                    className="sticker"
                >
                    {currentPlayer[playerSelected - 1] ? (
                        <>
                            <img className="player-img" src="/assets/img/icons/team-players/player.svg" alt="" />
                            <img className="player-tier" src="/assets/img/icons/tier-gold-icon.svg" alt="" />
                            <img className="player-base-tier" src="/assets/img/icons/tier-base-gold-icon.svg" alt="" />
                        </>
                    ) : (
                        <>
                            <span>{`#0${playerSelected}`}</span>
                            <img className="add-icon" src="/assets/img/icons/add-icon.svg" alt="" />
                            <img src="/assets/img/icons/paste-sticker-action-icon.svg" alt="" />
                        </>
                    )}
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
                        <img src="/assets/img/icons/paste-burn-green-icon.svg" alt="" />

                        <p>Colar</p>

                        <span />
                    </button>
                    <button className="paste-sell-buy-btn" disabled={true}>
                        <img src="/assets/img/icons/sell-green-icon.svg" alt="" />

                        <p>vender</p>

                        <span>
                            <img src="/src/assets/imgs/lock.svg" alt="" />
                        </span>
                    </button>
                    <Link className="paste-sell-buy-btn" to="/marketplace">
                        <img src="/assets/img/icons/cart-buy-green-icon.svg" alt="" />

                        <p>comprar</p>

                        <span />
                    </Link>
                </div>
            </AlbumModal>
        </>

    )
}
