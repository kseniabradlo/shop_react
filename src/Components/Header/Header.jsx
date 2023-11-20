import './Header.css';
import logo from '../../assets/img/logo.png';
import {NavLink} from "react-router-dom";

function Header(){
    return(
        <header className="Header">
            <nav className="navHeader">
                <div className="left">
                    <NavLink to='/main'>MAIN</NavLink>
                    <NavLink to='/contact'>CONTACT US</NavLink>
                    <NavLink to='/tobacco'>TOBACCO</NavLink>
                    <a href="#">JOURNAL</a>
                    <a href="#">ABOUT</a>
                </div>

                <div className="logo"><img src={logo} alt="logo"/></div>

                <div className="right">
                    <a href="#">HELP&SUPPORT</a>
                    <a href="#">ACTIVATE</a>
                    <a href="#">ACCOUNT</a>
                    <a href="#">BUY</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;