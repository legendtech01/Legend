import "./Footer.css"
import footerLogo from "../../assets/logo.webp"

function Footer() {
    return (
        <footer id="footer">
            <div className="footer-container">
                <div className="footer-wrapper1">
                    <h1 id="nav-logo">legendary <span>dev</span><img src={footerLogo} loading="lazy" alt="logo" id="header-img" /></h1>
                    <a href="#home" id="link-icon2"><i className="fa-solid fa-arrow-up"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer