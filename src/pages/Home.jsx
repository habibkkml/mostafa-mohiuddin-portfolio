import { Link } from 'react-router-dom';
// import useDataFetching from '../Hooks/useDataFetching';
import About from '../components/About';
import { SEO } from '../components/SEO';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
const Home = () => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            fetch("./home.json")
                .then((response) => response.json())
                .then((data) => {
                    setData(data);
                    setLoading(false);
                });
        };

        fetchData();

        const intervalId = setInterval(() => {
            setLoading(false);
            clearInterval(intervalId);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    if (loading) {
        return <Loading />;
    }

    const homeContent = data?.homeContent;

    return (
        <>
            <SEO title="Home | Mostafa Mohiuddin"
                description="Deputy Managing Director of Khoshroz Kitab Mahal. It was through Mostafa’s work at his grandfather’s publishing company during the summers that he discovered his love for the paper industry and assumed a full-time job as Deputy Managing Director. Mostafa says he owes most of his business acumen to his grandfather, who gave him his foundational training. This knowledge, paired with his love of nature, inspired Mostafa to open a business with his brother in 2021: Magura Agriculture Park Limited. This organic agriculture farm allows a one-stop solution for people to reach farmers and fresh products with ease."
                keywords="Mostafa Mohiuddin, who is Mostafa Mohiuddin, Mostafa Mohiuddin business, Mostafa Mohiuddin Bangladesh, Young Businessman, Youngest Businessman, publication sector, Khoshroz Kitab Mahal, NDC Auto Brick, Khaohroz Advanced Technology Ltd, IT industry, software development, website development, networking services, Bangladesh businessman, publication house, pollution-free bricks, business expansion, smarter IT services, hardworking entrepreneur, motivated businessman, operational capacity, Bangladesh technology, IT solutions, technology development, entrepreneurship, business growth, software solutions, IT consulting, technology innovation, business leadership, startup company, digital transformation, IT infrastructure, business strategy"
                author="Khoshroz Group Developers"
                ogTitle="Mostafa Mohiuddin"
                ogDescription="Deputy Managing Director of Khoshroz Kitab Mahal. It was through Mostafa’s work at his grandfather’s publishing company during the summers that he discovered his love for the paper industry and assumed a full-time job as Deputy Managing Director. Mostafa says he owes most of his business acumen to his grandfather, who gave him his foundational training. This knowledge, paired with his love of nature, inspired Mostafa to open a business with his brother in 2021: Magura Agriculture Park Limited. This organic agriculture farm allows a one-stop solution for people to reach farmers and fresh products with ease."
                ogUrl="https://www.mostafamohiuddin.com"
                ogImage="https://res.cloudinary.com/dfaw271y6/image/upload/v1705831588/DMD_website/DMD_photo1_hsmn2l.jpg"
                twitterTitle="Mostafa Mohiuddin"
                twitterDescription="Deputy Managing Director of Khoshroz Kitab Mahal. It was through Mostafa’s work at his grandfather’s publishing company during the summers that he discovered his love for the paper industry and assumed a full-time job as Deputy Managing Director. Mostafa says he owes most of his business acumen to his grandfather, who gave him his foundational training. This knowledge, paired with his love of nature, inspired Mostafa to open a business with his brother in 2021: Magura Agriculture Park Limited. This organic agriculture farm allows a one-stop solution for people to reach farmers and fresh products with ease."
                twitterImage="https://res.cloudinary.com/dfaw271y6/image/upload/v1705831588/DMD_website/DMD_photo1_hsmn2l.jpg" />
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