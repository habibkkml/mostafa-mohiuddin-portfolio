import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import useDataFetching from '../Hooks/useDataFetching';
import Loading from './Loading';

const Header = () => {
    const { data, loading, error } = useDataFetching('data.json');

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    const { headerContent } = data;

    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__inner">
                    <div className="header__logo">
                        <Link to={headerContent.url}>
                            <img src={headerContent.logo} alt={headerContent.logoAlt} />
                        </Link>
                        <button className="d-md-none d-sm-block header__mobile--nav">
                            <Icon iconName='fi-rr-bars-staggered' />
                        </button>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__nav--list list-unstyled">
                            {headerContent.nav.map((navItem, index) => (
                                <li key={index}>
                                    <Link to={navItem.url}>{navItem.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="header__social">
                        <ul className="header__social--icons list-unstyled">
                            {headerContent.social.map((socialItem, index) => (
                                <li key={index}>
                                    <Link to={socialItem.url} target='_blank' rel="noreferrer">
                                        <Icon iconName={socialItem.icon} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
