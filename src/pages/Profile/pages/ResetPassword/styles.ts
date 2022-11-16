import styled from "styled-components";

export const Container = styled.section`
    margin-top: 164px;
    padding-bottom: 94px;
    display: grid;
    gap: 54px;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        div.title {
            display: flex;
            align-items: center;
            gap: 20px;

            h2 {
                font-size: ${({ theme }) => theme.fontSizes.heading3};
                color: ${({ theme }) => theme.colors.white};
                margin: 0;
            }
        }

        div.dots {
            display: flex;
            gap: 26px;

            div.dot {
                height: 37px;
                width: 37px;
                background: ${({ theme }) => theme.colors.colorMiddle};
                border-radius: 50%;
                transition: filter 0.3s ease-in-out;

                &:hover {
                    cursor: pointer;
                    filter: brightness(0.8);
                }
            }
        }
    }

    section {
        background: ${({ theme }) => theme.colors.middle};
        border-radius: 12px;
        padding: 44px 0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: -32px;
            margin: 0 auto;
            left: 0;
            right: 0;
            width: 85%;
            height: 100%;
            background: red;
            z-index: -1;
            background: linear-gradient(180deg, rgba(29, 25, 51, 0.5) 0%, rgba(29, 25, 51, 0.07) 100%);
            border-radius: 12px;
            transform: matrix(-1, 0, 0, 1, 0, 0);
        }
    }
`;
