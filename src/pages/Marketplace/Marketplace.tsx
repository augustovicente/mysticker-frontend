import { useToggle } from "hooks/useToggle";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { Skeletons } from "./components/Skeletons";
import { StickerPackage } from "./components/StickerPackage";
import { stickersMock } from "./stickersMock";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MarketplaceContainer, StickersPackageContainer } from "./styles"
import { ReactComponent as HomeIcon } from '../../assets/imgs/home.svg';
import { useAuth } from "contexts/auth.context";

export const Marketplace = () => {
    const { user } = useAuth()

    const [currentStep, setCurrentStep] = useState<number>(0)
    const [stickerStatsModalIsOpen, setStickerStatsModalIsOpen] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useToggle()

    const handleActionStickerModal = (id: string) => {
        if (!stickerStatsModalIsOpen.includes(id)) {
            setStickerStatsModalIsOpen([...stickerStatsModalIsOpen, id])
        } else {
            setStickerStatsModalIsOpen(stickerStatsModalIsOpen.filter((item: string) => item !== id))
        }
    }

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
                        {stickersMock.map(({ stars, title, type, id }, index) => (
                            <StickerPackage
                                key={index}
                                id={id}
                                stars={stars}
                                title={title}
                                type={type}
                                stickerStatsModalIsOpen={stickerStatsModalIsOpen}
                                handleActionStickerModal={handleActionStickerModal}
                            />
                        ))}
                    </ul>
                    <Carousel
                        showStatus={false}
                        selectedItem={currentStep}
                    >
                        {stickersMock.map(({ stars, title, type, id }, index) => (
                            <StickerPackage
                                key={index}
                                id={id}
                                stars={stars}
                                title={title}
                                type={type}
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
