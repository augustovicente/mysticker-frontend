import { useToggle } from "hooks/useToggle";
import { useEffect, useState } from "react";
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

export const Marketplace = () => {
    const { user } = useAuth()

    const [currentStep, setCurrentStep] = useState<number>(0)
    const [exchangeRate, setExchangeRate] = useState<number>(0)
    const [stickerStatsModalIsOpen, setStickerStatsModalIsOpen] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useToggle()

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
            })
    }, []);

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
                                key={"StickerPackage"+index}
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
                        selectedItem={currentStep}
                    >
                        {stickersMock.map((props, index) => (
                            <StickerPackage
                                exchangeRate={exchangeRate}
                                probabilities={props.probabilities}
                                key={"StickerPackage"+index}
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
        </MarketplaceContainer>
    )
}
