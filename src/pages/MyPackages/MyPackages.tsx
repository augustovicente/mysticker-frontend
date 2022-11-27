import { stickersMock } from "pages/Marketplace/stickersMock"
import { useCallback, useEffect, useRef, useState } from "react"
import { MyPackagesContainer, PackageContainer, StickersPackageContainer } from "./styles"
import { CarouselRef } from "antd/es/carousel"
import { useToggle } from "hooks/useToggle"
import { Link } from "react-router-dom"
import { getPackages, open_package } from "models/User"
import { Skeletons } from "./components/Skeletons"
import { toast } from "react-toastify"
import { RevealedCards } from "./components/RevealedCards"

type MyPackagesProps = {
    esmerald: number;
    obsidian: number;
    diamond: number;
}

export const MyPackages = () => {
    const [count, setCount] = useState(0)
    const carousel = useRef<CarouselRef>(null)
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [availablePackages, setAvailablePackages] = useState<MyPackagesProps>()
    const [isLoading, setIsLoading] = useToggle(false);
    const [isRevealing, setIsRevealing] = useToggle(false);
    const [isRevealed, setIsRevealed] = useToggle(false);
    const [revealingGif, setRevealingGif] = useState<string>();
    const [revealedCards, setRevealedCards] = useState<number[]>([]);

    const onSubmitReveal = async (numberType: number) =>
    {
        if(count > 0)
        {
            setIsLoading(true)
            const amount_available = numberType == 3
                ? availablePackages?.diamond
                : numberType == 2
                    ? availablePackages?.obsidian
                    : availablePackages?.esmerald;
    
            if (amount_available && count > amount_available)
            {
                setIsLoading(false)
                return toast.error("Você não possui pacotes suficientes para revelar");
            }
            else
            {
                try {
                    const response:any = await open_package(numberType, count);
                    setIsLoading(false)
                    setRevealedCards(response.stickers_drawed.map((card:any) => card.sticker_id));
                    showGif(numberType, 1)
                }
                catch (error)
                {
                    setIsLoading(false)
                    toast.error("Ocorreu um erro ao revelar os pacotes");
                    console.error(error);
                }
                update_packages();
            }
        }
    }

    const showGif = (package_type: number, package_amount: number) =>
    {
        setIsRevealing(true);
        switch (package_type)
        {
            case 1:
                if(package_amount > 1)
                {
                    setRevealingGif('/assets/img/gifs/esmerald-multiple-package.gif');
                }
                else
                {
                    setRevealingGif('/assets/img/gifs/esmerald-single-packages.gif');
                }
                break;
            case 2:
                if(package_amount > 1)
                {
                    setRevealingGif('/assets/img/gifs/obsidian-multiple-package.gif');
                }
                else
                {
                    setRevealingGif('/assets/img/gifs/obsidian-single-packages.gif');
                }
                break;
            case 3:
                if(package_amount > 1)
                {
                    setRevealingGif('/assets/img/gifs/diamond-multiple-package.gif');
                }
                else
                {
                    setRevealingGif('/assets/img/gifs/diamond-single-packages.gif');
                }
                break;
        }
        setTimeout(() => {
            setIsRevealing(false);
            setIsRevealed(true);
        }, 3000);
    }

    const handleDecrement = useCallback(() => {
        if (count > 0) {
            setCount(count - 1);
        }
    }, [count]);

    const handleIncrement = useCallback(() =>
    {
        if(count < 5)
        {
            setCount(count + 1);
        }
    }, [count]);

    const next = useCallback(() => {
        if (selectedIndex < stickersMock.length - 1) {
            setSelectedIndex(selectedIndex + 1)
        }
    }, [selectedIndex])

    const prev = useCallback(() => {
        if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1)
        }
    }, [selectedIndex])

    const update_packages = async () =>
    {
        getPackages().then((response:any) => {
            setAvailablePackages({
                esmerald: response[0],
                obsidian: response[1],
                diamond: response[2]
            });
        });
    }

    useEffect(() => {
        update_packages();
        setRevealingGif('/assets/gif/diamond-single-package.gif')
    }, [])

    return (
        <MyPackagesContainer>
            {isLoading ? (
                <Skeletons />
            ) : (
                <>
                    <h1 className="my-package-title">
                        <img src="/assets/img/icons/album-icon.svg" alt="" />
                        Álbum
                    </h1>
                    {!isRevealing && !isRevealed &&
                        (<ul className="desktop-cards">
                            {stickersMock.map(({ stars, title, type, id, numberType }, index) => selectedIndex === (id-1) ? (
                                <StickersPackageContainer key={id}>
                                    <div className="stars-package-container">
                                        <div className="stars-container">
                                            <img src={stars} alt="" />
                                        </div>
                                        <div className="package-container">
                                            <button
                                                className="prev-package"
                                                onClick={prev}
                                            >
                                                <img src="/assets/img/icons/arrow-left-black.svg" alt="" />
                                            </button>
                                            <img src={type} alt="" />
                                            <button
                                                className="next-package"
                                                onClick={next}
                                            >
                                                <img src="/assets/img/icons/arrow-right-black.svg" alt="" />
                                            </button>
                                        </div>

                                        <div className="available-packages">
                                            <span>
                                                {id == 3
                                                    ? availablePackages?.diamond
                                                    : id == 2
                                                        ? availablePackages?.obsidian
                                                        : availablePackages?.esmerald
                                                }
                                            </span>
                                            <p>
                                                pacotinhos <br />
                                                disponiveis
                                            </p>
                                        </div>
                                    </div>

                                    <div className="quantity-counter-container">
                                        <button
                                            className="min-max-btn"
                                        >
                                            min.
                                        </button>
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
                                                max={id == 3
                                                    ? availablePackages?.diamond
                                                    : id == 2
                                                        ? availablePackages?.obsidian
                                                        : availablePackages?.esmerald
                                                }
                                            />
                                            <button
                                                className="counter-increment"
                                                type="button"
                                                onClick={handleIncrement}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            className="min-max-btn"
                                        >
                                            max.
                                        </button>
                                    </div>

                                    <div className="reveal-stickers-container">
                                        <button
                                            className="reveal-btn"
                                            onClick={() => onSubmitReveal(numberType)}
                                        >
                                            Revelar figurinhas
                                        </button>

                                        <Link
                                            className="buy-more-btn"
                                            to="/marketplace"
                                        >
                                            <img src="/assets/img/icons/market-icon.svg" alt="" />

                                            <p>Comprar + Pacotinhos</p>
                                        </Link>

                                        <div className="buy-with-pix">
                                            <img src="/assets/img/icons/pix-icon.svg" alt="" />

                                            <p>Compre por PIX</p>
                                        </div>
                                    </div>
                                </StickersPackageContainer>
                            ) : (
                                <PackageContainer
                                    key={id}
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.2 }}
                                    onClick={() => setSelectedIndex(id - 1)}
                                >
                                    <img src={type} alt="" />
                                </PackageContainer>
                            ))}
                        </ul>)
                    }
                    {isRevealed && 
                        (<div className="revealed-container">
                            <RevealedCards
                                openMoreCards={() => setIsRevealing(false)}
                                revealedCards={revealedCards}
                            />
                        </div>)
                    }
                    {isRevealing &&
                        (<div className="revealing-container">
                            <img src={revealingGif} alt="" />
                        </div>)
                    }
                </>
            )}
        </MyPackagesContainer>
    )
}
