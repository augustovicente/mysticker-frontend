import * as S from './styles';
import { ReactComponent as RewardIcon } from 'assets/imgs/reward.svg';
import { teamsNameList } from 'pages/Album/mocks/teamsNameList';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { teamsIconList as teamsList } from 'pages/Album/mocks/teamsIconList';
import { GradientOverlay } from 'Components/GradientOverlay';
import { ReactComponent as ArrowIcon } from 'assets/imgs/arrow-left-white.svg';
import tShirt from 'assets/imgs/shirt-reward.png';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion'
import { usePrevious } from 'hooks/usePrevious';
import { Button } from 'antd';

export const Rewards = () => {
    const [teamsGroupSelected, setTeamsGroupSelected] = useState("todos");
    const [teamIndexSelected, setTeamIndexSelected] = useState(0);
    const prevTeamsGroupSelected = usePrevious(teamsNameList.findIndex(({ name }) => name === teamsGroupSelected));

    const teamsIconList = teamsList.map((team) => {
        team.teams.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        return team;
    });

    const groupOfTeams = useMemo(() => {
        const group = teamsIconList.filter(({ teams, teamsGroupName }) => teamsGroupName === teamsGroupSelected)
        return group[0]?.teams
    }, [teamsGroupSelected]);

    const handlePreviousOrNextTeam = (direction: 'previous' | 'next') => {
        const index = teamsNameList.findIndex(({ name }) => name === teamsGroupSelected)

        if (direction === 'next') {
            const nextIndex = index + 1
            const nextGroup = teamsNameList[nextIndex]?.name
            if (nextGroup) {
                setTeamsGroupSelected(nextGroup)
                setTeamIndexSelected(0)
            }
        }
        else {
            const previousIndex = index - 1
            const previousGroup = teamsNameList[previousIndex]?.name
            if (previousGroup) {
                setTeamsGroupSelected(previousGroup)
                setTeamIndexSelected(0)
            }
        }
    }

    return (
        <S.RewardsContainer>
            <>
                <header>
                    <div className='title'>
                        <RewardIcon />
                        <h2>Prêmios</h2>
                    </div>
                </header>

                <section>
                    <ul className="teams-name-list">
                        {teamsNameList.map((team) => (
                            <li
                                key={team.name}
                                onClick={() => setTeamsGroupSelected(team.name)}
                                className={team.name === teamsGroupSelected ? `selected` : ""}
                            >
                                {team.title}
                            </li>
                        ))}
                    </ul>
                </section>

                <main>
                    <aside className='left'>
                        <div className='mobile-reward'>
                            <div className="reward">
                                <img src={tShirt} alt={`Camiseta`} />
                            </div>

                            <div className="description">
                                <h1>Camiseta Pru</h1>
                                <p>
                                    Ao completar todas as figuras desse continente você pode resgater essa camiseta
                                </p>
                            </div>

                            <footer className='d-flex align-items-center gap-5'>
                                <h1>01/04</h1>

                                <Button>
                                    Resgate
                                </Button>

                            </footer>
                        </div>

                        <header>
                            <div className="group">
                                <h3>{
                                    teamsNameList.find(({ name }) => name === teamsGroupSelected)?.title
                                }</h3>
                            </div>

                            <div className="selector">
                                <div className="box-buttons">
                                    <button
                                        onClick={() => handlePreviousOrNextTeam('previous')}
                                        disabled={teamsGroupSelected === "todos"}
                                    >
                                        <ArrowIcon width={20} height={20} />
                                    </button>

                                    <div className="divider"></div>

                                    <button
                                        onClick={() => handlePreviousOrNextTeam('next')}
                                        disabled={teamsGroupSelected === "europa"}
                                    >
                                        <ArrowIcon width={20} height={20} />
                                    </button>
                                </div>
                            </div>

                            <div className='group-selector-mobile'>
                                <button
                                    onClick={() => handlePreviousOrNextTeam('previous')}
                                    disabled={teamsGroupSelected === "todos"}
                                >
                                    <ArrowIcon width={20} height={20} />
                                </button>

                                <h3>{
                                    teamsNameList.find(({ name }) => name === teamsGroupSelected)?.title
                                }</h3>

                                <button
                                    onClick={() => handlePreviousOrNextTeam('next')}
                                    disabled={teamsGroupSelected === "europa"}
                                >
                                    <ArrowIcon width={20} height={20} />
                                </button>
                            </div>
                        </header>

                        <div className='teams'>
                            <AnimatePresence initial={false}>
                                <ul className="teams-list">
                                    {groupOfTeams.map(({ name }, index) => (
                                        <motion.li
                                            key={name}
                                            initial={{ x: prevTeamsGroupSelected < teamsNameList.findIndex(({ name }) => name === teamsGroupSelected) ? 1400 : -1400 }}
                                            animate={{ x: 0 }}
                                            exit={{ x: prevTeamsGroupSelected < teamsNameList.findIndex(({ name }) => name === teamsGroupSelected) ? -1400 : 1400 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className={teamIndexSelected === index ? `selected` : ""}
                                            onClick={() => setTeamIndexSelected(index)}
                                        >
                                            <img src={`/assets/img/icons/team-flags/${teamsGroupSelected.toLocaleLowerCase()}/${name.toLocaleLowerCase().replaceAll(" ", "-")}.svg`} alt={`Bandeira ${name}`} />
                                            <span>
                                                {name}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </AnimatePresence>
                        </div>
                    </aside>

                    <aside className="right">
                        <div className="reward">
                            <img src={tShirt} alt={`Camiseta`} />
                        </div>

                        <div className="description">
                            <h1>Camiseta Pru</h1>
                            <p>
                                Ao completar todas as figuras desse continente você pode resgater essa camiseta
                            </p>
                        </div>

                        <footer className='d-flex align-items-center gap-5'>
                            <h1>01/04</h1>

                            <Button>
                                Resgate
                            </Button>

                        </footer>
                    </aside>

                </main>
            </>

            <GradientOverlay />
        </S.RewardsContainer>
    )
}
