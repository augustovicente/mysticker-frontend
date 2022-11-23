import BaseTemplate from "Components/BaseTemplate";
import { useToggle } from "hooks/useToggle";
import { ReactNode, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Skeletons } from "./components/Skeletons";
import { StickerPackage } from "./components/StickerPackage";
import { stickersMock } from "./stickersMock";
import {
    MarketplaceContainer, StickersPackageContainer,
} from "./styles"
import { ReactComponent as HomeIcon } from '../../assets/imgs/home.svg';
import { useAuth } from "contexts/auth.context";

export const Marketplace = () => {
    const { user } = useAuth()

    const [isLoading, setIsLoading] = useToggle()
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
                    <h1 className="marketplace-title">
                        <div>
                            <img src="/assets/img/icons/market-icon.svg" />
                            Loja de Figurinhas
                        </div>

                        <Link to='/my-packages' className="btn-home">
                            <HomeIcon />
                            <span>
                                Voltar para o início
                            </span>
                        </Link>
                    </h1>

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
                </>
            )}
        </MarketplaceContainer>
    )
}
