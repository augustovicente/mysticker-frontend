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
import { get_owned_teams, get_owned_tokens } from 'models/User';
import { stickers } from 'assets/stickers';
import { useScrollToElement } from 'hooks/useScrollToElement';

type prizeProps = {
    type: 1 | 2 | 3 | 4 | 5 | 6;
    size?: number;
    images?: string[];
    title?: string;
    description?: string;
    hasRedeem?: boolean;
    totalTeams?: number;
    teamGroup: 'america-norte' | 'america-sul' | 'europa' | 'asia' | 'africa' | 'todos';
}

const prizes: prizeProps[] = [
    {
        type: 1,
        size: 1,
        images: ['/prizes/america-norte.png'],
        title: 'Boné 5pruu',
        description: 'Ao completar todas as figuras desse continente você pode resgatar este boné',
        hasRedeem: false,
        totalTeams: teamsList.find(team => team.teamsGroupName === 'america-norte')?.teams.length ?? 0,
        completedTeams: [],
        teamGroup: 'todos',
    },
    {
        type: 2,
        size: 1,
        images: ['/prizes/america-norte.png'],
        title: 'Boné 5pruu',
        description: 'Ao completar todas as figuras desse continente você pode resgatar este boné',
        hasRedeem: false,
        totalTeams: teamsList.find(team => team.teamsGroupName === 'america-norte')?.teams.length ?? 0,
        completedTeams: [],
        teamGroup: 'america-norte',
    },
    {
        type: 3,
        size: 1,
        images: ['/prizes/america-sul1.png', '/prizes/america-sul2.png'],
        title: 'Camiseta Preta Copacapruu',
        description: 'Ao completar todas as figuras desse continente você pode resgatar esta camiseta',
        hasRedeem: false,
        totalTeams: teamsList.find(team => team.teamsGroupName === 'america-sul')?.teams.length ?? 0,
        completedTeams: [],
        teamGroup: 'america-sul',
    },
    {
        type: 4,
        size: 1,
        images: ['/prizes/africa.png'],
        title: 'Bucket Pruu',
        description: 'Ao completar todas as figuras desse continente você pode resgatar este bucket',
        hasRedeem: false,
        totalTeams: teamsList.find(team => team.teamsGroupName === 'africa')?.teams.length ?? 0,
        completedTeams: [],
        teamGroup: 'africa'
    },
    {
        type: 5,
        size: 1,
        images: ['/prizes/asia1.png', '/prizes/asia2.png'],
        title: 'Camiseta Branca Off White',
        description: 'Ao completar todas as figuras desse continente você pode resgatar esta camiseta',
        hasRedeem: false,
        totalTeams: teamsList.find(team => team.teamsGroupName === 'asia')?.teams.length ?? 0,
        completedTeams: [],
        teamGroup: 'asia'
    },
    {
        type: 6,
        size: 1,
        images: ['/prizes/europa1.png', '/prizes/europa2.png'],
        title: 'Moletom Segue o Baile',
        description: 'Ao completar todas as figuras desse continente você pode resgatar este moletom',
        hasRedeem: false,
        totalTeams: teamsList.find(team => team.teamsGroupName === 'europa')?.teams.length ?? 0,
        completedTeams: [],
        teamGroup: 'europa'
    }
]

export const Rewards = () => {
    const [teamsGroupSelected, setTeamsGroupSelected] = useState("todos");
    const [rewardStatus, setRewardStatus] = useState<prizeProps[]>(prizes);
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
            }
        }
        else {
            const previousIndex = index - 1
            const previousGroup = teamsNameList[previousIndex]?.name
            if (previousGroup) {
                setTeamsGroupSelected(previousGroup)
            }
        }
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    useScrollToElement('#selected-group', teamsGroupSelected);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const currentPrize = useMemo(() => {
        const prize = rewardStatus.find(({ teamGroup }) => teamGroup === teamsGroupSelected)
        return prize
    }, [teamsGroupSelected, rewardStatus]);

    const [ownedTeams, setOwnedTeams] = useState<string[]>([])

    const getTotalCompletedByTeam = useCallback(async () => {
        const teams = groupOfTeams.map(team => {
            return stickers.find(sticker => sticker.country === team.name.toUpperCase())
        });

        const ownedTeams = await get_owned_teams(teams.map(team => team?.id!)) // this return array of '1' or '0'

        const ownedTeamsBoolean = ownedTeams.map((owned: string, index: number) => {
            return {
                team: teams[index]?.country,
                owned: owned === '1'
            }
        });

        setOwnedTeams(ownedTeamsBoolean.filter(({ owned }) => owned === true).map(({ team }) => team!))
    }, [teamsGroupSelected])

    useEffect(() => {
        getTotalCompletedByTeam();
    }, [teamsGroupSelected])


    // useEffect(() => {
    //     (async () => {
    //         const opa = await get_owned_teams([384])

    //         console.log('opa', opa)

    //     }
    //     )();
    // }, [])

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
                                            className={ownedTeams.includes(name.toUpperCase()) ? 'completed' : ''}
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

                    {teamsGroupSelected !== 'todos' && currentPrize?.title && (
                        <aside
                            key={currentPrize?.type}
                            className="right"
                        >
                            <div className="reward">
                                <Carousel
                                    slidesToScroll={1}
                                    slidesToShow={1}
                                    draggable
                                    afterChange={() => { }}
                                >
                                    {currentPrize?.images?.map((image, index) => (
                                        <div key={index}>
                                            <img src={image} alt="" />
                                        </div>
                                    ))}
                                </Carousel>
                            </div>

                            <div className="description">
                                <h3>{currentPrize?.title}</h3>
                                <p>{currentPrize?.description}</p>
                            </div>

                            <footer className='d-flex align-items-center gap-3'>
                                <h3>{ownedTeams.length}<strong>/{currentPrize?.totalTeams}</strong></h3>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    disabled={ownedTeams.length !== currentPrize?.totalTeams}
                                    >
                                    <span>
                                        Resgate
                                    </span>
                                </button>
                            </footer>
                        </aside>
                    )}
                </main>
            </>

            <S.RewardModal
                centered
                width={980}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
            >
                <S.RewardModalContainer>
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
