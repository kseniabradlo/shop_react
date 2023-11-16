import './Header.css';
import logo from './assets/img/logo.png'

function Header(){
    return(
        <>
            <nav className="navHeader">
                <div className="left">
                    <div>SUPPLEMENT</div>
                    <div>LASER</div>
                    <div>REVIEWS</div>
                    <div>JOURNAL</div>
                    <div>ABOUT</div>
                </div>

                <div className="logo"><img src={logo} alt="logo"/></div>

                <div className="right">
                    <div>HELP&SUPPORT</div>
                    <div>ACTIVATE</div>
                    <div>ACCOUNT</div>
                    <div>BUY</div>
                </div>
            </nav>
        </>
    )
}

export default Header;