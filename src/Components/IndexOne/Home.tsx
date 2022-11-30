import { useWindowSize } from 'hooks/useWindowSize';
import StickersImg from 'assets/imgs/home-stickers.png';
import StickerCupImg from 'assets/imgs/sticker-cup.png';
import BusterImg from 'assets/imgs/buster.png';
import BootImg from 'assets/imgs/boot.png';
import TrophyImg from 'assets/imgs/trophy.png';
import BallImg from 'assets/imgs/ball.png';
import GolImg from 'assets/imgs/gol.png';
import Benefit_1Img from 'assets/imgs/1-benefits.png';
import Benefit_2Img from 'assets/imgs/2-benefits.png';
import Benefit_3Img from 'assets/imgs/3-benefits.png';
import Benefit_4Img from 'assets/imgs/4-benefits.png';
import Benefit_5Img from 'assets/imgs/5-benefits.png';
import { ReactComponent as WhitepaperIcon} from 'assets/imgs/whitepaper-icon.svg';
import Slider from 'react-slick';
import { CardBenefit, CardBenefitProps } from 'Components/CardBenefit';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const developers = [
    {
        name: 'Buster',
        avatar: 'https://www.blexar.com/avatar.png',
    },
    {
        name: 'Boot',
        avatar: 'https://www.blexar.com/avatar.png',
    },
    {
        name: 'Buster',
        avatar: 'https://www.blexar.com/avatar.png',
    },
    {
        name: 'Boot',
        avatar: 'https://www.blexar.com/avatar.png',
    },
    {
        name: 'Buster',
        avatar: 'https://www.blexar.com/avatar.png',
    },
];

const benefits: CardBenefitProps[] = [
    {
        title: 'Desafios',
        description:
            <>
                <p>Acompanhando de perto a Copa Pruu, você fica por dentro de tudo e pode participar de desafios <b>valendo boosters</b>, <b>produtos</b> ou até <b>pix</b></p>
            </>
        ,
        image: Benefit_1Img,
        order: 1,
    },
    {
        title: 'Lançamento PRUU',
        description:
            <>
                <p>Ao colecionar você podera <b>resgatar itens</b> do <b>Drop Exclusivo</b> da <b>marca Pruu</b>
                    <br /><br />
                    <b>Camisetas, moletom, boné five penal, caneca com tirante e</b> outras novidades que virão pra compor seu outfit na revoada
                </p>
            </>
        ,
        image: Benefit_2Img,
        order: 2,
    },
    {
        title: 'Aceita PIXs?',
        description:
            <>
                <p>
                    Para a alegria geral da nação: vai ter pagamento por pix sim! É bem tranquilo e rápido de fazer.
                    <br /><br />

                    Mas, se preferir, você também pode fazer pagamentos
                    via <b>cartão de crédito</b>
                </p>
            </>
        ,
        image: Benefit_3Img,
        order: 3,
    },
    {
        title: 'Mercadão',
        description:
            <>
                <p>Fique a vontade para <b>revender</b> as <b>figurinhas repetidas!</b>
                    <br /><br />

                    A ideia é que você possa comprar ou vender para outros participantes e, quem sabe, ganhar uma graninha extra com isso
                </p>
            </>
        ,
        image: Benefit_4Img,
        order: 4,
    },
    {
        title: 'Boteco Verso',
        description:
            <>
                <p>
                    Você vai poder <b>assistir</b> os principais <b>jogos</b> e vibrar junto com a galera <b>no</b> nosso <b>Boteco Verso</b>, o <b>primeiro boteco do Metaverso</b>. Podendo ainda <b>concorrer booster</b> durante a partidas.
                </p>
            </>
        ,
        image: Benefit_5Img,
        order: 5,
    },
]

const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
}

