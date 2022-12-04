import { useCallback, useState, useMemo, useEffect } from "react"
import { Link } from "react-router-dom"
import { Sticker } from "./components/Sticker"
import { teamsIconList } from "./mocks/teamsIconList"
import { teamsNameList } from "./mocks/teamsNameList"
import { AlbumContainer } from "./styles"
import { stickers } from "./mocks/stickers"
import { Row } from "antd"
import { getPackages, get_owned_teams, get_owned_tokens, paste_stickers } from "models/User"
import axios from "axios"
import { toast } from "react-toastify"
import { AlbumSkeletons } from "./components/Skeletons/Skeletons"
import { useAuth } from "contexts/auth.context"
import { WalletErrorModal } from "./components/Skeletons/styles"
import { ReactComponent as HomeIcon } from "../../assets/imgs/home.svg"
import { orderBy } from "lodash"
import { useScrollToElement } from "hooks/useScrollToElement"
import { PasteSticker } from "pages/Album/components/PasteSticker"
import { useToggle } from "hooks/useToggle"
import { useTranslation } from "react-i18next"

export const Album = () => {
    const [teamsGroupSelected, setTeamsGroupSelected] = useState("todos")
    const [teamIndexSelected, setTeamSelected] = useState(0)
    const [ownedStickers, setOwnedStickers] = useState<string[]>(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'])
    const [isLoading, setIsLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [availablePackages, setAvailablePackages] = useState<number>(0)
    const [players, setPlayers] = useState<{ id: number; name: string; rarity: number; }[]>([])
    const [statusPaste, setStatusPaste] = useState<'can' | 'cant' | 'pasted'>('cant')
    const [pasteLoading, setPasteLoading] = useToggle(false);
    const { user } = useAuth()
    const { t } = useTranslation()

    const groupOfTeams = useMemo(() => {
        const group = teamsIconList.filter(({ teams, teamsGroupName }) => teamsGroupName === teamsGroupSelected)
        return orderBy(group[0]?.teams, "name", "asc")
    }, [teamsGroupSelected])

    const currentTeamSelected = useMemo(() => {
        const team = stickers.filter(({ country, players }) => country.toLocaleLowerCase().replaceAll(" ", "-") === groupOfTeams[teamIndexSelected].name.toLowerCase().replaceAll(" ", "-") && players)
        setPlayers(orderBy(team[0].players, "rarity", "asc"))
        return team[0]
    }, [groupOfTeams, teamIndexSelected, teamsGroupSelected])

    const ownedStikersAmount = useMemo(() => {
        return ownedStickers.reduce((counter, owned) => parseInt(owned) > 0 ? counter + 1 : counter, 0)
    }, [ownedStickers])

    const handlePasteStickers = async () => {
        setPasteLoading(true)

        const res: any = await paste_stickers(currentTeamSelected?.id)
            .finally(() => setPasteLoading(false))

        if (res.status === 200) {
            setStatusPaste('pasted');
            toast.success('Time fechado com sucesso!', { toastId: 'success' });
            update_packages();
        }
    }

    // Caso possua o time inteiro e ainda não tenha colado as figurinhas
    useEffect(() => {
        if (ownedStikersAmount === 11) {
            setIsLoading(true)

            get_owned_teams([currentTeamSelected?.id])
                .then(res => {
                    if (res[0] === '0') {
                        setStatusPaste('can')
                    } else if (res[0] === '1') {
                        setStatusPaste('pasted')
                    }
                })
                .finally(() => setIsLoading(false))
        }
    }, [teamIndexSelected, ownedStikersAmount, availablePackages])

    useEffect(() => {
        const response = async () => {
            setIsLoading(true)

            if (!user) {
                setIsLoading(false)
            } else {
                try {
                    const response = await get_owned_tokens(currentTeamSelected.players.map(player => player.id))
                    setOwnedStickers(response)
                    setIsLoading(false)
                } catch (error) {
                    setIsModalOpen(true)
                    if (axios.isAxiosError(error)) {
                        if (error.response?.status === 405) {
                            return toast.error(error?.response?.data?.message)
                        }

                        return toast.error("Erro inesperado.")
                    } else {
                        console.log('unexpected error: ', error)
                        return toast.error("Conecte-se a rede Polygon")
                    }
                }
            }
        }

        response()
    }, [currentTeamSelected])

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    useScrollToElement(".selected-team", teamIndexSelected)

    const handleSelectNewTeamGroup = (name: string) => {
        setTeamsGroupSelected(name)
        setTeamSelected(0)
    }

    const handleNextTeam = useCallback(() => {
        if (teamIndexSelected < groupOfTeams.length - 1) {
            setTeamSelected(teamIndexSelected + 1)
        }
    }, [teamIndexSelected, groupOfTeams])

    const handlePreviewTeam = useCallback(() => {
        if (teamIndexSelected > 0) {
            setTeamSelected(teamIndexSelected - 1)
        }
    }, [teamIndexSelected, groupOfTeams])

    const update_packages = async () => {
        getPackages().then((response: any) => {
            setAvailablePackages(parseInt(response[0]) + parseInt(response[1]) + parseInt(response[2]))
        })
    }

    useEffect(() => {
        update_packages()
    }, [])

    return (
        <AlbumContainer>
            <header className="album-header-container">
                <h1 className="title">
                    <img src="/assets/img/icons/album-icon.svg" alt="" />
                    {t('album.title')}
                </h1>

                <ul className="teams-name-list">
                    {teamsNameList.map(({ name, title }, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelectNewTeamGroup(name)}
                            className={name === teamsGroupSelected ? `selected` : ""}
                        >
                            {t('album.teams-list.' + name)}
                        </li>
                    ))}
                </ul>

                <ul className="team-icons-list">
                    {user && availablePackages > 0 && (
                        <Link className={`available-packages ${availablePackages > 9 && "two"}`} to={user ? "/my-packages" : ""}>
                            <p>
                                +
                                <span>{availablePackages}</span>
                            </p>
                            Pacotinho Disponivel
                        </Link>
                    )}
                    {groupOfTeams.map(({ name }, index) => (
                        <li
                            key={name}
                            className={teamIndexSelected === index ? `selected-team` : ""}
                            onClick={() => setTeamSelected(index)}
                        >
                            <img src={`/assets/img/icons/team-flags/${teamsGroupSelected.toLowerCase()}/${name.toLowerCase().replaceAll(" ", "-")}.svg`} alt="" />
                            {name}
                        </li>
                    ))}
                </ul>
            </header>

            <main className="album-main-content-container">
                <div className="album-main-content">
                    <div className="header">
                        <div className="header-counter">
                            <span className="current-counter">
                                {ownedStikersAmount}
                            </span>

                            <span className="total-counter">
                                /
                                {
                                    currentTeamSelected.players?.length < 10
                                        ? `0${currentTeamSelected.players?.length}`
                                        : currentTeamSelected.players?.length
                                }
                            </span>

                        </div>

                        <div className="header-title">
                            <div className="title">
                                <button onClick={handlePreviewTeam} className={'next'}>
                                    <img src="/assets/img/icons/arrow-left-white.svg" alt="" />
                                </button>
                                <span>{groupOfTeams[teamIndexSelected]?.name}</span>
                                <button onClick={handleNextTeam} className={'prev'}>
                                    <img src="/assets/img/icons/arrow-right-white.svg" alt="" />
                                </button>
                            </div>
                        </div>

                        <span className="fill">
                            {
                                teamIndexSelected < 9
                                    ? `0${teamIndexSelected + 1}`
                                    : teamIndexSelected + 1
                            }
                        </span>
                    </div>

                    <div className="sticker-container">
                        <div className="sticker-content-desktop">
                            <Row className="sticker-row">
                                {players.map((sticker, index) => index < 6 && (
                                    <>
                                        {isLoading ? (
                                            <AlbumSkeletons key={sticker.id} />
                                        ) : (
                                            <Sticker
                                                key={sticker.id}
                                                index={index}
                                                ownedStickers={ownedStickers}
                                                stickerId={sticker.id}
                                                rarity={sticker.rarity}
                                                name={sticker.name}
                                            />
                                        )}
                                    </>
                                ))}
                            </Row>

                            <Row className="sticker-row">
                                {players.map((sticker, index) => index >= 6 && (
                                    <>
                                        {isLoading ? (
                                            <AlbumSkeletons key={sticker.id} />
                                        ) : (
                                            <Sticker
                                                key={sticker.id}
                                                index={index}
                                                ownedStickers={ownedStickers}
                                                stickerId={sticker.id}
                                                rarity={sticker.rarity}
                                                name={sticker.name}
                                            />
                                        )}
                                    </>
                                ))}

                                {/* figurinha do time */}
                                {isLoading ? (
                                    <AlbumSkeletons />
                                ) : (
                                    <PasteSticker
                                        status={statusPaste}
                                        isLoading={pasteLoading}
                                        handlePasteStickers={handlePasteStickers}
                                        teamId={currentTeamSelected.id}
                                    />
                                )}
                            </Row>

                        </div>
                        <div className="sticker-content-mobile">
                            <Row className="sticker-row">
                                {players.map((sticker, index) => (
                                    <>
                                        {isLoading ? (
                                            <AlbumSkeletons key={sticker.id} />
                                        ) : (
                                            <Sticker
                                                key={sticker.id}
                                                index={index}
                                                ownedStickers={ownedStickers}
                                                stickerId={sticker.id}
                                                rarity={sticker.rarity}
                                                name={sticker.name}
                                            />
                                        )}
                                    </>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </main>

            <WalletErrorModal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <h1><span style={{ color: "#6345EE", fontWeight: "bold" }}>Rede</span> incorreta!</h1>
                <p>Conecte sua carteira digital a rede <span style={{ color: "#6345EE", fontWeight: "bold" }}>Goerli.</span></p>
                <a href="/album">
                    <HomeIcon />

                    Recarregar a página
                </a>
            </WalletErrorModal>
        </AlbumContainer>
    )
}



