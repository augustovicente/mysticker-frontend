import * as S from './styles';
import { ReactComponent as RewardIcon } from 'assets/imgs/reward.svg';
import { teamsNameList } from 'pages/Album/mocks/teamsNameList';
import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { teamsIconList as teamsList } from 'pages/Album/mocks/teamsIconList';
import { GradientOverlay } from 'Components/GradientOverlay';
import { ReactComponent as ArrowIcon } from 'assets/imgs/arrow-left-white.svg';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion'
import { usePrevious } from 'hooks/usePrevious';
import Carousel from 'antd/es/carousel';
import { useAuth, User } from 'contexts/auth.context';
import { connect_wallet, getPackages, get_owned_teams } from 'models/User';
import { stickers } from 'assets/stickers';
import { useScrollToElement } from 'hooks/useScrollToElement';
import axios from 'axios';
import { dataCEP } from 'pages/Profile/Profile';
import { toast } from 'react-toastify';
import { useToggle } from 'hooks/useToggle';
import { api } from 'services/api';
import { checkWallet, connect } from 'services/web3';
import { ModalContentHasRedeem } from 'pages/Prizes/Modals/HasRedeem';
import { WalletErrorModal } from 'pages/Album/components/Skeletons/styles';
import { Link } from 'react-router-dom';
import { ReactComponent as LoginIcon } from 'assets/imgs/user.svg';
import { ReactComponent as WalletIcon } from 'assets/imgs/wallet-white.svg';

type HasRedeemResponse = {
    has_redeem: boolean;
    redeem_status: number;
    redeem_last_update: string;
    redeem_info: string;
}

type ContextModalProps = {
    currentPrize: prizeProps;
    user: User['user'];
    addressData: dataCEP;
    isLoading: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    setRewardStatus: Dispatch<SetStateAction<prizeProps[]>>;
    handleRedeem: () => void;
    redeemSuccess: boolean;
}

type prizeProps = {
    type: 1 | 2 | 3 | 4 | 5 | 6;
    sizes?: string[];
    selectedSize?: string;
    images?: string[];
    title?: string;
    description?: string;
    redeemStatus: 0 | 1 | 2;
    redeemInfo?: string;
    totalTeams?: number;
    teamGroup: 'america-norte' | 'america-sul' | 'europa' | 'asia' | 'africa' | 'todos';
}

const prizes: prizeProps[] = [
    {
        type: 1,
        sizes: ['P', 'M', 'G', 'GG'],
        images: ['/prizes/todos.png'],
        title: 'PlayStation 5',
        description: 'Ao completar todas as figuras desse continente você pode resgatar este playstation 5',
        redeemStatus: 0,
        totalTeams: teamsList.find(team => team.teamsGroupName === 'todos')?.teams.length ?? 0,
        teamGroup: 'todos',
    },
    {
        type: 2,
        sizes: ['P', 'M', 'G', 'GG'],
        images: ['/prizes/america-norte.png'],
        title: 'Boné 5pruu',
        description: 'Ao completar todas as figuras desse continente você pode resgatar este boné',
        redeemStatus: 0,
        totalTeams: teamsList.find(team => team.teamsGroupName === 'america-norte')?.teams.length ?? 0,
        teamGroup: 'america-norte',
    },
    {
        type: 3,
        sizes: ['P', 'M', 'G', 'GG'],
        images: ['/prizes/america-sul1.png', '/prizes/america-sul2.png'],
        title: 'Camiseta Preta Copacapruu',
        description: 'Ao completar todas as figuras desse continente você pode resgatar esta camiseta',
        redeemStatus: 0,
        totalTeams: teamsList.find(team => team.teamsGroupName === 'america-sul')?.teams.length ?? 0,
        teamGroup: 'america-sul',
    },
    {
        type: 4,
        images: ['/prizes/africa.png'],
        title: 'Bucket Pruu',
        description: 'Ao completar todas as figuras desse continente você pode resgatar este bucket',
        redeemStatus: 0,
        totalTeams: teamsList.find(team => team.teamsGroupName === 'africa')?.teams.length ?? 0,
        teamGroup: 'africa'
    },
    {
        type: 5,
        sizes: ['P', 'M', 'G', 'GG'],
        images: ['/prizes/asia1.png', '/prizes/asia2.png'],
        title: 'Camiseta Branca Off White',
        description: 'Ao completar todas as figuras desse continente você pode resgatar esta camiseta',
        redeemStatus: 0,
        totalTeams: teamsList.find(team => team.teamsGroupName === 'asia')?.teams.length ?? 0,
        teamGroup: 'asia'
    },
    {
        type: 6,
        sizes: ['P', 'M', 'G', 'GG'],
        images: ['/prizes/europa1.png', '/prizes/europa2.png'],
        title: 'Moletom Segue o Baile',
        description: 'Ao completar todas as figuras desse continente você pode resgatar este moletom',
        redeemStatus: 0,
        totalTeams: teamsList.find(team => team.teamsGroupName === 'europa')?.teams.length ?? 0,
        teamGroup: 'europa'
    }
]

