import { useToggle } from "hooks/useToggle";
import { useCallback, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { Skeletons } from "./components/Skeletons";
import { StickerPackage } from "./components/StickerPackage";
import { stickersMock } from "./stickersMock";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MarketplaceContainer } from "./styles"
import { ReactComponent as HomeIcon } from '../../assets/imgs/home.svg';
import { useAuth } from "contexts/auth.context";
import axios from "axios";
import { WalletErrorModal } from "pages/Album/components/Skeletons/styles";
import { ReactComponent as LoginIcon } from 'assets/imgs/user.svg';
import { connect_wallet } from "models/User";
import { ReactComponent as WalletIcon } from 'assets/imgs/wallet-white.svg';
import { checkWallet } from "services/web3";
import { useMetamaskChanged } from "hooks/useMetamaskChanged";

export const Marketplace = () => {
    const { user, getUser } = useAuth()

    const [exchangeRate, setExchangeRate] = useState<number>(0)
    const [stickerStatsModalIsOpen, setStickerStatsModalIsOpen] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useToggle()
    const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);

    const handleActionStickerModal = (id: string) => {
        if (!stickerStatsModalIsOpen.includes(id)) {
            setStickerStatsModalIsOpen([...stickerStatsModalIsOpen, id])
        } else {
            setStickerStatsModalIsOpen(stickerStatsModalIsOpen.filter((item: string) => item !== id))
        }
    }

    useEffect(() => {
        axios.get('https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=BRL')
            .then(({ data }) => {
                setExchangeRate(data.BRL);
            });

        if (!user) {
            setIsModalErrorOpen(true);
        }
    }, []);

    const checkStatusWallet = useCallback(async () => {
        const status = await checkWallet();

        if (status === 'connected') {
            setIsModalErrorOpen(false);
        } else {
            setIsModalErrorOpen(true);
        }
    }, [])

    useMetamaskChanged(checkStatusWallet);

    useEffect(() => {
        setIsLoading(true);

        (async () => {
            if (!user) {
                return setIsModalErrorOpen(true)
            }

            checkStatusWallet();
        })();
    }, [])

    return (
        <MarketplaceContainer>
            {isLoading ? (
                <Skeletons />
            ) : (
                <>
                    <div className="marketplace-title">
                        <img src="/assets/img/icons/market-icon.svg" />
                        <h1 className="title-text">
                            Loja de Figurinhas
                        </h1>

                        {user && (
                            <Link to='/my-packages' className="btn-home">
                                <HomeIcon />
                                <span>
                                    Meus Pacotinhos
                                </span>
                            </Link>
                        )}
                    </div>

                    <ul className="stickers-package-list">
                        {stickersMock.map((props, index) => (
                            <StickerPackage
                                exchangeRate={exchangeRate}
                                probabilities={props.probabilities}
                                key={"StickerPackage" + index}
                                id={props.id}
                                stars={props.stars}
                                title={props.title}
                                type={props.type}
                                price={props.price}
                                stickerStatsModalIsOpen={stickerStatsModalIsOpen}
                                handleActionStickerModal={handleActionStickerModal}
                            />
                        ))}
                    </ul>
                    <Carousel
                        showStatus={false}
                        selectedItem={0}
                    >
                        {stickersMock.map((props, index) => (
                            <StickerPackage
                                exchangeRate={exchangeRate}
                                probabilities={props.probabilities}
                                key={"StickerPackage" + index}
                                id={props.id}
                                stars={props.stars}
                                title={props.title}
                                type={props.type}
                                price={props.price}
                                stickerStatsModalIsOpen={stickerStatsModalIsOpen}
                                handleActionStickerModal={handleActionStickerModal}
                            />
                        ))}
                    </Carousel>
                </>
            )}

            <WalletErrorModal open={isModalErrorOpen}>
                {!user ? (
                    <>
                        <h1 className="mb-4">Faça Login para acessar a loja!</h1>
                        <Link to="/login">
                            <LoginIcon className="login" width={26} height={26} />
                            Ir para o login
                        </Link>
                    </>
                ) : (
                    <>
                        <h1 className="mb-4">Carteira desconectada!</h1>
                        <button
                            className="wallet"
                            onClick={() => {
                                connect_wallet()
                                    .then(() => {
                                        setIsModalErrorOpen(false);
                                        getUser()
                                    })
                            }}
                        >
                            Conectar carteira
                            <WalletIcon className="wallet" width={26} height={26} />
                        </button>

                        <span onClick={() => {
                            window.open("https://metamask.io", "_blank")
                        }} className="create-wallet">
                            Criar carteira
                        </span>
                    </>
                )}
            </WalletErrorModal>

        </MarketplaceContainer>
    )
}
