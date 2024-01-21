import useDataFetching from '../Hooks/useDataFetching';
import Loading from '../components/Loading';
import { SEO } from '../components/SEO';

const About = () => {
    const { data, loading, error } = useDataFetching('data.json');

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    const { history } = data;
    const { homeContent } = data.home;
    return (
        <>
            <SEO
                title={homeContent.title}
                description={homeContent.desc}
                name={homeContent.title}
                type="article"
                image={homeContent.homeImage}
                socialLinks={data.headerContent.social}
            />
            <section className="history">
                {history.map((item, index) => (

                    <div className="history__content" key={index}>

                        <div className="history__image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="history__description">
                            <div className="history__description--top">
                                <h3>{item.designation}</h3>
                                <h2>{item.name}</h2>
                                <p>{item.company}</p>
                            </div>
                            <div className="history__description--main">
                                <h4>{item.descTitle}</h4>
                                {item.description && item.description.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default About