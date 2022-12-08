import styled from "styled-components"
import Skeleton from "react-loading-skeleton"

export const MarketplaceContainer = styled.div`
    margin-top: 8rem;
    display: grid;
    padding: 2rem;
    padding-top: 0;

    a.btn-home {
        display: inline-flex;
        gap: 32px;
        align-items: center;
        position: relative;
        z-index: 1;
        background: ${({ theme }) => theme.colors.middleL};
        color: ${({ theme }) => theme.colors.white};
        border-radius: 25px;
        padding: 18px 21px;
        transition: all .3s ease-in-out;
        line-height: 1;
        font-size: 1rem;
        font-weight: bold;

        &:hover {
            color: ${({ theme }) => theme.colors.dark};
        }

        &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 58px;
            height: 58px;
            background: linear-gradient(to left, rgba(255, 83, 83, 1), rgba(254, 69, 126, 1));
            z-index: -1;
            border-radius: 30px;
            transition: .3s linear;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        &:hover::after {
            width: 100%;
        }

        svg {
            margin-left: -2px;
        }
    }

    .marketplace-title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4rem;

        h1.title-text{
            margin-right: auto;
        }

        img {
            height: 49px;
            width: 49px;
            margin-right: 1.313rem;
        }

        h1 {
            font-size: 2.438rem;
            color: white;
            margin: 0;
        }
    }

    .stickers-package-list {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 80px;
    }

    .carousel-root {
        display: none;
    }
    /* media query for mobile */
    @media (max-width: 768px) {
        .marketplace-title{
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            h1.title-text{
                text-align: center;
                font-size: 1.5rem;
                margin: 0 auto;
            }
            a {
                padding: 0.5rem;
                font-size: 1rem;
                width: 50%;
                border-radius: 10px;
                font-weight: bold;
            }
        }
        .stickers-package-list {
            display: none;
        }
        .carousel-root {
            display: block;
            max-width: 100%;
            min-width: 100%;
            width: 100%;
            .carousel.carousel-slider{
                overflow: visible;
                .control-dots{
                    bottom: -2.5rem;
                }
            }
            .carousel.carousel-slider {
                overflow: inherit;
            }

            .carousel .control-next.control-arrow, .carousel .control-next.control-arrow:hover{
                background-color: transparent;
                right: -2.5rem;
            }

            .carousel .control-prev.control-arrow, .carousel .control-prev.control-arrow:hover {
                background-color: transparent;
                left: -2.5rem;
            }

            .carousel .control-arrow, .carousel.carousel-slider .control-arrow{
                opacity: 1;
                z-index: 1;
            }

            .carousel .control-next.control-arrow:before {
                content: '';
                border: solid #FFDB45;
                border-width: 0 5px 5px 0;
                display: inline-block;
                padding: 14px;
                transform: rotate(-45deg);
                -webkit-transform: rotate(-45deg);
            }

            .carousel .control-prev.control-arrow:before {
                content: '';
                border: solid #FFDB45;
                border-width: 0 5px 5px 0;
                display: inline-block;
                padding: 14px;
                transform: rotate(135deg);
                -webkit-transform: rotate(135deg);
            }
        }
        a.btn-home {
            font-size: 1rem;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(to left, rgba(255, 83, 83, 1), rgba(254, 69, 126, 1));
            width: auto;
            border-radius: 30px;
            padding: .5rem 3rem;
            font-weight: bold;
            svg{
                display: none;
            }
            &::after {
                display: none;
            }
        }
    }
`

type StickersPackageContainerProps = {
    index: number;
}

