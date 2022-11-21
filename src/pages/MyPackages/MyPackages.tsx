import BaseTemplate from "Components/BaseTemplate"
import { stickersMock } from "pages/Marketplace/stickersMock"
import { useCallback, useRef, useState } from "react"
import { MyPackagesContainer, PackageContainer, StickersPackageContainer } from "./styles"
import { Carousel } from "antd"
import { CarouselRef } from "antd/es/carousel"
import { motion } from "framer-motion"

export const MyPackages = () => {
    const [count, setCount] = useState(0)
    const carousel = useRef<CarouselRef>(null)
    const [selectedIndex, setSelectedIndex] = useState<number>(1)
    const [availablePackages, setAvailablePackages] = useState(3)

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
        <BaseTemplate footer={false}>
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
                                        <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.8699 7.63744C2.7523 7.75031 2.65896 7.88461 2.59526 8.03257C2.53156 8.18053 2.49877 8.33924 2.49877 8.49953C2.49877 8.65982 2.53156 8.81852 2.59526 8.96649C2.65896 9.11445 2.7523 9.24874 2.8699 9.36162L8.62887 14.9227C8.74647 15.0356 8.83981 15.1699 8.90351 15.3179C8.96721 15.4658 9 15.6245 9 15.7848C9 15.9451 8.96721 16.1038 8.90351 16.2518C8.83981 16.3997 8.74647 16.534 8.62887 16.6469C8.39379 16.8731 8.07579 17 7.74432 17C7.41285 17 7.09485 16.8731 6.85977 16.6469L1.1008 11.0737C0.395922 10.3907 -6.58745e-07 9.46483 -7.43135e-07 8.49953C-8.27524e-07 7.53422 0.395922 6.60839 1.1008 5.92539L6.85977 0.352144C7.09347 0.127824 7.40889 0.0013612 7.73805 2.03044e-05C7.90317 -0.000904774 8.06686 0.0297234 8.21973 0.0901482C8.37259 0.150573 8.51163 0.239608 8.62887 0.352143C8.74647 0.46502 8.83981 0.599313 8.90351 0.747276C8.96721 0.89524 9 1.05394 9 1.21424C9 1.37453 8.96721 1.53323 8.90351 1.68119C8.83981 1.82916 8.74647 1.96345 8.62887 2.07633L2.8699 7.63744Z" fill="#101138" />
                                        </svg>
                                    </button>
                                    <img src={type} alt="" />
                                    <button
                                        className="next-package"
                                        onClick={next}
                                    >
                                        <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.1301 7.63744C6.2477 7.75031 6.34104 7.88461 6.40474 8.03257C6.46844 8.18053 6.50123 8.33924 6.50123 8.49953C6.50123 8.65982 6.46844 8.81852 6.40474 8.96649C6.34104 9.11445 6.2477 9.24874 6.1301 9.36162L0.37113 14.9227C0.253532 15.0356 0.16019 15.1699 0.096491 15.3179C0.0327932 15.4658 -1.7871e-06 15.6245 -1.80111e-06 15.7848C-1.81513e-06 15.9451 0.0327931 16.1038 0.0964909 16.2518C0.16019 16.3997 0.253531 16.534 0.37113 16.6469C0.60621 16.8731 0.92421 17 1.25568 17C1.58715 17 1.90515 16.8731 2.14023 16.6469L7.8992 11.0737C8.60408 10.3907 9 9.46483 9 8.49953C9 7.53422 8.60408 6.60839 7.8992 5.92539L2.14023 0.352144C1.90653 0.127824 1.59111 0.0013612 1.26195 2.03044e-05C1.09683 -0.000904774 0.933139 0.0297234 0.780273 0.0901482C0.627406 0.150573 0.488369 0.239608 0.371131 0.352143C0.253533 0.46502 0.160191 0.599313 0.0964923 0.747276C0.0327945 0.89524 -5.133e-07 1.05394 -5.27313e-07 1.21424C-5.41326e-07 1.37453 0.0327944 1.53323 0.0964922 1.68119C0.160191 1.82916 0.253533 1.96345 0.371131 2.07633L6.1301 7.63744Z" fill="#101138" />
                                        </svg>
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
                                    onClick={() => { }}
                                >
                                    Revelar figurinhas
                                </button>

                                <button
                                    className="buy-more-btn"
                                    onClick={() => { }}
                                >
                                    <img src="/assets/img/icons/market-icon.svg" alt="" />

                                    <p>Comprar + Pacotinhos</p>
                                </button>

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
        </BaseTemplate>
    )
}
