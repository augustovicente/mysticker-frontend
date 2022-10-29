import React from 'react'
// import TopSeller from './TopSeller'
import Logo from '../../assets/imgs/home-stickers.svg'

const Banner = () => {
    return (
        <>
            <div className="banner-bg">
                <div className="banner-area">
                    <div className="container">
                        <div className="row flex-column-reverse flex-lg-row">
                            <div className="col-lg-5 col-md-8">
                                <div className="banner-content">
                                    <h2 className="title">
                                        MySticker {'\n'}
                                        Álbum de {'\n'}
                                        Figurinha
                                    </h2>

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

                {/* top-seller-area */}
                {/* <TopSeller /> */}
                {/* top-seller-area-end */}
            </div>
        </>
    )
}

export default Banner
