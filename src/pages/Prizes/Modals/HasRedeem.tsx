import { ContextModal } from "pages/Prizes/Prizes";
import { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { cepFormatter, cpfFormatter, phoneFormatter } from "utils/helpers";
import { ReactComponent as CubeIcon } from "assets/imgs/cube.svg";
import { ReactComponent as GiftIcon } from "/public/assets/img/icons/gift-icon.svg";
import { ReactComponent as GiftsIcon } from "/public/assets/img/icons/gifts-icon.svg";

import { MenuProps } from "antd/es";
import Dropdown from "antd/es/dropdown";


export const ModalContentHasRedeem = ({ selectedSize, setSelectedSize }: { selectedSize: string; setSelectedSize: (_: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false)
    const {
        currentPrize,
        addressData,
        handleRedeem,
        isLoading,
        setIsModalOpen,
        user,
        redeemSuccess,
        setRewardStatus
    } = useContext(ContextModal);

    const sizes = useMemo(() => {
        const currentSizes = currentPrize?.sizes?.map((size, index) => ({
            key: String(index + 1),
            label: size,
        }))

        if(currentSizes) {
            setSelectedSize(currentSizes[0].label)
        }

        return currentSizes
    }, [currentPrize?.sizes]) as MenuProps['items'];

    // console.log('sizes', sizes)

    // Caso tenha sido feito o pedido de resgate
    if (redeemSuccess) {
        return (
            <>
                <section className="gift">
                    <img src={currentPrize?.images![0]} alt={`Camiseta`} />
                </section>

                <section className='status-redeem'>
                    <h3>Parabéns {"\n"}colecionador </h3>
                    <p style={{ color: 'var(--color-middle)' }}>Só mais um pouquinho e você {"\n"} receberá sua recompensa.</p>

                    <div className="d-flex gap-4">
                        {/* create new array with 3 positions and add GiftsIcon */}
                        {[...Array(3)].map((_, index) => (
                            <GiftsIcon key={index} width={64} height={64} />
                        ))}
                    </div>
                </section>
            </>
        )
    }

    return (
        <>
            {/* caso prêmio já foi resgatado */}
            {currentPrize?.redeemStatus > 0 && (
                <>
                    <section className="gift-status">
                        <img src={currentPrize?.images![0]} alt={`Camiseta`} />
                    </section>

                    <section className='status-redeem'>
                        <h3>Status da {"\n"}Recompensa </h3>
                        <p><strong>{currentPrize?.title}</strong></p>


                        {currentPrize?.redeemStatus === 1 ? (
                            <div className="status">
                                <span>
                                    Sendo produzido
                                </span>
                            </div>
                        ) : (
                            <div className="status sent">
                                <span>
                                    Pedido enviado
                                </span>
                            </div>
                        )}

                        <footer>
                            {currentPrize?.redeemStatus === 1 ? (
                                <div>
                                    <CubeIcon />

                                    <span>
                                        Só mais um pouquinho e já {"\n"}é quase seu!
                                    </span>
                                </div>
                            ) : (
                                <div>
                                    <GiftIcon width={24} height={24} className="gift-icon" />
                                    <span>
                                        Tá na cara do gol! Em breve {"\n"}você estará no estilo PRUU!
                                    </span>
                                </div>
                            )}

                            {currentPrize?.redeemInfo && (
                                <strong>{currentPrize?.redeemInfo}</strong>
                            )}
                        </footer>
                    </section>
                </>
            )}

            {/* caso prêmio ainda não foi resgatado */}
            {!currentPrize?.redeemStatus && (
                <>
                    <section className="gift">
                        <h3>Resgate {'\n'}de Prêmios
                            <img className='gift-icon' src="/assets/img/icons/gifts-icon.svg" alt="" />
                        </h3>
                        <img src={currentPrize?.images![0]} alt={`Camiseta`} />

                        {currentPrize?.sizes && currentPrize?.sizes?.length > 0 && (
                            <div className="select-size-container">
                                <Dropdown
                                    trigger={['click']}
                                    open={isOpen}
                                    menu={{
                                        items: sizes,
                                        selectable: true,
                                        onSelect: (key) => setSelectedSize(sizes?.[Number(key.key) - 1]?.label)
                                    }}
                                >
                                    <div className="select-size" onClick={() => setIsOpen(!isOpen)}>
                                        <div className="size-box">
                                            <div className="selected-size">
                                                <span>
                                                    {selectedSize}
                                                </span>
                                            </div>

                                            <svg className={isOpen ? "open" : ""} width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.48667 7.9973C8.20344 7.99782 7.92896 7.90487 7.71088 7.73458L0.437897 2.02324C0.190353 1.82936 0.0346815 1.55074 0.00512927 1.2487C-0.024423 0.946653 0.0745647 0.645916 0.280316 0.412646C0.486067 0.179376 0.781727 0.0326817 1.10226 0.00483352C1.42278 -0.0230146 1.74192 0.0702645 1.98947 0.264151L8.48667 5.38151L14.9839 0.446915C15.1079 0.352031 15.2505 0.281175 15.4037 0.238417C15.5568 0.19566 15.7174 0.181846 15.8762 0.197768C16.0351 0.213691 16.189 0.259035 16.3292 0.331196C16.4693 0.403358 16.593 0.500913 16.693 0.618254C16.804 0.735704 16.8881 0.873491 16.94 1.02298C16.9918 1.17248 17.0104 1.33045 16.9945 1.48702C16.9785 1.64358 16.9285 1.79535 16.8474 1.93283C16.7663 2.07031 16.656 2.19053 16.5233 2.28596L9.25033 7.80311C9.02598 7.94649 8.7571 8.01486 8.48667 7.9973Z" fill="#767EA8" />
                                            </svg>
                                        </div>
                                    </div>
                                </Dropdown>

                                <span className="size-title" onClick={() => setIsOpen(true)}>Defina o tamanho</span>
                            </div>
                        )}


                    </section>

                    <section className='confirm-address'>
                        <h3>Confirme os seus dados</h3>
                        <p>Me confirme o seus dados para que a gente consiga te enviar o mais rápido possivel.</p>

                        <div className="fake-form">
                            <div className="form">
                                <div>
                                    <label>Nome:</label>
                                    <span>{user?.name}</span>
                                </div>
                            </div>

                            <div className="second-row form">
                                <div>
                                    <label>Telefone:</label>
                                    <span>{phoneFormatter(user?.full_number || "") || ""}</span>
                                </div>

                                <div>
                                    <label>CPF:</label>
                                    <span>{cpfFormatter(user?.cpf || "") || ""}</span>
                                </div>
                            </div>

                            <div className="third-row form mt-3">
                                <div>
                                    <label>CEP:</label>
                                    <span>{cepFormatter(user?.address_zip_code || '') || ""}</span>

                                    <label className='ms-5'>UF:</label>
                                    <span>{addressData?.uf || ""}</span>
                                </div>

                                <div>
                                    <label>Cidade:</label>
                                    <span>{addressData?.localidade || ''}</span>
                                </div>
                            </div>

                            <div className="fourth-row form">
                                <div>
                                    <label>Endereço:</label>
                                    <span>{addressData?.logradouro || ''}</span>
                                </div>

                                <div>
                                    <label>Nº:</label>
                                    <span>{user?.address_number || ''}</span>
                                </div>
                            </div>

                            <div className="fifth-row form mt-3">
                                <div>
                                    <label>Bairro:</label>
                                    <span>{addressData?.bairro || ''}</span>
                                </div>

                                <div>
                                    <label>Complemento:</label>
                                    <span>{user?.address_complement || ''}</span>
                                </div>
                            </div>
                        </div>

                        <footer>
                            <span>Tudo certo quero resgatar</span>

                            <div className="footer-buttons">
                                <button onClick={handleRedeem}>
                                    {isLoading ?
                                        (
                                            <div className="spinner-border text-dark" role="status">
                                            </div>
                                        )
                                        : 'Confirmar'
                                    }
                                </button>

                                <button onClick={() => setIsModalOpen(false)}>
                                    <Link to='/profile'>
                                        Editar Dados
                                    </Link>
                                </button>
                            </div>
                        </footer>
                    </section>
                </>
            )
            }
        </>
    )
}
