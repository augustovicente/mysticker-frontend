import { ContextModal } from "pages/Prizes/Prizes";
import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { cepFormatter, cpfFormatter, phoneFormatter } from "utils/helpers";
import { ReactComponent as CubeIcon } from "assets/imgs/cube.svg";
import { ReactComponent as GiftIcon } from "/public/assets/img/icons/gift-icon.svg";
import { ReactComponent as GiftsIcon } from "/public/assets/img/icons/gifts-icon.svg";

import { MenuProps } from "antd/es";
import Dropdown from "antd/es/dropdown";


export const ModalContentHasRedeem = () => {
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
        return currentPrize?.sizes?.map((size, index) => ({
            key: String(index + 1),
            label: size,
        }))
    }, [currentPrize?.sizes]) as MenuProps['items'];

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

                        <div className="img-prize">
                            <img src={currentPrize?.images![0]} alt={`Camiseta`} />

                            {currentPrize?.sizes && currentPrize?.sizes?.length > 0 && (
                                <Dropdown
                                    className="drop-sizes"
                                    trigger={['click']}
                                    menu={{
                                        items: sizes,
                                        selectable: true,
                                        onSelect: (key) => {
                                            const size = sizes?.[Number(key.key) - 1]?.label;

                                            console.log(size);


                                            // search for current prize and update size
                                            // const prize = currentPrize?.find((prize) => prize.id === currentPrize?.id);
                                        }
                                    }}
                                >
                                    <div className="select-size">
                                        <strong className="size-title">Defina o tamanho</strong>
                                    </div>
                                </Dropdown>
                            )}
                        </div>
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
