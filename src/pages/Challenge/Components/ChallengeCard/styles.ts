import { Col } from "antd";
import styled from "styled-components"

type ChallengeCardContainerProps = {
    bg: string;
}

export const ChallengeCardContainer = styled(Col)<ChallengeCardContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    min-width: 320.72px;
    max-width: 320.72px;
    min-height: 520px;
    border-radius: 30px;
    ${({ bg }) => bg ? bg : ""}

    @media (max-width: 1440px) {
        min-width: 255.72px;
        max-width: 255.72px;
        min-height: 500px;
    }

    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 70%;
        text-align: center;

        h1.title {
            margin: 0.5rem 0;
            color: white;
            font-size: 1.563rem;
        }
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 55%;
        background: ${({ theme }) => theme.colors.dark};
        border-radius: 30px;
        padding: 22px;
        margin-top: 24px;
        position: relative;

        span.main-top-icon {
            display: flex;
            position: absolute;
            top: -6%;
            justify-self: center;
            justify-content: center;
            align-items: center;
            ${({ bg }) => bg ? bg : ""}
            min-width: 60px;
            border-radius: 32px;
            padding: 6px 0;

            img {
                min-height: 25px;
            }

            @media (max-width: 1440px) {
                min-width: 40px;
                padding: 6px 0;

                img {
                    min-height: 20px;
                }
            }
        }

        p {
            margin: 0;
            display: flex;
            justify-self: start;
            text-align: center;
            font-size: 12px;
            color: white;
            margin-top: 16px;
        }

        div.redeem-container {
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: center;
            width: 100%;
            height: 100%;

            button.redeem-btn {
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 8px;
                width: 60%;
                background: ${({ theme }) => theme.colors.middle};
                padding: 8px 0;
                color: ${({ theme }) => theme.colors.light};
                margin-top: 1.125rem;
            }
        }
    }
`
