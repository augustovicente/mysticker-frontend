import { useToggle } from "hooks/useToggle";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { Skeletons } from "./components/Skeletons";
import { StickerPackage } from "./components/StickerPackage";
import { stickersMock } from "./stickersMock";
import { MarketplaceContainer } from "./styles"
import "react-responsive-carousel/lib/styles/carousel.min.css";


export const Marketplace = () => {
    const [isLoading, setIsLoading] = useToggle()
    const [currentStep, setCurrentStep] = useState<number>(0)
    const [stickerStatsModalIsOpen, setStickerStatsModalIsOpen] = useState<string[]>([]);

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

                        <Link to="/my-packages">
                            Meus pacotinhos
                        </Link>
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
