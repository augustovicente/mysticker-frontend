import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-top-wrap">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-9">
                            <div className="footer-widget">
                                <div className="footer-logo mb-25">
                                    <a href="/index"><img src="assets/img/favicon.png" alt="Logo MySticker" /></a>
                                </div>
                                <p>My Sticker, a primeira plataforma de criação de álbum de figurinhas.</p>
                                <ul className="footer-social">
                                    <li><a href="https://twitter.com/pruu_oficial" target="_blank"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="https://www.instagram.com/pruu_oficial" target="_blank"><i className="fab fa-instagram" /></a></li>
                                    <li><a href="https://www.tiktok.com/@pruu_oficial" target="_blank"><i className="fab fa-tiktok" /></a></li>
                                    <li>
                                        <a href="mailto:copapruu@gmail.com" target="_blank">
                                            <i className="fab fa-google" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">Links úteis</h4>
                                <ul className="fw-links">
                                    <li><Link to="/album">Álbum</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/register">Cadastrar</Link></li>
                                    <li><Link to="/marketplace">Loja</Link></li>
                                    <li><Link to="/rewards">Prêmios</Link></li>
                                    <li><a href="https://mysticker.gitbook.io/whitepaper-mysticker/" target="_blank">WhitePaper</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">Comunidade</h4>
                                <ul className="fw-links">
                                    <li><Link to="/">Contato</Link></li>
                                    <li><Link to="/">Ajuda</Link></li>
                                    <li><Link to="/">Propor Parcerias</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
