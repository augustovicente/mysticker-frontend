import { Col, Row } from "antd"
import { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AlbumModal, StikerContainer } from "../styles"
import LockIcon from "assets/imgs/lock.svg"

type StickerProps = {
    stickerId: number
    rarity: number
    name: string
    ownedStickers: string[];
    index: number;
}

const pastedStickers: number[] = []

export const Sticker = ({ stickerId, name, rarity, ownedStickers, index }: StickerProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [playerSelected, setPlayerSelected] = useState(stickerId)
    const [currentIndex, setCurrentIndex] = useState(index)

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const handleNextPlayer = useCallback(() => {
        if (playerSelected > 1) {
            setPlayerSelected(playerSelected - 1)
            setCurrentIndex(currentIndex + 1)
        }
    }, [playerSelected])

    const handlePreviewPlayer = useCallback(() => {
        setPlayerSelected(playerSelected + 1)
        setCurrentIndex(currentIndex - 1)
    }, [playerSelected])

    return (
        <>
            <Col xxl={6} xl={5} md={4} sm={5}>
                <StikerContainer
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                    className="sticker"
                    onClick={showModal}
                    pasted={pastedStickers.includes(stickerId)}
                >
                    {parseInt(ownedStickers[index]) >= 1 ? (
                        <>
                            {/* <img className={`player-img`} src={`/copa_pruu/${stickerId}.png`} alt={name} /> */}
                            <img
                                className={`player-img`}
                                src={`https://dffla95hrvs5u.cloudfront.net/${stickerId}.png`}
                                alt={name}
                                onError={(e) => {
                                    e.currentTarget.src = `/copa_pruu/${stickerId}.png`
                                }}
                            />

                            <img className="player-tier" src={`/assets/img/icons/tier-${rarity}-icon.svg`} />
                            <img className="player-base-tier" src={`/assets/img/icons/tier-base-${rarity}-icon.svg`} />
                            {parseInt(ownedStickers[index]) >= 2 && (
                                <div className={`extra-stickers ${parseInt(ownedStickers[index]) - 1 > 9 && "two"}`}>
                                    <h1>{parseInt(ownedStickers[index]) - 1}</h1>
                                    <img src={`/assets/img/icons/extra-stickers-icon.svg`} />
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <span>{`#0${stickerId}`}</span>
                            <img className="add-icon" src="/assets/img/icons/add-icon.svg" />
                            <img src="/assets/img/icons/paste-sticker-action-icon.svg" />
                        </>
                    )}

                </StikerContainer>
            </Col>

            <AlbumModal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <button className="modal-close" onClick={handleOk}>
                    <span>
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 1.50159L2 6.20677M2 6.20677L6.5 10.912M2 6.20677H12.5" stroke="white" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </span>

                    <p>
                        Voltar

                    </p>
                </button>
                <div
                    className="sticker"
                >
                    {parseInt(ownedStickers[currentIndex]) >= 1 ? (
                        <>
                            {/* <img className="player-img" src={`/copa_pruu/${playerSelected}.png`} alt={name} /> */}
                            <img
                                className={`player-img`}
                                src={`https://dffla95hrvs5u.cloudfront.net/${playerSelected}.png`}
                                alt={name}
                                onError={(e) => {
                                    e.currentTarget.src = `/copa_pruu/${playerSelected}.png`
                                }}
                            />

                            <img className="player-tier" src={`/assets/img/icons/tier-${rarity}-icon.svg`} />
                            <img className="player-base-tier" src={`/assets/img/icons/tier-base-${rarity}-icon.svg`} />
                            {parseInt(ownedStickers[index]) >= 2 && (
                                <div className={`extra-stickers ${parseInt(ownedStickers[index]) - 1 > 9 && "two"}`}>
                                    <h1>{parseInt(ownedStickers[index]) - 1}</h1>
                                    <img src={`/assets/img/icons/extra-stickers-icon.svg`} />
                                </div>
                            )}
                        </>
                    ) : (

                        <>
                            <span>{`#0${playerSelected}`}</span>
                            <img className="add-icon" src="/assets/img/icons/add-icon.svg" />
                            <img src="/assets/img/icons/paste-sticker-action-icon.svg" />
                        </>
                    )}
                </div>

                <div className="rarity-number">
                    <div className="rarity">
                        Raridade
                        <span>
                            {
                                rarity === 3 && "BRONZE" ||
                                rarity === 2 && "PRATA" ||
                                rarity === 1 && "OURO"
                            }
                        </span>
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
                    <button className="paste-sell-buy-btn" disabled={true}>
                        <img src="/assets/img/icons/sell-green-icon.svg" />

                        <p>vender</p>

                        <span>
                            <img src={LockIcon}/>
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
