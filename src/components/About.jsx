import Slider from "./Slider"
import useDataFetching from '../Hooks/useDataFetching';
import Loading from "./Loading";
const About = () => {
    const { data, loading, error } = useDataFetching('data.json');

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    const { about } = data || {};
    return (
        <>

            <section className="about">
                <div className="about__content">
                    <div className="about__image">
                        <img src={about.aboutImage} alt={about.aboutAlt} />
                    </div>
                    <div className="about__content--right">
                        <h3 className="section__title">{about.aboutTitle}</h3>
                        {about.biography.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                        <Slider />
                    </div>
                </div>
            </section>

        </>
    )
}

export default About