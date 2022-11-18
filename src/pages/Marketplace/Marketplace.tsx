import BaseTemplate from "Components/BaseTemplate";
import { useToggle } from "hooks/useToggle";
import { ReactNode, useCallback, useState } from "react";
import { Skeletons } from "./components/Skeletons";
import { StickerPackage } from "./components/StickerPackage";
import {
    MarketplaceContainer, StickersPackageContainer,
} from "./styles"

const stickersMock = [
    {
        stars: "/assets/img/others/one-star.png",
        type: "/assets/img/others/esmerald.png",
        title: {
            main: "Pacotinho",
            secondary: "Esmeralda"
        }
    },
    {
        stars: "/assets/img/others/two-star.png",
        type: "/assets/img/others/obisidian.png",
        title: {
            main: "Pacotinho",
            secondary: "Obsidiana"
        }
    },
    {
        stars: "/assets/img/others/thre-star.png",
        type: "/assets/img/others/esmerald.png",
        title: {
            main: "Pacotinho",
            secondary: "Diamante"
        }
    },
]

export const Marketplace = () => {
    // const [isLoading, setIsLoading] = useToggle()
    const isLoading = false
    const [stickerStatsModalIsOpen, setStickerStatsModalIsOpen] = useState<string[]>([]);

    const handleActionStickerModal = (id: string) => {
        if(!stickerStatsModalIsOpen.includes(id)) {
            setStickerStatsModalIsOpen([...stickerStatsModalIsOpen, id])
        } else {
            setStickerStatsModalIsOpen(stickerStatsModalIsOpen.filter((item: string) => item !== id))
        }
    }

    return (
        <BaseTemplate footer={false}>
            <MarketplaceContainer>
                {isLoading ? (
                    <Skeletons />
                ) : (
                    <>
                        <h1>
                            <img src="/assets/img/icons/market-icon.svg" />
                            Loja de Figurinhas
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
        </BaseTemplate>
    )
}
