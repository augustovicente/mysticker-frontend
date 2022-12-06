import { buy_package } from "models/User";
import { useCallback, useState } from "react";
import { StickersPackageContainer, StickersSeparator } from "../styles"
import LockIcon from "assets/imgs/lock.svg"
import { useAuth } from "contexts/auth.context";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

type StickerPackageProps = {
    stars: string;
    type: string;
    title: {
        main: string;
        secondary: string;
    };
    probabilities: {
        bronze: number;
        silver: number;
        gold: number;
    };
    price: number;
    id: number;
    handleActionStickerModal: (id: string) => void;
    stickerStatsModalIsOpen: string[];
    exchangeRate: number;
}

export const StickerPackage = ({
    probabilities,
    stars,
    type,
    title,
    id,
    price,
    exchangeRate,
    handleActionStickerModal,
    stickerStatsModalIsOpen
}: StickerPackageProps) =>
{
    const [count, setCount] = useState(1)
    const { user } = useAuth()
    const navigate = useNavigate();

    // example buy
    const handleBuy = async (package_type:number) =>
    {
        if (!user) navigate('/login');

        if(count > 0)
        {
            if(user)
            {
                let price:number = 0;
                switch (package_type)
                {
                    case 1:
                        price = 1;
                        // price = 0.001;
                        break;
                    case 2:
                        price = 5;
                        // price = 0.005;
                        break;
                    case 3:
                        price = 10;
                        // price = 0.01;
                        break;
                }

                setCount(0);

                try
                {
                    await buy_package(
                        package_type,
                        count,
                        (price * count)
                    );
                    toast.success("Compra realizada com sucesso! Você pode abrir seus pacotes na aba Meus Pacotes.");
                }
                catch (error)
                {
                    toast.error(`Erro ao comprar pacote!`);
                }
            }
            else
            {
                return toast.error("Necessário estar logado para comprar um pacote.");
            }
        }
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
                    className="sticker-stats-btn"
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
                                <span>Probabilidades</span>
                                <span>Pacotinho {title.secondary}</span>
                            </p>
                        </div>
                        <StickersSeparator margin=".5rem 0 .75rem 0" />
                        <ul>
                            <li>
                                <img src="/assets/img/icons/gold-sticker-icon.svg" alt="" />
                                <p>Figurinhas Ouro</p>
                                <span>{100*probabilities.gold}%</span>
                            </li>
                            <StickersSeparator margin=".25rem 0" />

                            <li>
                                <img src="/assets/img/icons/silver-sticker-icon.svg" alt="" />
                                <p>Figurinhas Prata</p>
                                <span>{100*probabilities.silver}%</span>
                            </li>
                            <StickersSeparator margin=".25rem 0" />

                            <li>
                                <img src="/assets/img/icons/bronze-sticker-icon.svg" alt="" />
                                <p>Figurinhas Bronze</p>
                                <span>{100*probabilities.bronze}%</span>
                            </li>
                        </ul>
                    </div>
                )}
                <div className="payment-quantity">
                    <div className="payment">
                        <h3>Pacotinho</h3>
                        <p>3 figurinhas</p>
                        <button
                            onClick={() => handleBuy(id)}
                        >
                            Comprar
                        </button>
                    </div>
                    <div className="quantity">
                        <h4>{price.toString().replace('.',',')} MATIC</h4>
                        <p>
                            {((+exchangeRate) * (+price) * count).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </p>

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
                    <img className="lock" src={LockIcon} alt="" />
                    <img src="/assets/img/icons/pix-icon.svg" alt="" />
                </div>
            </div>
        </StickersPackageContainer>
    )
}
