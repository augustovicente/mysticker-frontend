import styled from "styled-components"
import Skeleton from "react-loading-skeleton"

export const MarketplaceContainer = styled.div`
    margin-top: 164px;
    padding-bottom: 94px;
    display: grid;
    gap: 54px;

    h1 {
        color: white;
        margin: 0;
        margin-bottom: 12vh;
    }

    .stickers-package-list {
        display: flex;
        justify-content: space-between;
        min-height: 70vh;
        width: 100%;
    }
`

export const StickersPackageContainer = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 29%;
    border-radius: 20px;
    gap: 10px;
    background: ${props => props.theme.colors.middle};

    .stikers-package-main {
        display: flex;
        flex-direction: column;
        background-image: url("/assets/img/others/sticker-mask.png");
        background-position: center;
        background-repeat: no-repeat;
        padding: 22px 22px 0px 22px;

        div {
            display: flex;
            width: 100%;
            justify-content: center;
            align-content: center;

            img {
                margin: 0;
            }

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

                 margin-top: 1rem;
            }
        }
    }

    .stikers-package-payment {
        display: flex;
        flex-direction: column;
        position: relative;

        .sticker-stats {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${props => props.theme.colors.colorMiddle};
            border-radius: 8px;
            padding: 10px;

            position: absolute;
            right: 8%;
            top: -30%;
        }

        .sticker-stats-modal {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            align-self: center;
            width: 60%;
            background-color: ${props => props.theme.colors.middle};
            border: ${props => props.theme.colors.light} solid 1.5px;
            border-radius: 10px;
            padding: 8px;

            position: absolute;
            top: -100%;
            z-index: 99;

            .sticker-stats-close-modal-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                background: none;

                position: absolute;
                right: 8px;
                top: 8px;

                img {
                    height: 20px;
                    width: 20px;
                }
            }

            .stickers-stats-prob {
                display: flex;
                align-items: center;
                width: 90%;

                img {
                    margin-right: 5%;
                }

                p {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    margin: 0;
                    font-size: 0.75rem;
                    font-weight: bold;
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
                        font-size: 0.75rem;
                    }

                    img {
                        display: flex;
                        margin-right: 5px;
                        height: 33px;
                        width: 21px;
                    }

                    span {
                        color: white;
                        font-size: 0.875rem;
                        margin-left: 0.875rem;
                    }
                }
            }
        }

        .payment-quantity {
            display: flex;
            justify-content: center;
            align-items: start;
            background: linear-gradient(to left, rgba(255, 83, 83, 1), rgba(254, 69, 126, 1));
            border-radius: 30px;
            width: 100%;
            padding: 1rem;
            z-index: 2;
            margin-bottom: -2rem;

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
                    font-size: 1rem;
                    margin-bottom: 4px;
                }

                p {
                    font-size: 0.875rem;
                    margin-bottom: 1rem;
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
                    font-size: 0.875rem;
                    margin-bottom: 1rem;
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
                        height: 37px;
                        width: 40px;
                        border-radius: 12px;
                        color: white;
                        font-weight: bold;
                        font-size: 1.5rem;
                    }

                    input {
                        display: flex;
                        height: 42px;
                        width: 40px;
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
            padding: 3rem 1rem 1rem 1rem;
            background: white;
            border-bottom-right-radius: 30px;
            border-bottom-left-radius: 30px;

            span {
                font-weight: bold;
                font-size: 1rem;
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
    margin-bottom: 12vh;
`

export const CustomSkeleton = styled(Skeleton) <SkeletonProps>`
    width: ${props => props.skeletonWidth ? props.skeletonWidth : "unset"};
    height: ${props => props.skeletonHeight ? `${props.skeletonHeight} !important` : "unset"};
`

export const CardsListSkeletonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 70vh;
    width: 100%;

    .skeleton-card {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        width: 26%;
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
