import { stickersMock } from "pages/Marketplace/stickersMock"
import { useCallback, useEffect, useMemo, useState } from "react"
import { MyPackagesContainer, PackageContainer, StickersPackageContainer } from "./styles"
import { Link } from "react-router-dom"
import { getPackages, open_package } from "models/User"
import { Skeletons } from "./components/Skeletons"
import { toast } from "react-toastify"
import { RevealedCards } from "./components/RevealedCards"
import { GradientOverlay } from "Components/GradientOverlay"
import { Carousel } from "react-responsive-carousel"

type MyPackagesProps = {
    esmerald: number;
    obsidian: number;
    diamond: number;
}

export const MyPackages = () => {
    const [count, setCount] = useState(0)
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [availablePackages, setAvailablePackages] = useState<MyPackagesProps>({
        esmerald: 0,
        obsidian: 0,
        diamond: 0
    })
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingReveal, setIsLoadingReveal] = useState(false);
    const [isRevealing, setIsRevealing] = useState(false);
    const [isRevealed, setIsRevealed] = useState(false);
    const [revealingGif, setRevealingGif] = useState<string>("/assets/gif/esmerald-multiple-package.gif");
    const [revealedCards, setRevealedCards] = useState<number[]>([]);

    const onSubmitReveal = async (numberType: number) => {
        if (count > 0) {
            setIsLoading(true)
            setIsLoadingReveal(true)
            const amount_available = numberType == 3
                ? availablePackages?.diamond
                : numberType == 2
                    ? availablePackages?.obsidian
                    : availablePackages?.esmerald;

            if (amount_available && count > amount_available) {
                setIsLoading(false)
                setIsLoadingReveal(false)
                return toast.error("Você não possui pacotes suficientes para revelar");
            }
            else {
                try {
                    const { data }: any = await open_package(numberType, count);
                    setIsLoading(false)
                    setIsLoadingReveal(false)
                    setRevealedCards(data.stickers_drawed.map((card: any) => card.id));
                    showGif(numberType, 1)
                }
                catch (error) {
                    setIsLoading(false)
                    setIsLoadingReveal(false)
                    toast.error("Ocorreu um erro ao revelar os pacotes");
                    console.error(error);
                }
                update_packages();
            }
        }
    }

    const showGif = (package_type: number, package_amount: number) => {
        setIsRevealing(true);
        switch (package_type) {
            case 1:
                if (package_amount > 1) {
                    setRevealingGif('/assets/gif/esmerald-multiple-package.gif');
                }
                else {
                    setRevealingGif('/assets/gif/esmerald-single-package.gif');
                }
                break;
            case 2:
                if (package_amount > 1) {
                    setRevealingGif('/assets/gif/obsidian-multiple-package.gif');
                }
                else {
                    setRevealingGif('/assets/gif/obsidian-single-package.gif');
                }
                break;
            case 3:
                if (package_amount > 1) {
                    setRevealingGif('/assets/gif/diamond-multiple-package.gif');
                }
                else {
                    setRevealingGif('/assets/gif/diamond-single-package.gif');
                }
                break;
        }
        setTimeout(() => {
            setIsRevealing(false);
            setIsRevealed(true);
        }, 5000);
    }

    const handleDecrement = useCallback(() => {
        if (count > 0) {
            setCount(count - 1);
        }
    }, [count]);

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const next = useCallback(() => {
        if (selectedIndex < stickersMock.length - 1) {
            setSelectedIndex(selectedIndex + 1)
            setCount(0)
        }
    }, [selectedIndex])

    const prev = useCallback(() => {
        if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1)
            setCount(0)
        }
    }, [selectedIndex])

    const update_packages = async () => {
        getPackages().then((response: any) => {
            if (parseInt(response[0]) > 0) {
                setSelectedIndex(0)
            }

            if (parseInt(response[1]) > 0) {
                setSelectedIndex(1)
            }

            if (parseInt(response[2]) > 0) {
                setSelectedIndex(2)
            }

            setAvailablePackages({
                esmerald: response[0],
                obsidian: response[1],
                diamond: response[2]
            });
        });
    }

    useEffect(() => {
        update_packages();
    }, [])

    const translateCardsContainer = useMemo(() => {
        if(selectedIndex === 0) {
            return "translateX(157px)"
        } else if (selectedIndex === 1) {
            return ""
        }else if (selectedIndex === 2) {
            return "translateX(-157px)"
        }
    }, [selectedIndex])

    return (
        <MyPackagesContainer>
            {isLoading ? (
                <Skeletons isLoadingReveal={isLoadingReveal} />
            ) : (
                <>
                    <h1 className="my-package-title">
                        <img src="/assets/img/icons/album-icon.svg" alt="" />
                        Álbum
                    </h1>
                    {!isRevealing && !isRevealed &&
                        (<ul
                            style={{ transform: translateCardsContainer }}
                        >
                            {stickersMock.map(({ stars, title, type, id, numberType }, index) => selectedIndex === (id - 1) ? (
                                <>
                                    <StickersPackageContainer
                                        key={id}
                                        className={(id == 3
                                            ? availablePackages?.diamond
                                            : id == 2
                                                ? availablePackages?.obsidian
                                                : availablePackages?.esmerald) > 0 ? "" : "empty"}
                                    >
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
                                </>
                            ) : (
                                <>
                                    <PackageContainer
                                        key={id}
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ duration: 0.2 }}
                                        onClick={() => {
                                            setSelectedIndex(id - 1)
                                            setCount(0)
                                        }}
                                        className={(id == 3
                                            ? availablePackages?.diamond
                                            : id == 2
                                                ? availablePackages?.obsidian
                                                : availablePackages?.esmerald) > 0 ? "" : "empty"}
                                    >
                                        <img src={type} alt="" />
                                    </PackageContainer>
                                </>
                            ))}
                        </ul>)
                    }
                    {isRevealed &&
                        (<div className="revealed-container">
                            <RevealedCards
                                openMoreCards={() => {
                                    setIsRevealing(false);
                                    setIsRevealed(false);
                                }}
                                revealedCards={revealedCards}
                            />

                            <button className="modal-close" onClick={() => {
                                setIsRevealing(false);
                                setIsRevealed(false);
                            }}>
                                <span>
                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.5 1.50159L2 6.20677M2 6.20677L6.5 10.912M2 6.20677H12.5" stroke="white" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </span>

                                <p>
                                    Voltar
                                </p>
                            </button>
                        </div>)
                    }
                    {isRevealing &&
                        (<>
                            <div className="revealing-container">
                                <img src={revealingGif} alt="" />
                            </div>
                        </>)

                    }
                </>
            )}

            <GradientOverlay />

        </MyPackagesContainer>
    )
}
