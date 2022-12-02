import { ContextModal } from "pages/Prizes/Prizes";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { cepFormatter, cpfFormatter, phoneFormatter } from "utils/helpers";

export const ModalContentHasRedeem = () => {
    const {
        currentPrize,
        addressData,
        handleRedeem,
        isLoading,
        setIsModalOpen,
        user
    } = useContext(ContextModal);

    return (
        <>
            <section className="gift">
                <h3>Resgate {'\n'}de Prêmios
                    <img className='gift-icon' src="/assets/img/icons/gifts-icon.svg" alt="" />
                </h3>
                <img src={currentPrize?.images![0]} alt={`Camiseta`} />
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
