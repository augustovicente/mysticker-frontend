import { useToggle } from "hooks/useToggle";
import { ReactNode, useCallback, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { Skeletons } from "./components/Skeletons";
import { StickerPackage } from "./components/StickerPackage";
import { stickersMock } from "./stickersMock";
import {
    MarketplaceContainer, StickersPackageContainer,
} from "./styles"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import VectorLeft from "../../assets/imgs/vector-left.png";
import VectorRight from "../../assets/imgs/vector-right.png";


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
                        {stickersMock.map(({ stars, title, type }, index) => (
                            <StickerPackage
                                key={index}
                                id={index}
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
                        // showArrows={false}
                        selectedItem={currentStep}
                        // renderArrowNext={()=>{
                        //     return (<div
                        //         onClick={() => setCurrentStep(currentStep-1)} 
                        //         style={{
                        //             backgroundColor: '#fff',
                        //             position: 'absolute',
                        //             margin: 'auto'
                        //         }}
                        //     >
                        //         <img src={VectorRight} />
                        //     </div>)
                        // }}
                    >
                        {stickersMock.map(({ stars, title, type }, index) => (
                            <StickerPackage
                                key={index}
                                id={index}
                                stars={stars}
                                title={title}
                                type={type}
                                stickerStatsModalIsOpen={stickerStatsModalIsOpen}
                                handleActionStickerModal={handleActionStickerModal}
                            />
                        ))}
                    </Carousel>
                    {/* <div className="custom-controls">
                        <div onClick={() => setCurrentStep(currentStep-1)}>
                            <img src={VectorLeft} />
                        </div>
                        <div onClick={() => setCurrentStep(currentStep+1)}>
                            <img src={VectorRight} />
                        </div>
                    </div> */}
                </>
            )}
        </MarketplaceContainer>
    )
}
