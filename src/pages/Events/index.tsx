import { GradientOverlay } from "Components/GradientOverlay"
import { Timer } from "./components/Timer/Timer"
import { EventsContainer } from "./styles"

const socialsMock = [
    {
        title: "Sorteio Insta",
        description: "A expressão Lorem ipsum em design gráfico e",
        bg: "linear-gradient(to right, rgba(254, 69, 126, 1), rgba(181, 59, 254, 1))",
        icon: "/assets/img/icons/instagram-gradient-icon.svg"
    },
    {
        title: "Bolão twitter",
        description: "A expressão Lorem ipsum em design gráfico e",
        bg: "linear-gradient(to right, rgba(71, 148, 255, 1), rgba(181, 59, 254, 1))",
        icon: "/assets/img/icons/twitter-gradient-icon.svg"


    },
    {
        title: "Telegram",
        description: "A expressão Lorem ipsum em design gráfico e",
        bg: "linear-gradient(to right, rgba(70, 148, 255, 1), rgba(48, 229, 132, 1))",
        icon: "/assets/img/icons/telegram-gradient-icon.svg"

    }
]

export const Events = () => {
    const time = new Date()
    time.setSeconds(time.getSeconds() + 600)

    return (
        <EventsContainer>
            <h1 className="events-title">
                <img src="/assets/img/icons/events-icon.svg" />
                Eventos
            </h1>

            <main className="events-content">
                <div className="main-events-container">
                    <div className="main-events-content">
                        <div className="botecoverso-container">
                            <div className="title-timer">
                                <h3>Boteco Verso</h3>
                                <p>gráfico e editoração é um texto padrão em latim utilizado na produção gráfica par</p>

                                <div className="timer">
                                    <Timer expiryTimestamp={time} />
                                    <div className="timer-footer" />
                                </div>
                            </div>

                            <div className="botecoverso-img">
                            </div>
                        </div>

                        <div className="next-macthes-container-mobile">
                            <h3 className="title">Proximas partidas</h3>

                            <ul className="matches-list">
                                {new Array(5).fill('').map(item => (
                                    <li className="macth" key={item}>
                                        <div className="team-icon-name">
                                            <img src="/assets/img/icons/team-flags/africa/camarões.svg" alt="" />
                                            <h5>França</h5>
                                        </div>

                                        <div className="match-datehour">
                                            <span>07:30</span>
                                            21 nov
                                        </div>

                                        <div className="team-icon-name">
                                            <img src="/assets/img/icons/team-flags/africa/camarões.svg" alt="" />
                                            <h5>França</h5>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <ul className="socials-list">
                            {socialsMock.map(({ bg, description, title, icon }, index) => (
                                <li className="socials" key={index} style={{ background: `${bg}` }}>
                                    <h4>{title}</h4>

                                    <p>{description}</p>

                                    <div className="socials-icon">
                                        <img src={icon} alt="" />
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <ul className="socials-list-mobile">
                            {socialsMock.map(({ bg, description, title, icon }, index) => (
                                <li className="socials" key={index} >
                                    <div className="socials-content" style={{ background: `${bg}` }}>
                                        <h4>{title}</h4>

                                        <p>{description}</p>

                                        <div className="socials-icon">
                                            <img src={icon} alt="" />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="next-macthes-container">
                    <h3 className="title">Proximas partidas</h3>

                    <ul className="matches-list">
                        {new Array(5).fill('').map(item => (
                            <li className="macth" key={item}>
                                <div className="team-icon-name">
                                    <img src="/assets/img/icons/team-flags/africa/camarões.svg" alt="" />
                                    <h5>França</h5>
                                </div>

                                <div className="match-datehour">
                                    <span>07:30</span>
                                    21 nov
                                </div>

                                <div className="team-icon-name">
                                    <img src="/assets/img/icons/team-flags/africa/camarões.svg" alt="" />
                                    <h5>França</h5>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>

            <GradientOverlay />

        </EventsContainer>
    )
}
