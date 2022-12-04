import { useWindowSize } from 'hooks/useWindowSize';
import StickersImg from 'assets/imgs/home-stickers.png';
import StickerCupImg from 'assets/imgs/sticker-cup.png';
import BusterImg from 'assets/imgs/buster-stickers.png';
import BootImg from 'assets/imgs/boot.png';
import TrophyImg from 'assets/imgs/trophy.png';
import BallImg from 'assets/imgs/ball.png';
import GolImg from 'assets/imgs/gol.png';
import Benefit_1Img from 'assets/imgs/1-benefits.png';
import Benefit_2Img from 'assets/imgs/2-benefits.png';
import Benefit_3Img from 'assets/imgs/3-benefits.png';
import Benefit_4Img from 'assets/imgs/4-benefits.png';
import Benefit_5Img from 'assets/imgs/5-benefits.png';
import { ReactComponent as WhitepaperIcon } from 'assets/imgs/whitepaper-icon.svg';
import { ReactComponent as LockIcon } from 'assets/imgs/lock.svg';
import Slider from 'react-slick';
import { CardBenefit, CardBenefitProps } from 'Components/CardBenefit';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAuth } from 'contexts/auth.context';

const developers = [
    {
        name: 'Capitel',
        logo: '/devs/capitel.png',
    },
    {
        name: 'Caramelo Club',
        logo: '/devs/carameloclub.png',
        url: 'https://www.carameloclub.io/alley',
    },
    {
        name: 'Meta Zero',
        logo: '/devs/metazero.png',
    },
];

