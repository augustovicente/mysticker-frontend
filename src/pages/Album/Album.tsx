import { useCallback, useState, useMemo, useEffect } from "react"
import { Link } from "react-router-dom"
import { Sticker } from "./components/Sticker"
import { teamsIconList } from "./mocks/teamsIconList"
import { teamsNameList } from "./mocks/teamsNameList"
import { AlbumContainer } from "./styles"
import { stickers } from "./mocks/stickers"

export const Album = () => {
    const [teamsGroupSelected, setTeamsGroupSelected] = useState("todos")
    const [teamSelected, setTeamSelected] = useState(0)
    const [currentTeam, setCurrentTeam] = useState<{ name: string; }>({ name: "" });

    const groupOfTeams = useMemo(() => {
        const group = teamsIconList.filter(({ teams, teamsGroupName }) => teamsGroupName === teamsGroupSelected)
        return group[0]?.teams
    }, [teamsGroupSelected])

    useEffect(() => {
        setCurrentTeam(groupOfTeams[teamSelected])
    }, [])

    const handleNextTeam = useCallback(() => {
        if (teamSelected < groupOfTeams.length - 1) {
            setTeamSelected(teamSelected + 1);
        }
    }, [teamSelected, groupOfTeams])

    const handlePreviewTeam = useCallback(() => {
        if (teamSelected > 0) {
            setTeamSelected(teamSelected - 1);
        }
    }, [teamSelected, groupOfTeams])

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
                            onClick={() => setTeamsGroupSelected(name)}
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
                            className={teamSelected === index ? `selected` : ""}
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
                                {
                                    teamSelected.toString().length < 10
                                        ? `0${teamSelected + 1}`
                                        : teamSelected + 1
                                }
                            </span>

                            <span className="total-counter">
                                /
                                {
                                    groupOfTeams?.length < 10
                                        ? `0${groupOfTeams?.length}`
                                        : groupOfTeams?.length
                                }
                            </span>

                        </div>

                        <div className="header-title">
                            <div className="title">
                                <button onClick={handlePreviewTeam}>
                                    <img src="/assets/img/icons/arrow-left-white.svg" alt="" />
                                </button>
                                <span>{groupOfTeams[teamSelected]?.name}</span>
                                <button onClick={handleNextTeam}>
                                    <img src="/assets/img/icons/arrow-right-white.svg" alt="" />
                                </button>
                            </div>
                        </div>

                        <span className="fill"></span>
                    </div>

                    <div className="sticker-container">
                        <div className="sticker-content">
                            {/* <div className="sticker-row">
                                 {groupOfTeams[teamSelected]?.players.map((sticker, index) => index < 6 && (
                                     <Sticker
                                         teamsGroupSelected={teamsGroupSelected}
                                         team={groupOfTeams[teamSelected]}
                                         key={index}
                                         stickerId={sticker.id}
                                     />
                                 ))}
                             </div>

                             <div className="sticker-row">
                                 {groupOfTeams[teamSelected]?.players.map((sticker, index) => index >= 6 && (
                                     <Sticker
                                         teamsGroupSelected={teamsGroupSelected}
                                         team={groupOfTeams[teamSelected]}
                                         key={index}
                                         stickerId={sticker.id}
                                     />
                                 ))}
                             </div> */}
                        </div>
                    </div>
                </div>
            </main>


        </AlbumContainer>
    )
}



