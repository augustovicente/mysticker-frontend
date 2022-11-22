import { buy_package, open_package, paste_stickers } from "models/User";
import { useCallback, useState } from "react";
import { StickersPackageContainer, StickersSeparator } from "../styles"

type StickerPackageProps = {
    stars: string;
    type: string;
    title: {
        main: string;
        secondary: string;
    };
    id: number;
    handleActionStickerModal: (id: string) => void;
    stickerStatsModalIsOpen: string[];
}

export const StickerPackage = ({ stars, type, title, id, handleActionStickerModal, stickerStatsModalIsOpen }: StickerPackageProps) =>
{
    const [count, setCount] = useState(0)

    // example buy
    const handleBuy = async () => {
        const package_type = 1;
        const amount = 1;
        const price = 0.001;
        
        let result = await buy_package(
            package_type,
            amount,
            (price * amount)
        );
    }

    const handleOpen = async () => {
        await open_package(1);
    }

    const handlePaste = async () => {
        await paste_stickers(4);
    }

    const handleDecrement = useCallback(() => {
        if (count > 0) {
            setCount(count - 1);
        }
    }, [count]);

    const handleIncrement = useCallback(() => {
        if (count < 5) {
            setCount(count + 1);
        }
    }, [count]);

    return (
        <StickersPackageContainer index={id}>
            <div className="stikers-package-main">
                <div className="sticker-star-container">
                    <img src={stars} alt="" />
                </div>
                <div className="sticker-package-container">
                    <img src={type} alt="" />
                </div>
                <div>
                    <h2>
                        {title.main}
                        <span>
                            {title.secondary}
                        </span>
                    </h2>
                </div>
            </div>
            <div className="stikers-package-payment">
                <button
                    className="sticker-stats"
                    onClick={() => handleActionStickerModal(id.toString())}
                >
                    <img src="/assets/img/icons/stats-white-icon.svg" alt="" />
                </button>
                {stickerStatsModalIsOpen.includes(id.toString()) && (
                    <div className="sticker-stats-modal">
                        <button
                            className="sticker-stats-close-modal-btn"
                            onClick={() => handleActionStickerModal(id.toString())}
                        >
                            <img src="/assets/img/icons/close-button-icon.svg" alt="" />
                        </button>
                        <div className="stickers-stats-prob">
                            <img src="/assets/img/icons/stats-blue-icon.svg" alt="" />
                            <p>
                                <span>Problabilidade</span>
                                <span>Pacotinho Esmeralda</span>
                            </p>
                        </div>
                        <StickersSeparator margin=".5rem 0 .75rem 0" />
                        <ul>
                            <li>
                                <img src="/assets/img/icons/gold-sticker-icon.svg" alt="" />
                                <p>Figurinhas Ouros</p>
                                <span>01p</span>
                            </li>
                            <StickersSeparator margin=".25rem 0" />

                            <li>
                                <img src="/assets/img/icons/silver-sticker-icon.svg" alt="" />
                                <p>Figurinhas Ouros</p>
                                <span>01p</span>
                            </li>
                            <StickersSeparator margin=".25rem 0" />

                            <li>
                                <img src="/assets/img/icons/bronze-sticker-icon.svg" alt="" />
                                <p>Figurinhas Ouros</p>
                                <span>01p</span>
                            </li>
                        </ul>
                    </div>
                )}
                <div className="payment-quantity">
                    <div className="payment">
                        <h3>Pacotinho</h3>
                        <p>3 figurinhas</p>
                        <button
                            onClick={handlePaste}
                        >
                            Comprar
                        </button>
                    </div>
                    <div className="quantity">
                        <h4>0,001 ETH</h4>
                        <p>R$ 25,00</p>

                        <div className="quantity-counter">
                            <button
                                className="counter-decrement"
                                type="button"
                                onClick={handleDecrement}
                            >
                                -
                            </button>
                            <input
                                type="number"
                                name="counter"
                                id="counter"
                                value={count}
                            />
                            <button
                                className="counter-increment"
                                type="button"
                                onClick={handleIncrement}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <span>Compre por PIX</span>
                    <img src="/assets/img/icons/pix-icon.svg" alt="" />
                </div>
            </div>
        </StickersPackageContainer>
    )
}
