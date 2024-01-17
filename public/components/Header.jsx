import { Link } from 'react-router-dom';
import { Icon } from './Icon';

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__inner">
                    <div className="header__logo">
                        <Link to={'/'}>
                            <img src={"../../src/assets/img/mm-logo-300.png"} alt="" />
                        </Link>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__nav--list list-unstyled">
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/about'}>About</Link>
                            </li>
                            <li>
                                <Link to={'/history'}>History</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__social">
                        <ul className="header__social--icons list-unstyled">
                            <li>
                                <a href="#" target='_blank'>
                                    <Icon iconName={'fi-brands-facebook'} />
                                </a>
                            </li>
                            <li>
                                <a href="#" target='_blank'>
                                    <Icon iconName={'fi-brands-instagram'} />
                                </a>
                            </li>
                            <li>
                                <a href="#" target='_blank'>
                                    <Icon iconName={'fi-brands-youtube'} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header__inner">
                            <div className="header__logo">
                                <a href="#">
                                    <img src={"../../src/assets/img/mm-logo-300.png"} alt="" />
                                </a>
                            </div>
                            <nav className="header__nav" id="menuItem">
                                <ul className="header__nav--menu">
                                    <li>
                                        <Link to='/'>Home</Link>
                                    </li>
                                    <li>
                                        <Link to='/about'>About</Link>
                                    </li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li><a href="#">FAQ</a></li>

                                    <li><a href="#">Shop</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </nav>
                            <div className="header__trigger">
                                <button id="menuTriggerBtn">
                                    <i className="fi fi-rr-menu-burger"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </header>

    )
}

export default Header