import { Component } from "react";
import { menuData } from "../data";
import { Link } from "react-scroll";

import logo from "../../assets/logo.webp";
import "./Navbar.css";


class Navbar extends Component {
    state = {clicked: false};
    handleClick = ()=>{
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render(){
        return (
            <header>
                <h1 id="nav-logo">legendary <span>dev</span> <img src={logo} loading="lazy" alt="logo" id="header-img" /></h1>
    
                <nav className={this.state.clicked ? "navMenu active" : "navMenu"} id="navMenu">
                    <ul>
                        {menuData.map((items, index) => {
                            return (
                                <li key={index}>
                                    <Link to={items.url} duration={100} smooth={true} className={items.cName}>{items.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div className="navbar-menu" id="navbar-menu">
                    <a href="#contact"><i className="fas fa-headset" id="headSet"></i></a>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} id="menuBar" onClick={this.handleClick}></i>
                    <input value="+2347057800674" readOnly />
                </div>
            </header>
        )
    }
}

export default Navbar