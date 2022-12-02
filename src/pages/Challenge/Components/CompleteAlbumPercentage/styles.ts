import styled from "styled-components"
import { Progress } from "antd"

export const CompleteAlbumPercentageContainer = styled.div`
    display: flex;
    position: relative;
    background: ${({ theme }) => theme.colors.middleL };
    border-radius: 50%;

    .percentage {
        display: flex;
        justify-content: center;
        align-content: center;
        top: 5px;
        left: 5px;
        width: 42px;
        height: 42px;
        position: absolute;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.red };
        color: white;
        font-weight: bold;

        span {
            font-size: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        p {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 15px;
        }

        &.two {
            span {
                font-size: 18px;
            }
        }
    }
`

export const CustomProgress = styled(Progress)`
    height: 52px;
    width: 52px;

    .ant-progress-inner {
        height: 52px !important;
        width: 52px !important;
    }

    .ant-progress-text {
        display: none;
    }
`
