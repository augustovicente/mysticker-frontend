import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';

export const Container = styled.section`
    margin-top: 8rem;
    display: grid;
    gap: 54px;
    padding: 0 80px 80px 80px;

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
            z-index: -1;
            background: linear-gradient(180deg, rgba(29, 25, 51, 0.5) 0%, rgba(29, 25, 51, 0.07) 100%);
            border-radius: 12px;
            transform: matrix(-1, 0, 0, 1, 0, 0);
        }

        form {
            width: 100%;
            max-width: 1040px;
            margin: 0 auto;
            padding: 0 44px;
            header {
                display: grid;
                grid-template-columns: 144px 1fr;
                gap: 94px;
                align-items: center;
                width: 100%;

                input[type="file"] {
                    position: absolute;
                    left: 0;
                    opacity: 0;
                    top: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }

                label.label-input {
                    position: relative;
                    min-width: 144px;
                    min-height: 144px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    background: ${({ theme }) => theme.colors.dark};
                    transition: filter 0.3s ease-in-out;

                    &:hover {
                        filter: brightness(0.8);
                    }
                }

                img.avatar {
                    width: 144px;
                    height: 144px;
                    border-radius: 50%;
                    overflow: hidden;
                    object-fit: cover;
                }

                label {
                    color: ${({ theme }) => theme.colors.light};
                    font-weight: 400;
                }

                div.header-inputs {
                    display: grid;
                    gap: 32px;
                }
            }


            div.form-content {
                display: grid;
                grid-template-columns: repeat(6, 1fr);

                div:has(#cpf), div:has(.cpf) {
                    grid-column: 1 / 4;
                }

                div:has(#full_number), div:has(.full_number) {
                    grid-column: 4 / 7;
                }

                div:has(#address), div:has(.address) {
                    grid-column: 1 / 6;
                }

                div:has(#number), div:has(.number) {
                    grid-column: 6 / 7;
                }

                div:has(#address_zip_code), div:has(.address_zip_code) {
                    grid-column: 1 / 3;
                }

                div:has(#uf), div:has(.uf) {
                    grid-column: 3 / 3;
                }

                div:has(#city), div:has(.city) {
                    grid-column: 4 / 7;
                }

                div:has(#neighborhood), div:has(.neighborhood) {
                    grid-column: 1 / 4;
                }

                div:has(#address_complement), div:has(.address_complement) {
                    grid-column: 4 / 7;
                }

                width: 100%;
                gap: 32px;
                margin-top: 32px;

                label {
                    color: ${({ theme }) => theme.colors.light};
                    font-weight: 400;
                }
            }


            footer {
                margin-top: 64px;
                display: flex;
                align-items: center;
                gap: 28px;

                button {
                    width: 100%;
                    padding: 10px;
                    border-radius: 10px;
                    font-weight: 700;
                    color: ${({ theme }) => theme.colors.white};
                }

                button[type="submit"] {
                    color: ${({ theme }) => theme.colors.middle};
                    background: linear-gradient(270deg, #FFDB45 0%, #FF8F4B 100%);
                    transition: filter 0.3s ease-in-out;
                    max-height: 44px;
                    min-height: 44px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &:hover {
                        filter: brightness(0.8);
                    }
                }

                a.reset-password {
                    padding: 10px;
                    border-radius: 10px;
                    font-weight: 700;
                    color: ${({ theme }) => theme.colors.white};
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: transparent;
                    border: 2px solid ${({ theme }) => theme.colors.colorMiddle};
                }
            }
        }

        @media (max-width: 768px) {
            form {
                padding: 18px;
                max-width: unset;

                header {
                    grid-template-columns: 1fr;

                    label {
                        margin: 0 auto;
                    }
                }

                div.form-content {
                    div {
                        grid-column: 1/7 !important;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        padding: unset;
        header {
            display: none;
        }
    }
`;
