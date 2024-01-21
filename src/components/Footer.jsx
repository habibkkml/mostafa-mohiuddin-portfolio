import useDataFetching from '../Hooks/useDataFetching';
import Loading from './Loading';

const Footer = () => {
    const { data, loading, error } = useDataFetching('data.json');

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    const { footer } = data || {};

    return (
        <footer className="footer">
            <p dangerouslySetInnerHTML={{ __html: footer.copyright }} />
        </footer>
    );
}

export default Footer;