export const ContextModal = createContext<ContextModalProps>({} as ContextModalProps);

export const Prizes = () => {
    const [teamsGroupSelected, setTeamsGroupSelected] = useState("asia");
    const [rewardStatus, setRewardStatus] = useState<prizeProps[]>(prizes);
    const prevTeamsGroupSelected = usePrevious(teamsNameList.findIndex(({ name }) => name === teamsGroupSelected));
    const { user, getUser } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [addressData, setAddressData] = useState<dataCEP>({} as dataCEP);
    const [isLoading, setIsLoading] = useToggle(false);
    const [redeemSuccess, setRedeemSuccess] = useState(false);
    const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState("")

    useScrollToElement('#selected-group', teamsGroupSelected);

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

    const currentPrize = useMemo(() => {
        return rewardStatus.find(({ teamGroup }) => teamGroup === teamsGroupSelected)
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
        setIsLoading(true);

        (async () => {
            if (!user) {
                return setIsModalErrorOpen(true);
            }

            checkWallet()
                .then(res => {
                    if (res === 'connected') {
                        setIsModalErrorOpen(false);
                    } else {
                        return setIsModalErrorOpen(true);
                    }
                })
                .finally(() => setIsLoading(false))

            getTotalCompletedByTeam();
        })();
    }, [teamsGroupSelected]);

    useEffect(() => {
        const controller = new AbortController();

        if (user?.address_zip_code) {
            axios.get<dataCEP>(`https://viacep.com.br/ws/${user?.address_zip_code}/json`, {
                signal: controller.signal
            })
                .then(response => {
                    setAddressData(response.data)
                })
        }

        return () => controller.abort();
    }, []);

    // Verificando se prêmio já foi resgatado
    useEffect(() => {
        if (currentPrize?.type === 1) return;

        const controller = new AbortController();

        api.post<HasRedeemResponse>(`has-redeem/${currentPrize?.type}`, {
            signal: controller.signal,
        })
            .then(({ data }) => {
                if (data) {
                    setRewardStatus(prevState => {
                        const newState = prevState.map(prize => {
                            if (prize.type === currentPrize?.type) {
                                return {
                                    ...prize,
                                    redeemStatus: data.redeem_status,
                                    redeemInfo: data.redeem_info
                                }
                            }
                            return prize;
                        });

                        return newState;
                    })
                }

            })
            .catch(err => console.log(err));


        return () => controller.abort();
    }, [teamsGroupSelected, redeemSuccess]);

    const handleRedeem = useCallback(async () => {
        const { 0: wallet } = await connect();

        if (!wallet || !user) {
            return toast.error('Você precisa estar conectado a uma carteira para resgatar este prêmio', { toastId: 'not-connected' })
        }

        if (Object.keys(addressData).length === 0 || !user?.address_zip_code || !user?.address_number) {
            toast.error('Preencha todos os dados do endereço para resgatar o prêmio', { toastId: 'error' })
            return;
        }

        setIsLoading(true);

        await api.post('/redeem', {
            ...(currentPrize?.sizes ? { size: selectedSize } : {}),
            type: currentPrize?.type,
            wallet,
        })
            .then(res => {
                if (res.status === 200) {
                    setRedeemSuccess(true);
                }
            })
            .catch(err => {
                if (axios.isAxiosError(err)) {
                    if (err.response?.data?.message === 'User already redeemed this prize') {
                        return toast.error('Você já resgatou este prêmio', { toastId: 'error' })
                    }
                }

                console.error(err);
                return toast.error('Erro ao resgatar prêmio, tente novamente', { toastId: 'redeem-error' });
            })
            .finally(() => setIsLoading(false));
    }, [addressData, currentPrize, user, selectedSize]);

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

                    {currentPrize?.title && (
                        <aside
                            key={currentPrize?.type}
                            className="right"
                        >
                            <div className={currentPrize?.redeemStatus !== 0 ? 'reward tracking' : 'reward'}>
                                <Carousel
                                    slidesToScroll={1}
                                    slidesToShow={1}
                                    draggable={currentPrize?.redeemStatus === 0}
                                    dots={currentPrize?.redeemStatus === 0}
                                >
                                    {currentPrize?.images?.map((image, index) => (
                                        <div key={index}>
                                            <img src={image} alt="" />
                                        </div>
                                    ))}
                                </Carousel>

                                {currentPrize?.redeemStatus > 0 && (
                                    <div className="redeem-info">
                                        <span>PRÊMIO{"\n"}RESGATADO</span>
                                    </div>
                                )}
                            </div>

                            <div className="description">
                                <h3>{currentPrize?.title}</h3>
                                <p>{currentPrize?.description}</p>
                            </div>

                            <footer>
                                {!currentPrize?.redeemStatus && (
                                    <h3>{ownedTeams.length}<strong>/{currentPrize?.totalTeams}</strong></h3>
                                )}

                                <button
                                    onClick={ownedTeams.length === currentPrize?.totalTeams ? () => setIsModalOpen(true) : () => { }}
                                    disabled={ownedTeams.length !== currentPrize?.totalTeams}
                                    className={currentPrize?.redeemStatus !== 0 ? 'tracking' : ''}
                                >
                                    <span>
                                        {currentPrize?.redeemStatus === 0 ? 'Resgate' : 'Acompanhar envio'}
                                    </span>
                                </button>
                            </footer>
                        </aside>
                    )}
                </main>
            </>

            <WalletErrorModal open={isModalErrorOpen}>
                {!user ? (
                    <>
                        <h1 className="mb-4">Faça Login para acessar os prêmios!</h1>
                        <Link to="/login">
                            <LoginIcon className="login" width={26} height={26} />
                            Ir para o login
                        </Link>
                    </>
                ) : (
                    <>
                        <h1 className="mb-4">Carteira desconectada!</h1>
                        <button
                            className="wallet"
                            onClick={() => {
                                connect_wallet()
                                    .then(() => {
                                        setIsModalErrorOpen(false);
                                        getUser()
                                    })
                            }}
                        >
                            Conectar carteira
                            <WalletIcon className="wallet" width={26} height={26} />
                        </button>

                        <span onClick={() => {
                            window.open("https://metamask.io", "_blank")
                        }} className="create-wallet">
                            Criar carteira
                        </span>
                    </>
                )}
            </WalletErrorModal>

            <S.RewardModal
                centered
                width={
                    [1, 2].includes(currentPrize?.redeemStatus)
                        ? 760
                        : 940
                }
                open={isModalOpen}
                onCancel={() => {
                    setIsModalOpen(false);

                    if (redeemSuccess) {
                        setRedeemSuccess(false);
                    }
                }}
            >
                <S.RewardModalContainer>
                    <ContextModal.Provider
                        value={{
                            currentPrize: currentPrize || {} as prizeProps,
                            addressData,
                            handleRedeem,
                            isLoading,
                            setIsModalOpen,
                            user,
                            redeemSuccess,
                            setRewardStatus
                        }}
                    >
                        <ModalContentHasRedeem
                            selectedSize={selectedSize}
                            setSelectedSize={setSelectedSize}
                        />
                    </ContextModal.Provider>
                </S.RewardModalContainer>
            </S.RewardModal>

            <GradientOverlay />
        </S.RewardsContainer>
    )
}
