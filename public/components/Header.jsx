import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import useDataFetching from '../Hooks/useDataFetching';

const Header = () => {
    const { data, loading, error } = useDataFetching('/public/data/data.json');

    if (loading) {
        return <div>Loading...</div>;
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
