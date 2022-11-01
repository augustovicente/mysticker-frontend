import React from 'react'
import StickersImg from 'assets/imgs/home-stickers.png'
import StickerCupImg from 'assets/imgs/sticker-cup.png'
import BusterImg from 'assets/imgs/buster.png'
import BootImg from 'assets/imgs/boot.svg'
import Trophy from 'assets/imgs/trophy.png'

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
]

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        },
    ]
}


const Home = () => {
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

                                    <a href="/login-register" className="banner-btn">Abrir o Albúm de Figurinhas</a>
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
                <div className="container">
                    <div className="row flex-column flex-lg-row justify-content-center flex-column">
                        <div className="col-lg-6 col-md-8 d-flex align-items-center">
                            <img src={StickerCupImg} loading="lazy" alt="Pacote de figurinha" />
                        </div>

                        <div className="col-lg-6 col-md-8 align-self-center">
                            <h2 className='title'>
                                Copa <span>PRUUU!</span>
                            </h2>

                            <p>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia
                            </p>

                            <a href="/login-register" className="banner-btn">Abrir o Albúm de Figurinhas</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5' id="benefits">
                <div className="container">
                    <h2 className="title">Benefícios</h2>
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
                                <a href="/login-register">Resgate seu Pacotinho</a>
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
                <img className='trophy' src={Trophy} loading="lazy" alt="Troféu" />

                <div className="container">
                    <h3 className='title'>
                        Roadmaps {"\n"} Copa <span>PRUUU!</span>
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
        </>
    )
}

export default Home;
