import React from 'react'
import StickersImg from '../../assets/imgs/home-stickers.svg'
import StickersImg2 from '../../assets/imgs/tres.png'
import StickersImg3 from '../../assets/imgs/tres2.png'
import StickerCupImg from '../../assets/imgs/sticker-cup.svg'
import BusterImg from '../../assets/imgs/buster.svg'
import BootImg from '../../assets/imgs/boot.svg'

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
    }
]

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
                                <img className='banner-stickers' src={StickersImg} alt="3 figurinhas da copa pru" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="copa_pru">
                <div className="container">
                    <div className="row flex-column flex-lg-row justify-content-center flex-column">
                        <div className="col-lg-6 col-md-8 d-flex align-items-center">
                            <img src={StickerCupImg} alt="Pacote de figurinha" />
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
                            <img src={BusterImg} alt="Pacote de figurinha" />

                            <button className='pick-sticker'>
                                <a href="/login-register">Resgate seu Pacotinho</a>
                            </button>

                            <img src={BootImg} className="boot" alt="Pacote de figurinha" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="partners">
                <div className="container">
                    <div>
                        <h3 className="title">Desenvolvedores</h3>

                        {developers.map((developer, index) => (
                            <div className='grid'>
                                <img src={developer.avatar} alt="Pacote de figurinha" />
                                <p>{developer.name}</p>
                            </div>
                        ))}
                    </div>


                    <div>
                        <h3 className="title">Parceiros</h3>

                        {developers.map((developer, index) => (
                            <div className='grid'>
                                <img src={developer.avatar} alt="Pacote de figurinha" />
                                <p>{developer.name}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home;
