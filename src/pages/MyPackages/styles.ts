import { motion } from "framer-motion";
import styled from "styled-components";

export const MyPackagesContainer = styled.div`
    margin-top: 164px;
    padding-bottom: 94px;
    display: grid;

    .my-package-title {
        display: flex;
        justify-content: center;
        color: white;
        margin: 0;
        margin-bottom: 7vh;

        img {
            height: 50px;
            width: 50px;
            margin-right: 1.25rem;
        }
    }

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const StickersPackageContainer = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-height: 640px;
    width: 100%;
    max-width: 282px;
    border-radius: 30px;
    background: ${props => props.theme.colors.purple};

    .stars-package-container {
        display: flex;
        flex-direction: column;
        padding: 22px;

        .stars-container {
            display: flex;
            justify-content: center;

            img {
                height: 45px;
            }
        }

        .package-container {
            display: flex;
            justify-content: center;
            align-items: center;

            .prev-package, .next-package {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 35px;
                width: 35px;
                border-radius: 35px;
                background: ${props => props.theme.colors.yellow};
            }
        }

        .available-packages {
            display: flex;
            justify-content: center;
            align-items: center;

            span {
                color: rgba(43, 38, 72, 1);
                font-weight: bold;
                font-size: 1.875rem;
                margin-right: 5px;
            }

            p {
                font-size: 0.625rem;
                font-weight: bold;
                color: white;
                line-height: .75rem;
                margin: 0;
            }
        }
    }

    .quantity-counter-container {
        display: flex;
        background: ${props => props.theme.colors.middleL};
        border-radius: 30px;
        align-items: center;
        padding: 20px 28px 90px 28px;
        gap: 8px;

        .min-max-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            color: white;
            font-size: .675rem;
            background: transparent;
            border: 1px white solid;
            border-radius: 12px;
            width: 51px;
            height: 20px;
        }

        .quantity-counter {
            display: flex;
            align-items: center;
            width: 60%;
            gap: 8px;


            button {
                display: flex;
                justify-content: center;
                align-items: center;
                background: ${props => props.theme.colors.purple};
                border: 1px white solid;
                height: 28.51px;
                width: 28.85px;
                border-radius: 8px;
                color: white;
                font-weight: bold;
                font-size: 1.5rem;
            }

            input {
                display: flex;
                height: 34.44px;
                width: 40.02px;
                border-radius: 12px;
                font-weight: bold;
                font-size: 1.25rem;
                justify-content: center;
                align-items: center;
                text-align: center;
            }
        }
    }

    .reveal-stickers-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: white;
        width: 100%;
        padding: 29px 24px 20px 24px;
        border-radius: 30px;
        margin-top: -75px;
        gap: 1rem 0;

        .reveal-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            background: ${props => props.theme.colors.pink};
            border-radius: 30px;
            height: 41px;
            color: white;
            font-size: 0.813rem;
            font-weight: bold;
        }

        .buy-more-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            background: transparent;
            border: ${props => props.theme.colors.lightGrey} 1px solid;
            border-radius: 30px;
            height: 41px;

            img {
                height: 24px;
                width: 24px;
            }

            p {
                margin: 0;
                display: flex;
                color: #080B24;
                font-weight: bold;
                font-size: 0.813rem;

                &::before {
                    display: flex;
                    content: "";
                    height: 20px;
                    background: ${props => props.theme.colors.lightGrey};
                    width: 2px;
                    margin: 0 15px;
                }
            }
        }

        .buy-with-pix {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img {
                height: 41px;
                width: 119px;
            }

            p {
                color: ${props => props.theme.colors.middle};
                font-size: 0.75rem;
                margin: 0;
            }
        }
    }
`

export const PackageContainer = styled(motion.div)`
    cursor: pointer;
    margin-bottom: 30vh;
    scale: 0.8;
`
