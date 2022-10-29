import React from 'react'
import Logo from '../../assets/imgs/home-stickers.svg'
import StickerCup from '../../assets/imgs/sticker-cup.svg'

export const Home = () => {
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
                                <img className='banner-stickers' src={Logo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="copa_pru">
                <div className="container">
                    <div className="row flex-column flex-lg-row">
                        <div className="col-lg-6 col-md-8 d-flex align-items-center">
                            <img src={StickerCup} alt="" />
                        </div>

                        <div className="col-lg-6 col-md-8 d-flex justify-content-center flex-column">
                            <h2 className='title'>
                                Copa <span>PRUUU!</span>
                            </h2>

                            <p>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
