import { Col, Row } from "antd"
import { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AlbumModal, PasteStickerModal, StikerContainer } from "../styles"
import { ReactComponent as LockIcon } from "assets/imgs/lock.svg"
import { ReactComponent as BurnIcon } from "/public/assets/img/icons/paste-burn-green-icon.svg"
import Logo from 'assets/imgs/card-paste.png';

type StickerProps = {
    stickerId: number
    rarity: number
    name: string
    ownedStickers: string[];
    index: number;
}

const pastedStickers: number[] = []

export const PasteSticker = ({ stickerId, name, rarity, ownedStickers, index }: StickerProps) => {
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

    // const handleNextPlayer = useCallback(() => {
    //     if (playerSelected > 1) {
    //         setPlayerSelected(playerSelected - 1)
    //         setCurrentIndex(currentIndex + 1)
    //     }
    // }, [playerSelected])

    // const handlePreviewPlayer = useCallback(() => {
    //     setPlayerSelected(playerSelected + 1)
    //     setCurrentIndex(currentIndex - 1)
    // }, [playerSelected])

    return (
        <>
            <Col xxl={6} xl={5} md={4} sm={5}>
                <StikerContainer
                    // transition={{ duration: 0.3, ease: "easeInOut" }}
                    // whileHover={{ scale: 1.1 }}
                    // whileTap={{ scale: 1 }}
                    className="sticker"
                    onClick={showModal}
                    isLatest={true}
                >
                    <>
                        <img className="background-paste" src={Logo} alt="" />
                        <LockIcon className="lock-icon" />

                        <footer>
                            <button>
                                <BurnIcon width={18} height={18} />
                                Colar figurinhas
                            </button>

                            <h6 className="close-team">FECHE O TIME AQUI</h6>
                        </footer>
                    </>

                </StikerContainer>
            </Col>

            {/* <PasteStickerModal centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <h1>opa</h1>
            </PasteStickerModal> */}
        </>

    )
}
