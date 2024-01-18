import useDataFetching from '../Hooks/useDataFetching';
import Loading from './Loading';

const Footer = () => {
    const { data, loading, error } = useDataFetching('/src/data/data.json');

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    const { footer } = data;

    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <p dangerouslySetInnerHTML={{ __html: footer.copyright }} />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
