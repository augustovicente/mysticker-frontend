import Col from "antd/es/col"
import { PasteStickerModal, StikerContainer } from "../styles"
import { ReactComponent as LockIcon } from "assets/imgs/lock.svg"
import { ReactComponent as BurnIcon } from "/public/assets/img/icons/paste-burn-green-icon.svg"
import Logo from 'assets/imgs/card-paste.png';
import { useTheme } from "styled-components"
import { useToggle } from "hooks/useToggle"
import { paste_stickers } from "models/User"

type StickerProps = {
    status: 'can' | 'cant' | 'pasted' | 'loading';
    handlePasteStickers: () => void;
    isLoading: boolean;
    teamId: number;
}

export const PasteSticker = ({ status, handlePasteStickers, isLoading, teamId }: StickerProps) => {
    const [isModalOpen, setIsModalOpen] = useToggle(false)
    const theme = useTheme();

    return (
        <>
            <Col xxl={6} xl={5} md={4} sm={5}>
                <StikerContainer
                    className="sticker"
                    onClick={() => setIsModalOpen(true)}
                    isLatest={true}
                >
                    {status !== 'pasted' ? (
                        <>
                            <img className="background-paste" src={Logo} alt="" />

                            {status === 'cant' && (
                                <LockIcon className="lock-icon" />
                            )}

                            <footer>
                                <button>
                                    <BurnIcon width={18} height={18} />
                                    Colar figurinhas
                                </button>

                                <h6 className="close-team">FECHE O TIME AQUI</h6>
                            </footer>
                        </>
                    ) : status === 'pasted' ? (
                        <>
                            <img
                                className={`player-pasted`}
                                src={`https://dffla95hrvs5u.cloudfront.net/${teamId}.png`}
                                alt=""
                                onError={(e) => {
                                    e.currentTarget.src = `/copa_pruu/${teamId}.png`
                                }}
                            />
                        </>
                    ) : null}
                </StikerContainer>
            </Col>

            <PasteStickerModal
                maskStyle={{ background: theme.colors.dark, opacity: 0.9 }}
                centered
                open={status === 'can' && isModalOpen}
                onCancel={() => !isLoading && setIsModalOpen(false)}
            >
                <main>
                    <h3>Deseja fechar o time?</h3>

                    <p>
                        <strong>OBS</strong>: Ao fechar o time você <strong>irá colar todas as figurinhas</strong> no album e resgatara a da bandeira do respectiva nação.
                        <br /><br />
                        Só poderam <strong>resgatar os prêmios</strong> aqueles que colarem todas as figurinhas do continente.
                    </p>
                </main>

                <footer>
                    <button disabled={isLoading} onClick={() => handlePasteStickers()}>
                        {isLoading ? (
                            <div className="spinner-border spinner-border-md" role="status">
                            </div>
                        ) : 'Sim'}
                    </button>

                    <button disabled={isLoading} onClick={() => setIsModalOpen(false)}>
                        Não
                    </button>
                </footer>

            </PasteStickerModal>
        </>

    )
}
