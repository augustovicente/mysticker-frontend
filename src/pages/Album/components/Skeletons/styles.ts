import { Modal } from "antd"
import styled from "styled-components"

export const AlbumStickersContainer = styled.div`
    background: #3C375B;
    width: 85vw;
    height: 100%;
    padding: 40px 70px;
    border-radius: 1.125rem;
`

export const SkeletonAlbumModal = styled(Modal)`
    top: 40vh;
    width: 30% !important;
    border: 2px rgba(255, 255, 255, .3) solid;
    padding: 22px 20px;
    background: ${props => props.theme.colors.geenDark};
    border-radius: 10px;

    .ant-modal-content {
        height: 100%;
        border: 2px rgba(255, 255, 255, .3) solid;
        background: ${props => props.theme.colors.geenDark};

        .ant-modal-body {
            position: relative;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h1 {
                color: white;
            }

            p {
                font-size: 1.25rem;
            }

            a {
                width: 300px;
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
        }

        .ant-modal-footer {
            display: none;
        }

        .ant-modal-close-x {
            display: none;
        }
    }
`
