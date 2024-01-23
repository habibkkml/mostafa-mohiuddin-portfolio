import { Link } from 'react-router-dom';
// import useDataFetching from '../Hooks/useDataFetching';
import About from '../components/About';
import { SEO } from '../components/SEO';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
const Home = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch("./home.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, [])

    if (!data) {
        return <Loading />;
    }
    const homeContent = data?.homeContent;
    console.log(homeContent)
    const seoProps = {
        title: 'Home | Mostafa Mohiuddin',
        description: homeContent?.desc,
        name: homeContent?.title,
        type: 'website',
        image: homeContent?.homeImage,
        socialLinks: [
            {
                icon: 'brands-facebook',
                link: 'https://www.facebook.com/mostafajmohiuddin/',
            },
            {
                icon: 'brands-linkedin',
                link: 'https://bd.linkedin.com/in/mostafajafirmohiuddin',
            },
            {
                icon: 'brands-youtube',
                link: 'https://www.youtube.com/@khoshrozkitabmahalltd',
            },
        ],
    };
    return (
        <>
            <SEO {...seoProps} />
            <section className="home">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="home__title">
                                <h1>{homeContent?.title}</h1>
                            </div>
                            <div className="home__designation">
                                <h2>
                                    {homeContent?.designation?.map((text, index) => (
                                        <span key={index} className='designation__multiline'>{text}</span>
                                    ))}
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home__company">
                                <h3>{homeContent?.company}</h3>
                            </div>
                            <button className='primary__btn'>
                                <Link to={'/history'}> History</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="home__image">
                    <img src={homeContent?.homeImage} alt={homeContent?.title} />
                </div>
            </section>
            <section className="home__des">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="home__details">
                                <p>{homeContent?.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
        </>

    )
}

export default Home;