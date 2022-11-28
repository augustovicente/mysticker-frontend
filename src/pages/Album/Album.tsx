import { useCallback, useState, useMemo, useEffect } from "react"
import { Link } from "react-router-dom"
import { Sticker } from "./components/Sticker"
import { teamsIconList } from "./mocks/teamsIconList"
import { teamsNameList } from "./mocks/teamsNameList"
import { AlbumContainer } from "./styles"
import { stickers } from "./mocks/stickers"
import { Col, Row } from "antd"
import { get_owned_tokens } from "models/User"

const ownedStickers: number[] = [
    263,
    262
]

export const Album = () => {
    const [teamsGroupSelected, setTeamsGroupSelected] = useState("todos")
    const [teamIndexSelected, setTeamSelected] = useState(0)

    const groupOfTeams = useMemo(() => {
        const group = teamsIconList.filter(({ teams, teamsGroupName }) => teamsGroupName === teamsGroupSelected)
        return group[0]?.teams
    }, [teamsGroupSelected])

    const currentTeamSelected = useMemo(() => {
        const players = stickers.filter(({ country, players }) => country.toLocaleLowerCase().replaceAll(" ", "-") === groupOfTeams[teamIndexSelected].name.toLocaleLowerCase().replaceAll(" ", "-") && players)
        return players[0]
    }, [groupOfTeams, teamIndexSelected, teamsGroupSelected])

    const ownedStikersAmount = useMemo(() => {
        return currentTeamSelected.players.reduce((counter, player) => ownedStickers.includes(player.id) ? counter + 1 : counter, 0)
    }, [groupOfTeams, teamIndexSelected, teamsGroupSelected])

    useEffect(() => {
        const response = async () => {
            const test = await get_owned_tokens(currentTeamSelected.players.map(player => player.id));
            console.log(test)
        }

        response()
    }, [currentTeamSelected])

    const handleSelectNewTeamGroup = useCallback((name: string) => {
        setTeamsGroupSelected(name)
        setTeamSelected(0)
    }, [])

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

    return (
        <AlbumContainer>
            <header className="album-header-container">
                <h1 className="title">
                    <img src="/assets/img/icons/album-icon.svg" alt="" />
                    Álbum
                </h1>

                <ul className="teams-name-list">
                    {teamsNameList.map(({ name, title }, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelectNewTeamGroup(name)}
                            className={name === teamsGroupSelected ? `selected` : ""}
                        >
                            {title}
                        </li>
                    ))}
                </ul>

                <ul className="team-icons-list">
                    <Link className="available-packages" to="/my-packages">
                        <p>
                            +
                            <span>3</span>
                        </p>
                        Pacotinho Disponivel
                    </Link>
                    {groupOfTeams.map(({ name }, index) => (
                        <li
                            key={index}
                            className={teamIndexSelected === index ? `selected` : ""}
                            onClick={() => setTeamSelected(index)}
                        >
                            <img src={`/assets/img/icons/team-flags/${teamsGroupSelected.toLocaleLowerCase()}/${name.toLocaleLowerCase().replaceAll(" ", "-")}.svg`} alt="" />
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
                                <button onClick={handlePreviewTeam}>
                                    <img src="/assets/img/icons/arrow-left-white.svg" alt="" />
                                </button>
                                <span>{groupOfTeams[teamIndexSelected]?.name}</span>
                                <button onClick={handleNextTeam}>
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
                                {currentTeamSelected?.players.map((sticker, index) => index < 6 && (
                                    <Sticker
                                        key={sticker.id}
                                        stickerId={sticker.id}
                                        rarity={sticker.rarity}
                                        name={sticker.name}
                                        country_id={currentTeamSelected.id}
                                    />
                                ))}
                            </Row>

                            <Row className="sticker-row">
                                {currentTeamSelected?.players.map((sticker, index) => index >= 6 && (
                                    <Sticker
                                        key={sticker.id}
                                        stickerId={sticker.id}
                                        rarity={sticker.rarity}
                                        name={sticker.name}
                                        country_id={currentTeamSelected.id}
                                    />
                                ))}
                            </Row>
                        </div>
                        <div className="sticker-content-mobile">
                            <Row className="sticker-row">
                                {currentTeamSelected?.players.map((sticker, index) => (
                                    <Sticker
                                        key={sticker.id}
                                        stickerId={sticker.id}
                                        rarity={sticker.rarity}
                                        name={sticker.name}
                                        country_id={currentTeamSelected.id}
                                    />
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </main>
        </AlbumContainer>
    )
}



