import { Link } from 'react-router-dom';
import useDataFetching from '../Hooks/useDataFetching';
import About from '../components/About';
import Loading from '../components/Loading';
import { SEO } from '../components/SEO';

const Home = () => {
    const { data, loading, error } = useDataFetching('data.json');

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    const { homeContent } = data.home;

    return (
        <>
            <SEO
                title={`Home | ${homeContent.title}`}
                description={homeContent.desc}
                name={homeContent.title}
                type="article"
                image={homeContent.homeImage}
                socialLinks={data.headerContent.social}
            />
            <section className="home">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="home__title">
                                <h1>{homeContent.title}</h1>
                            </div>
                            <div className="home__designation">
                                <h2>
                                    {homeContent.designation.map((text, index) => (
                                        <span key={index} className='designation__multiline'>{text}</span>
                                    ))}
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home__company">
                                <h3>{homeContent.company}</h3>
                            </div>
                            <button className='primary__btn'>
                                <Link to={'/history'}> History</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="home__image">
                    <img src={homeContent.homeImage} alt={homeContent.title} />
                </div>
            </section>
            <section className="home__des">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="home__details">
                                <p>{homeContent.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
        </>

    )
}

export default Home