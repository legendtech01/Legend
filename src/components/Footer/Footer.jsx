import "./Footer.css"
import footerLogo from "../../assets/logo.png"

function Footer() {
    return (
        <footer id="footer">
            <div className="footer-container">
                <div className="footer-wrapper1">
                    <h1 id="nav-logo">legendary <span>dev</span><img src={footerLogo} alt="logo" id="header-img" /></h1>
                    <a href="#home" id="link-icon2"><i className="fa-solid fa-arrow-up"></i></a>
                </div>
                <hr />
                <div className="footer-wrapper2">
                    <p>Copyright © 2024 by Legendary Dev | All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer