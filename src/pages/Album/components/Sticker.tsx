import { Col, Row } from "antd"
import { paste_stickers } from "models/User"
import { useCallback, useState } from "react"
import { Link } from "react-router-dom"
import { AlbumModal, StikerContainer } from "../styles"

type StickerProps = {
    stickerId: number
    rarity: number
    name: string
    quantity: number;
}

const pastedStickers: number[] = []

export const Sticker = ({ stickerId, name, rarity, quantity }: StickerProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [playerSelected, setPlayerSelected] = useState(stickerId)

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
        }
    }, [playerSelected])

    const handlePreviewPlayer = useCallback(() => {
        setPlayerSelected(playerSelected + 1)
    }, [playerSelected])

    return (
        <>
            <Col xxl={6} xl={5} md={4} sm={5}>
                <StikerContainer
                    className="sticker"
                    onClick={showModal}
                    pasted={pastedStickers.includes(stickerId)}
                >
                    {quantity >= 1 ? (
                        <>
                            <img className="player-img" src={`/copa_pruu/${stickerId}.png`} alt={name} />
                            <img className="player-tier" src={`/assets/img/icons/tier-${rarity}-icon.svg`} />
                            <img className="player-base-tier" src={`/assets/img/icons/tier-base-${rarity}-icon.svg`} />
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
                    {quantity >= 1 ? (
                        <>
                            <img className="player-img" src={`/copa_pruu/${playerSelected}.png`} alt={name} />
                            <img className="player-tier" src={`/assets/img/icons/tier-${rarity}-icon.svg`} />
                            <img className="player-base-tier" src={`/assets/img/icons/tier-base-${rarity}-icon.svg`} />
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
