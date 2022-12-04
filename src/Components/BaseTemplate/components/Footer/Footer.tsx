import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const Footer = () => {
    const { t } = useTranslation()
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
                                <p>{t('footer.info')}</p>
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
                                <h4 className="fw-title">{t('footer.usefull_links')}</h4>
                                <ul className="fw-links">
                                    <li><Link to="/album">{t('footer.album')}</Link></li>
                                    <li><Link to="/login">{t('footer.login')}</Link></li>
                                    <li><Link to="/register">{t('footer.register')}</Link></li>
                                    <li><Link to="/marketplace">{t('footer.store')}</Link></li>
                                    <li><Link to="/rewards">{t('footer.rewards')}</Link></li>
                                    <li><a href="https://mysticker.gitbook.io/whitepaper-mysticker/" target="_blank">{t('footer.whitepaper')}</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">{t('footer.community')}</h4>
                                <ul className="fw-links">
                                    <li><Link to="/">{t('footer.contact')}</Link></li>
                                    <li><Link to="/">{t('footer.help')}</Link></li>
                                    <li><Link to="/">{t('footer.be_partner')}</Link></li>
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
