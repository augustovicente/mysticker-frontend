import BaseTemplate from "Components/BaseTemplate"
import { stickersMock } from "pages/Marketplace/stickersMock"
import { useCallback, useRef, useState } from "react"
import { MyPackagesContainer, PackageContainer, StickersPackageContainer } from "./styles"
import { Carousel } from "antd"
import { CarouselRef } from "antd/es/carousel"
import { motion } from "framer-motion"
import { useToggle } from "hooks/useToggle"
import axios from "axios"
import { toast } from "react-toastify"
import { api } from "services/api"
import { Link } from "react-router-dom"
import { open_package } from "models/User"

export const MyPackages = () => {
    const [count, setCount] = useState(0)
    const carousel = useRef<CarouselRef>(null)
    const [selectedIndex, setSelectedIndex] = useState<number>(1)
    const [availablePackages, setAvailablePackages] = useState(3)
    const [isLoading, setIsLoading] = useToggle(false);

    const onSubmitReveal = async () => {
        setIsLoading(true)

        try {
            const response = await open_package(1);
            console.log({response});
            setIsLoading(true)
        } catch (error) {
            console.log({error})
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

    return (
        <MyPackagesContainer>
            <h1 className="my-package-title">
                <img src="/assets/img/icons/album-icon.svg" alt="" />
                Álbum
            </h1>

            <ul>
                {stickersMock.map(({ stars, title, type, id }) => selectedIndex === id ? (
                    <StickersPackageContainer>
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
                                    {
                                        availablePackages.toString().length < 2
                                            ?
                                            `0${availablePackages}`
                                            :
                                            availablePackages
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
                                    defaultValue={count}
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
                            <button
                                className="min-max-btn"
                            >
                                max.
                            </button>
                        </div>

                        <div className="reveal-stickers-container">
                            <button
                                className="reveal-btn"
                                onClick={onSubmitReveal}
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
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedIndex(id)}
                    >
                        <img src={type} alt="" />
                    </PackageContainer>
                ))}
            </ul>
        </MyPackagesContainer>
    )
}
