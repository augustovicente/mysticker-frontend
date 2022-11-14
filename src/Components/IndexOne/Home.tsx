import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
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
import Slider from 'react-slick';
import { CardBenefit, CardBenefitProps } from 'Components/CardBenefit';

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
        description: 'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica par',
        image: Benefit_1Img,
        order: 1,
    },
    {
        title: 'Lançamento PRUU',
        description: 'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica par',
        image: Benefit_2Img,
        order: 2,
    },
    {
        title: 'Aceita PIXs?',
        description: 'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica par',
        image: Benefit_3Img,
        order: 3,
    },
    {
        title: 'Mercadão',
        description: 'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica par',
        image: Benefit_4Img,
        order: 4,
    },
    {
        title: 'Boteco Verso',
        description: 'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica par',
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

    return (
        <>
            <section className="banner-bg">
                <div className="banner-area">
                    <div className="container">
                        <div className="row flex-column-reverse flex-lg-row">
                            <div className="col-lg-5 col-md-8">
                                <div className="banner-content">
                                    <h1 className="title">
                                        MySticker {'\n'}
                                        Álbum de {'\n'}
                                        Figurinha
                                    </h1>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices ipsum luctus nulla volutpat, integer lacus. Aliquet orci, velit
                                    </p>

                                    <a href="/" className="banner-btn">Abrir o Albúm de Figurinhas</a>
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
                                    <h6 className='d-block d-lg-none d-md-none w-100'>A copa dos Pombos</h6>
                                </h2>
                            </div>

                            <div className="d-lg-none d-sm-flex d-flex col-lg-6 col-md-8 align-items-center">
                                <div className="container-img">
                                    <img className='stickers' src={StickerCupImg} loading="lazy" alt="Pacote de figurinha" />
                                </div>
                            </div>

                            <div className="description col-lg-12 col-md-8 align-self-center">
                                <p className='mb-4 mb-md-3 mb-lg-4 me-3'>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia
                                </p>

                                <a href="#" className="banner-btn">Abrir o Albúm de Figurinhas</a>
                            </div>
                        </div>

                        <img src={BallImg} className="ball" loading="lazy" alt="Pacote de figurinha" />
                    </div>
                </div>
            </section>

            <section id="benefits">
                <div className="container">
                    <h2 className="title text-sm-start text-md-start text-lg-center">Benefícios</h2>

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
                            <div className="col-xl-3 grid">
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
                                O 1º Buster é {'\n'}
                                por nossa conta
                            </h3>
                            <img src={BusterImg} loading="lazy" alt="Pacote de figurinha" />

                            <button className='pick-sticker'>
                                <a href="/">Resgate seu Pacotinho</a>
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
                        <h3 className="title devs">Desenvolvedores</h3>

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
                        <h3 className="title partners">Parceiros</h3>

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
                                <span className='phase'>Fase 1</span>
                                <div className="icon"></div>
                                <h5>Desafios</h5>

                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vero eaque odit consectetur corporis, obcaecati vel ea possimus quibusdam sint fuga dolor nobis dolore assumenda quis nam temporibus veritatis harum?</p>
                            </div>
                        </div>

                        <div className="col-lg-4  mt-4">
                            <div className="roadmap-item">
                                <span className='phase'>Fase 1</span>
                                <div className="icon"></div>
                                <h5>Desafios</h5>

                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vero eaque odit consectetur corporis, obcaecati vel ea possimus quibusdam sint fuga dolor nobis dolore assumenda quis nam temporibus veritatis harum?</p>
                            </div>
                        </div>

                        <div className="col-lg-4  mt-4">
                            <div className="roadmap-item">
                                <span className='phase'>Fase 1</span>
                                <div className="icon"></div>
                                <h5>Desafios</h5>

                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vero eaque odit consectetur corporis, obcaecati vel ea possimus quibusdam sint fuga dolor nobis dolore assumenda quis nam temporibus veritatis harum?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="gol">
                <div className='col-12 d-block d-md-flex d-lg-flex justify-content-center align-items-center container'>
                    <img className='me-5' src={GolImg} alt="Imagem de um gol de futebol" />

                    <button className='pick-sticker'>
                        <a href="/">Resgate seu Pacotinho</a>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Home;