const Home = () => {
    const { width } = useWindowSize();
    const classNameSectionCup = width! < 576 ? '' : 'container';
    const { t } = useTranslation();

    return (
        <main id='home-mysticker'>
            <section className="banner-bg">
                <div className="banner-area">
                    <div className="container">
                        <div className="row flex-column-reverse flex-lg-row">
                            <div className="col-lg-5 col-md-8">
                                <div className="banner-content">
                                    <h1 className="title">
                                        {t('home.section_1.title')}
                                    </h1>

                                    <p>{t('home.section_1.subtitle')}</p>

                                    <div className='section1-buttons'>
                                        <Link to="/" className="banner-btn">Abrir o Albúm de Figurinhas</Link>
                                        <a href="https://mysticker.gitbook.io/whitepaper-mysticker/" target="_blank" className="banner-btn whitepaper">
                                            <WhitepaperIcon />
                                            Whitepaper
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-8">
                                <img className='banner-stickers' loading="lazy" src={StickersImg} alt="3 figurinhas da copa pru" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="copa_pru">
                <div className={classNameSectionCup}>
                    <div className="row flex-column flex-lg-row justify-content-center flex-column">
                        <div className="d-sm-none d-none d-lg-flex col-lg-6 col-md-8 align-items-center">
                            <div className="container-img">
                                <img className='stickers' src={StickerCupImg} loading="lazy" alt="Pacote de figurinha" />
                            </div>
                        </div>

                        <div className="flex-column col-lg-6 align-self-center">
                            <div className="description col-lg-12 align-self-center">
                                <h2 className='title mb-4'>
                                    Copa <span>PRUU!</span>
                                </h2>
                            </div>

                            <div className="d-lg-none d-sm-flex d-flex col-lg-6 col-md-8 align-items-center">
                                <div className="container-img">
                                    <img className='stickers' src={StickerCupImg} loading="lazy" alt="Pacote de figurinha" />
                                </div>
                            </div>

                            <div className="description col-lg-12 col-md-8 align-self-center">
                                <p className='mb-4 mb-md-3 mb-lg-4 me-3'>
                                    {t('home.section_2.subtitle')}
                                </p>

                                <a href="#" className="banner-btn">
                                    {t('home.section_2.button')}
                                </a>
                            </div>
                        </div>

                        <img src={BallImg} className="ball" loading="lazy" alt="Pacote de figurinha" />
                    </div>
                </div>
            </section>

            <section id="benefits">
                <div className="container">
                    <h2 className="title text-sm-start text-md-start text-lg-center">
                        {t('home.section_3.title')}
                    </h2>

                    <div className="d-none d-md-grid d-lg-grid grid">
                        {benefits.map((benefit, index) => (
                            <CardBenefit
                                key={index}
                                title={benefit.title}
                                image={benefit.image}
                                order={benefit.order}
                                description={benefit.description}
                            />
                        ))}
                    </div>

                    {/* Carrousel Slider(Mobile) */}
                    <Slider className="d-grid d-md-none d-lg-none row top-collection-active" {...settings}>
                        {benefits.map((benefit) => (
                            <div className="col-xl-3 grid" key={benefit.title}>
                                <CardBenefit
                                    title={benefit.title}
                                    image={benefit.image}
                                    order={benefit.order}
                                    description={benefit.description}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            <section id="buster">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                            <h3 className="title">
                                {t('home.section_4.title')}
                            </h3>
                            <img src={BusterImg} loading="lazy" alt="Pacote de figurinha" />

                            <button className='pick-sticker'>
                                <a href="/">
                                    {t('home.section_4.button')}
                                </a>
                            </button>

                            <img src={BootImg} loading="lazy" className="boot" alt="Pacote de figurinha" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="partners">
                <div className="container">
                    {/* Desenvolvedores */}
                    <div>
                        <h3 className="title devs">
                            {t('home.section_5.developers.title')}
                        </h3>

                        <div className='grid'>
                            {developers.map((developer, index) => (
                                <div className='dev' key={index}>
                                    <img src={developer.avatar} loading="lazy" alt="Avatar" />
                                    <p>{developer.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Parceiros */}
                    <div>
                        <h3 className="title partners">
                            {t('home.section_5.partners.title')}
                        </h3>

                        <div className='grid'>
                            {developers.map((developer, index) => (
                                <div key={index} className="partner">
                                    <img src={developer.avatar} loading="lazy" alt="Avatar" />
                                    <p>{developer.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="roadmap">
                <img className='trophy' src={TrophyImg} loading="lazy" alt="Troféu" />

                <div className="container">
                    <h3 className='title'>
                        Roadmaps {"\n"} Copa <span>PRUU!</span>
                    </h3>

                    <div className="row mt-5 d-flex justify-content-between">
                        <div className="col-lg-4  mt-4">
                            <div className="roadmap-item">
                                <span className='phase'>
                                    {t('home.section_6.phase1.title')}
                                </span>
                                <div className="icon"></div>
                                <h5>
                                    {t('home.section_6.phase1.subtitle')}
                                </h5>

                                <li>
                                    {t('home.section_6.phase1.list.item1')}
                                </li>

                                <li>
                                    {t('home.section_6.phase1.list.item2')}
                                </li>

                                <li>
                                    {t('home.section_6.phase1.list.item3')}
                                </li>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="roadmap-item">
                                <span className='phase'>
                                    {t('home.section_6.phase2.title')}
                                </span>
                                <div className="icon"></div>
                                <h5>
                                    {t('home.section_6.phase2.subtitle')}
                                </h5>

                                <li>
                                    {t('home.section_6.phase2.list.item1')}
                                </li>

                                <li>
                                    {t('home.section_6.phase2.list.item2')}
                                </li>

                                <li>
                                    {t('home.section_6.phase2.list.item3')}
                                </li>
                            </div>
                        </div>

                        <div className="col-lg-4  mt-4">
                            <div className="roadmap-item">
                                <span className='phase'>
                                    {t('home.section_6.phase3.title')}
                                </span>
                                <div className="icon"></div>
                                <h5>
                                    {t('home.section_6.phase3.subtitle')}
                                </h5>

                                <li>
                                    {t('home.section_6.phase3.list.item1')}
                                </li>

                                <li>
                                    {t('home.section_6.phase3.list.item2')}
                                </li>

                                <li>
                                    {t('home.section_6.phase3.list.item3')}
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="gol">
                <div className='col-12 d-block d-md-flex d-lg-flex justify-content-center align-items-center container'>
                    <img className='me-5' src={GolImg} alt="Imagem de um gol de futebol" />

                    <button className='pick-sticker'>
                        <Link to="/">
                            {t('home.section_7.button')}
                        </Link>
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Home;
