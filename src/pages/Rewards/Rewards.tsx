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
import { Button, Carousel } from 'antd';
import { useAuth } from 'contexts/auth.context';
import { Link } from 'react-router-dom';
import { get_owned_tokens } from 'models/User';
import { stickers } from 'assets/stickers';
import { useScrollToElement } from 'hooks/useScrollToElement';

export const Rewards = () => {
    const [teamsGroupSelected, setTeamsGroupSelected] = useState("todos");
    const [teamIndexSelected, setTeamIndexSelected] = useState(0);
    const [ownedStickers, setOwnedStickers] = useState<string[]>([]);
    const prevTeamsGroupSelected = usePrevious(teamsNameList.findIndex(({ name }) => name === teamsGroupSelected));
    const { user } = useAuth();

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

    // console.log('teamsGroupSelected', teamsGroupSelected)

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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const currentTeamSelected = useMemo(() => {
        const players = stickers.filter(({ country, players }) => country.toLocaleLowerCase().replaceAll(" ", "-") === groupOfTeams[teamIndexSelected].name.toLowerCase().replaceAll(" ", "-") && players)
        return players[0]
    }, [groupOfTeams, teamIndexSelected, teamsGroupSelected]);

    const ownedStikersAmount = useMemo(() => {
        return ownedStickers.reduce((counter, owned) => parseInt(owned) > 0 ? counter + 1 : counter, 0)
    }, [ownedStickers]);

    useEffect(() => {
        (async () => {
            setOwnedStickers(['1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0'])
            // const response = await get_owned_tokens(currentTeamSelected.players.map(player => player.id));

        }
        )();
    }, [])

    useScrollToElement('#selected-group', teamsGroupSelected)

    return (
        <S.RewardsContainer isAllSelected={teamsGroupSelected === 'todos'}>
            <>
                <header>
                    <div className='title'>
                        <RewardIcon />
                        <h2>Prêmios</h2>
                    </div>
                </header>

                <section>
                    <ul>
                        {teamsNameList.map((team) => (
                            <li
                                key={team.name}
                                onClick={() => setTeamsGroupSelected(team.name)}
                                id={team.name === teamsGroupSelected ? `selected-group` : ""}
                            >
                                {team.title}
                            </li>
                        ))}
                    </ul>
                </section>

                <main>
                    <aside className='left'>
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

                    <AnimatePresence>
                        {teamsGroupSelected !== 'todos' ? (
                            <motion.aside
                                className="right"
                                initial={{ x: 1400 }}
                                animate={{ x: 0 }}
                                exit={{ x: 1400 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="reward">
                                    <Carousel
                                        slidesToScroll={1}
                                        slidesToShow={1}
                                        draggable
                                        afterChange={() => { }}
                                    >
                                        <div>
                                            <img src={tShirt} alt={`Camiseta`} />
                                        </div>
                                        <div>
                                            <img src={tShirt} alt={`Camiseta`} />
                                        </div>
                                        <div>
                                            <img src={tShirt} alt={`Camiseta`} />
                                        </div>
                                    </Carousel>
                                </div>

                                <div className="description">
                                    <h3>Camiseta Pru</h3>
                                    <p>
                                        Ao completar todas as figuras desse continente você pode resgatar essa camiseta
                                    </p>
                                </div>

                                <footer className='d-flex align-items-center gap-3'>
                                    <h3>01<strong>/04</strong></h3>

                                    <button onClick={() => setIsModalOpen(true)}>
                                        <span>
                                            Resgate
                                        </span>
                                    </button>
                                </footer>
                            </motion.aside>
                        ) : null}
                    </AnimatePresence>
                </main>
            </>

            <S.RewardModal
                centered
                width={940}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
            >
                <S.RewardModalContainer>
                    <section className="gift">
                        <h3>Resgate {'\n'}de Prêmios
                            <img className='gift-icon' src="/assets/img/icons/gifts-icon.svg" alt="" />
                        </h3>
                        <img src={tShirt} alt={`Camiseta`} />
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
                                    <span>{user?.full_number}</span>
                                </div>

                                <div>
                                    <label>CPF:</label>
                                    <span>{user?.cpf}</span>
                                </div>
                            </div>

                            <div className="third-row form mt-3">
                                <div>
                                    <label>CEP:</label>
                                    <span>{user?.full_number}</span>

                                    <label className='ms-2'>UF:</label>
                                    <span>{user?.full_number}</span>
                                </div>

                                <div>
                                    <label>Cidade:</label>
                                    <span>{user?.cpf}</span>
                                </div>
                            </div>

                            <div className="fourth-row form">
                                <div>
                                    <label>Endereço:</label>
                                    <span>{user?.full_number}</span>
                                </div>

                                <div>
                                    <label>Nº:</label>
                                    <span>{user?.cpf}</span>
                                </div>
                            </div>

                            <div className="fifth-row form mt-3">
                                <div>
                                    <label>Bairro:</label>
                                    <span>{user?.full_number}</span>
                                </div>

                                <div>
                                    <label>Complemento:</label>
                                    <span>{user?.full_number}</span>
                                </div>
                            </div>
                        </div>

                        <footer>
                            <span>Tudo certo quero resgatar</span>

                            <div className="footer-buttons">
                                <button onClick={() => setIsModalOpen(false)}>
                                    Confirmar
                                </button>

                                <button onClick={() => setIsModalOpen(false)}>
                                    <Link to='/profile'>
                                        Editar Dados
                                    </Link>
                                </button>
                            </div>
                        </footer>

                    </section>

                </S.RewardModalContainer>
            </S.RewardModal>

            <GradientOverlay />
        </S.RewardsContainer>
    )
}