export const StickersPackageContainer = styled.li<StickersPackageContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 600px;
    height: 100%;
    width: 100%;
    max-width: 282px;
    border-radius: 20px;
    gap: 10px;
    background: ${props => props.theme.colors.middle};

    /* media query for mobile */
    @media (max-width: 768px) {
        width: 100%;
        justify-content: unset;
        height: fit-content;
        flex: 0 0 100%;
    }
    .stikers-package-main {
        display: flex;
        flex-direction: column;
        padding: 22px 22px 0px 22px;

        .sticker-star-container {
            img {
                height: 40px;
                width: auto;
            }
        }

        .sticker-package-container {
            img {
                display: block;
                object-fit: contain;
                width: 165px;
                height: auto;
            }
        }

        div {
            display: flex;
            width: 100%;
            justify-content: center;
            align-content: center;

            h2 {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                flex-wrap: wrap;
                margin: 0;
                color: white;
                text-align: center;

                 span {
                    color: ${props => props.theme.colors.greenNeon};
                 }

                 margin-top: 0.75rem;
                 font-size: 1.875rem;
            }
        }
    }

    .stikers-package-payment {
        display: flex;
        flex-direction: column;
        position: relative;

        .sticker-stats-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${props => props.theme.colors.colorMiddle};
            border-radius: 8px;
            padding: 8px;

            position: absolute;
            right: 4%;
            top: -20%;

            img {
                width: 0.875rem;
                height: 0.875rem;
            }
        }

        .sticker-stats-modal {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            align-self: center;
            width: 80%;
            background-color: ${props => props.theme.colors.middle};
            border: ${props => props.theme.colors.light} solid 1.5px;
            border-radius: 10px;
            padding: 8px;
            margin-left: -40px;

            position: absolute;
            top: -102%;
            z-index: 99;

            .sticker-stats-close-modal-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                background: none;

                position: absolute;
                right: 0.5rem;
                top: 0.5rem;

                img {
                    height: 1.25rem;
                    width: 1.25rem;
                }
            }

            .stickers-stats-prob {
                display: flex;
                align-items: center;
                width: 90%;

                img {
                    margin-right: 0.5rem;
                    height: 1.5rem;
                    width: 1.5rem;
                }

                p {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    margin: 0;
                    font-size: 0.75rem;
                    font-weight: bold;

                    span {
                        &:nth-child(2) {
                            font-size: 0.675rem;
                        }
                    }
                }
            }

            ul {
                display: flex;
                flex-direction: column;

                li {
                    display: flex;
                    align-items: center;

                    p {
                        margin: 0;
                        color: ${props => props.theme.colors.colorLight};
                        font-size: 0.875rem;
                    }

                    img {
                        margin-right: 3px;
                        height: 1.875rem;
                        width: 1.875rem;
                    }

                    span {
                        color: white;
                        font-size: 0.875rem;
                        margin-left: 0.5rem;
                    }
                }
            }
        }

        .payment-quantity {
            display: flex;
            justify-content: center;
            align-items: start;
            background: ${props => {
                switch(props.index) {
                    case 0:
                        return "linear-gradient(to left, rgba(255, 83, 83, 1), rgba(254, 69, 126, 1));";
                        break;
                    case 1:
                        return "linear-gradient(to left, rgba(70, 148, 255, 1), rgba(181, 59, 254, 1));";
                        break;
                    case 2:
                        return "linear-gradient(to left, rgba(70, 148, 255, 1), rgba(48, 229, 132, 1));";
                        break;
                    default:
                        return "linear-gradient(to left, rgba(255, 83, 83, 1), rgba(254, 69, 126, 1));";
                }
            }};
            border-radius: 30px;
            width: 100%;
            padding: 1.313rem 1.063rem;
            z-index: 1;
            margin-bottom: -2.25rem;

            .payment {
                display: flex;
                flex-direction: column;
                width: 50%;

                h3, p {
                    margin: 0;
                    margin-left: 1rem;
                    color: white;
                }

                h3 {
                    font-size: 0.938rem;
                }

                p {
                    font-size: 0.75rem;
                    margin-bottom: 0.5rem;
                }

                button {
                    font-size: 1.25rem;
                    color: ${props => props.theme.colors.dark};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: ${props => props.theme.colors.greenNeon};
                    width: 95%;
                    border-radius: 30px;
                    height: 42px;
                    font-weight: bold;
                }
            }

            .quantity {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                color: white;
                width: 50%;
                height: 100%;

                h4, p {
                    margin: 0;
                    margin-right: 1rem;
                    color: white;
                }

                h4 {
                    font-size: 0.75rem;
                    margin-bottom: 4px;
                }

                p {
                    font-size: 0.75rem;
                    margin-bottom: 0.5rem;
                }

                .quantity-counter {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 95%;

                    button {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: ${props => props.theme.colors.purple};
                        border: 1px white solid;
                        height: 27px;
                        width: 31px;
                        border-radius: 8px;
                        color: white;
                        font-weight: bold;
                        font-size: 1.5rem;
                    }

                    input {
                        display: flex;
                        height: 37px;
                        width: 42px;
                        border-radius: 12px;
                        font-weight: bold;
                        font-size: 1.25rem;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                    }
                }
            }
        }

        .description {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 3rem 1rem 0.75rem 1.875rem;
            background: white;
            border-bottom-right-radius: 30px;
            border-bottom-left-radius: 30px;
            opacity: .7;
            span {
                font-weight: bold;
                font-size: .7rem;
            }

            img {
                height: 41px;
                width: 121px;
                &.lock{
                    height: 20px;
                    width: 20px;
                }
            }
        }
    }
`

type SkeletonProps = {
    skeletonWidth?: string;
    skeletonHeight?: string;
}

export const TitleSkeletonContainer = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 8.75rem;
`

export const CustomSkeleton = styled(Skeleton) <SkeletonProps>`
    width: ${props => props.skeletonWidth ? props.skeletonWidth : "unset"};
    height: ${props => props.skeletonHeight ? `${props.skeletonHeight} !important` : "unset"};
`

export const CardsListSkeletonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 80px;

    .skeleton-card {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 600px;
        width: 296px;
        border-radius: 20px;
        gap: 10px;
        padding: 40px 0;
        background: ${props => props.theme.colors.middle};

        span {
            display: flex;
            justify-content: center;
        }
    }
`

type StickerSeparatorProps = {
    margin: string;
}

export const StickersSeparator = styled.div<StickerSeparatorProps>`
    display: flex;
    content: "";
    background-color: ${props => props.theme.colors.middleL};
    width: 100%;
    height: 3px;
    margin: ${props => props.margin};
`
