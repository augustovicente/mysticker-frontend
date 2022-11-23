import { useCallback, useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { teamsIconList } from "./mocks/teamsIconList"
import { teamsNameList } from "./mocks/teamsNameList"
import { AlbumContainer } from "./styles"

export const Album = () => {
    const [teamsGroupSelected, setTeamsGroupSelected] = useState("all")
    const [teamSelected, setTeamSelected] = useState(0)

    const groupOfTeams = useMemo(() => {
        const group = teamsIconList.filter(({ teams, teamsGroupName }) => teamsGroupName === teamsGroupSelected)
        return group[0].teams
    }, [teamsGroupSelected])

    const handleNextTeam = useCallback(() => {
        if(teamSelected < groupOfTeams.length -1) {
            setTeamSelected(teamSelected + 1);
        }
    }, [teamSelected, groupOfTeams])

    const handlePreviewTeam = useCallback(() => {
        if(teamSelected > 0) {
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
                    {groupOfTeams.map(({ icon, name }, index) => (
                        <li
                            key={index}
                            className={teamSelected === index ? `selected` : ""}
                            onClick={() => setTeamSelected(index)}
                        >
                            <img src={icon} alt="" />
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
                                    groupOfTeams.length < 10
                                        ? `0${groupOfTeams.length}`
                                        : groupOfTeams.length
                                }
                            </span>

                        </div>

                        <div className="header-title">
                            <button onClick={handlePreviewTeam}>
                                <img src="/assets/img/icons/arrow-left-white.svg" alt="" />
                            </button>
                            <span>{groupOfTeams[teamSelected]?.name}</span>
                            <button onClick={handleNextTeam}>
                                <img src="/assets/img/icons/arrow-right-white.svg" alt="" />
                            </button>
                        </div>

                        <span></span>
                    </div>

                    <div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>

                    <div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </main>
        </AlbumContainer>
    )
}