const partners = [
    {
        name: 'NFTfy',
        logo: '/partners/nftfy.png',
        url: 'https://twitter.com/nftfyofficial',
    },
    {
        name: 'METAGOONS™',
        logo: '/partners/metagoons.png',
        url: 'https://twitter.com/MetaGoons',
    },
    {
        name: 'CreepyWorld',
        logo: '/partners/creepyworld.png',
        url: 'https://twitter.com/CreepyWorldNFTs',
    },
    {
        name: 'Rough Diamonds',
        logo: '/partners/roughdiamonds.png',
        url: 'https://www.instagram.com/11roughdiamonds/',
    },
    {
        name: 'wallbee',
        logo: '/partners/wallbee.png',
        url: 'https://wallbee.io/pt/',
    },
    {
        name: 'Recycle the Land',
        logo: '/partners/recycletheland.png',
        url: 'https://twitter.com/recycletheland',
    },
    {
        name: 'ghost',
        logo: '/partners/ghost.svg',
        url: 'https://ghost.art.br/',
    },
    {
        name: 'pet4',
        logo: '/partners/pet4.png',
        url: 'https://www.instagram.com/pet4agency/',
    },
    {
        name: 'Nave podcast',
        logo: '/partners/navepodcast.png',
        url: 'https://www.instagram.com/navepodcast/',
    },
    {
        name: 'thelazyfrogs',
        logo: '/partners/thelazyfrogs.png',
        url: 'https://www.instagram.com/thelazyfrogs/',
    },
    {
        name: 'org_community',
        logo: '/partners/org_community.png',
        url: 'https://www.instagram.com/org_community/',
    },
    {
        name: 'agenciakavana',
        logo: '/partners/agenciakavana.png',
        url: 'https://www.instagram.com/agenciakavana/',
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
    const benefits: CardBenefitProps[] = [
        {
            title: t('home.section_3.cards.card_1.title'),
            description:
                <>
                    <p> {t('home.section_3.cards.card_1.text_1')}
                    <b> {t('home.section_3.cards.card_1.text_2')}</b>,
                    <b> {t('home.section_3.cards.card_1.text_3')}</b>
                    {t('home.section_3.cards.card_1.text_4')} <b>{t('home.section_3.cards.card_1.text_5')}</b></p>
                </>
            ,
            image: Benefit_1Img,
            order: 1,
        },
        {
            title: t('home.section_3.cards.card_2.title'),
            description:
                <>
                    <p>
                        {t('home.section_3.cards.card_2.text_1')}
                        <b>{t('home.section_3.cards.card_2.text_2')}</b>
                        {t('home.section_3.cards.card_2.text_3')}
                        <b>{t('home.section_3.cards.card_2.text_4')}</b>
                        {t('home.section_3.cards.card_2.text_5')}
                        <b>{t('home.section_3.cards.card_2.text_6')}</b> <br /><br />
                        <b>{t('home.section_3.cards.card_2.text_7')}</b>
                        {t('home.section_3.cards.card_2.text_8')}
                    </p>
                </>
            ,
            image: Benefit_2Img,
            order: 2,
        },
        {
            title: t('home.section_3.cards.card_3.title'),
            description:
                <>
                    <p>
                        {t('home.section_3.cards.card_3.text_1')}
                    </p>
                </>
            ,
            image: Benefit_3Img,
            order: 3,
        },
        {
            title: t('home.section_3.cards.card_4.title'),
            description:
                <>
                    <p>
                        {t('home.section_3.cards.card_4.text_1')}
                        <b>{t('home.section_3.cards.card_4.text_2')}</b>
                        {t('home.section_3.cards.card_4.text_3')}
                        <b>{t('home.section_3.cards.card_4.text_4')}</b>
                        <br /><br />
                        {t('home.section_3.cards.card_4.text_5')}
                    </p>
                </>
            ,
            image: Benefit_4Img,
            order: 4,
        },
        {
            title: t('home.section_3.cards.card_5.title'),
            description:
                <>
                    <p>
                        {t('home.section_3.cards.card_5.text_1')}
                        <b>{t('home.section_3.cards.card_5.text_2')}</b>
                        {t('home.section_3.cards.card_5.text_3')}
                        <b>{t('home.section_3.cards.card_5.text_4')}</b>
                        {t('home.section_3.cards.card_5.text_5')}
                        <b>{t('home.section_3.cards.card_5.text_6')}</b>
                        {t('home.section_3.cards.card_5.text_7')}
                        <b>{t('home.section_3.cards.card_5.text_8')}</b>
                        {t('home.section_3.cards.card_5.text_9')}
                        <b>{t('home.section_3.cards.card_5.text_10')}</b>
                        {t('home.section_3.cards.card_5.text_11')}
                        <b>{t('home.section_3.cards.card_5.text_12')}</b>
                        {t('home.section_3.cards.card_5.text_13')}
                    </p>
                </>
            ,
            image: Benefit_5Img,
            order: 5,
        },
    ]
    const { user } = useAuth();

    return (
        <main id='home-mysticker'>
            <section className="banner-bg">
                <div className="banner-area">
                    <div className="container">
                        <div className="row flex-column-reverse flex-lg-row">
                            <div className="col-lg-6 col-md-8">
                                <div className="banner-content">
                                    <h1 className="title">
                                        {t('home.section_1.title')}
                                    </h1>

                                    <p>{t('home.section_1.subtitle')}</p>

                                    <div className='section1-buttons'>
                                        <Link to={user ? '/album' : '/login'} className="banner-btn">
                                            {t('home.section_1.action_1')}
                                        </Link>
                                        <a href="https://mysticker.gitbook.io/whitepaper-mysticker/" target="_blank" className="banner-btn whitepaper">
                                            <WhitepaperIcon />
                                            {t('home.section_1.action_2')}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-8">
                                <img className='banner-stickers'
                                    loading="lazy"
                                    src={StickersImg}
                                    alt={t('home.section_1.img_alt') || ''}
                                />
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
                                <img
                                    className='stickers'
                                    src={StickerCupImg}
                                    loading="lazy"
                                    alt={t('home.section_2.img_alt_1') || ''}
                                />
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
                                    <img
                                        className='stickers'
                                        src={StickerCupImg}
                                        loading="lazy"
                                        alt={t('home.section_2.img_alt_1') || ''}
                                    />
                                </div>
                            </div>

                            <div className="description col-lg-12 col-md-8 align-self-center">
                                <p className='mb-4 mb-md-3 mb-lg-4 me-3'>
                                    {t('home.section_2.subtitle')}
                                </p>

                                <Link to="/marketplace" className="banner-btn">
                                    {t('home.section_2.button')}
                                </Link>
                            </div>
                        </div>

                        <img src={BallImg} className="ball" loading="lazy" alt={t('home.section_2.img_alt_1') || ''} />
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
                            <img src={BusterImg} loading="lazy" alt={t('home.section_2.img_alt_1') || ''} />

                            <button disabled className='pick-sticker'>
                                {t('home.section_4.button')}
                                <LockIcon  />
                            </button>

                            <img src={BootImg} loading="lazy" className="boot" alt={t('home.section_2.img_alt_1') || ''} />
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
                                    {developer?.url ? (
                                        <a href={developer.url} target="_blank">
                                            <img src={developer.logo} loading="lazy" alt={`Logo ${developer?.name}`} />
                                        </a>
                                    ) : (
                                        <img src={developer.logo} loading="lazy" alt={`Logo ${developer?.name}`} />
                                    )}
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
                            {partners.map((partner, index) => (
                                <div key={index} className="partner">
                                    <a href={partner.url} target="_blank">
                                        <img src={partner.logo} loading="lazy" alt={`Logo ${partner.name}`} />
                                    </a>
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

                    <button disabled className='pick-sticker'>
                        {t('home.section_7.button')}
                        <LockIcon  />
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Home;
