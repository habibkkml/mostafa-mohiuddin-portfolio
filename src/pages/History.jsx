import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { SEO } from '../components/SEO';

const About = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("./history.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                console.log(data)

            });
    }, [])
    if (!data) <Loading />
    const history = data?.history;
    const seoProps = {
        title: 'History of | Mostafa Mohiuddin',
        // description: homeContent.desc,
        // name: homeContent.title,
        type: 'website',
        // image: homeContent.homeImage,
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
            <section className="history">
                {history?.map((item, index) => (

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