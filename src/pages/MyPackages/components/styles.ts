import styled from "styled-components";

export const RevealedStickersContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 20rem;
    div.revealed-cards{
        display: flex;
        background-color: ${props => props.theme.colors.pink};
        border-radius: 30px 30px 0 0;
        min-height: 15rem;
        width: 100%;
        align-items: center;
        overflow: visible;
        gap: 2rem;
        position: relative;
        z-index: 1;
        div.revealed-card{
            display: flex;
            margin-left: .5rem;
            img{
                height: 10rem;
                width: 15rem;
                min-width: 8rem;
                min-height: 6rem;
            }
            &.focused{
                margin: auto;
                img{
                    transform: scale(1.2);
                }
            }
        }
    }
    div.footer-btns{
        z-index: 2;
        display: flex;
        flex-direction: column;
        background-color: ${props => props.theme.colors.white};
        border-radius: 0 0 30px 30px;
        div.arrows-container{
            display: flex;
            margin: 0 auto;
            background-color: ${props => props.theme.colors.purple};
            border-radius: 30px;
            width: fit-content;
            padding: 0.5rem 0.7rem;
            margin-top: -10px;
            button.prev-sticker{
                display: flex;
                background-color: transparent;
                width: 2.5rem;
                margin: auto 0;
                img{
                    margin: auto;
                }
            }
            div.divisor{
                height: 70%;
                width: 2px;
                margin: auto 0.5rem;
                background-color: ${props => props.theme.colors.white};
            }
            button.next-sticker{
                display: flex;
                background-color: transparent;
                width: 2.5rem;
                margin: auto 0;
                img{
                    margin: auto;
                }
            }
        }
        div.action-buttons{
            display: flex;
            flex-direction: column;
            padding: 2rem;
            gap: 1rem;
            button{
                border-radius: 30px;
                padding: 0.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: .5rem;
                &:nth-child(1){
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    background-color: ${props => props.theme.colors.pink};
                    color: ${props => props.theme.colors.white};
                    img{
                        border-right: 2px solid ${props => props.theme.colors.white};
                        padding-right: .5rem;
                    }
                }
                &:nth-child(2), &:nth-child(3){
                    background-color: transparent;
                    color: ${props => props.theme.colors.dark};
                    border: 2px solid ${props => props.theme.colors.lightGrey};
                    img{
                        border-right: 2px solid ${props => props.theme.colors.lightGrey};
                        padding-right: .5rem;
                    }
                }
            }
        }
    }
`;