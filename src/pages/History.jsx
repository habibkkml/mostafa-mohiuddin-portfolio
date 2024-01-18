import useDataFetching from '../Hooks/useDataFetching';
import Loading from '../components/Loading';

const About = () => {
    const { data, loading, error } = useDataFetching('/src/data/data.json');

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    const { hostory } = data;
    return (
        <>
            <section className="history">
                <div className="history__content">
                    <div className="history__image">
                        <img src='/src/assets/img/honorable-founder.png' alt="" />
                    </div>
                    <div className="history__description">
                        <div className="history__description--top">
                            <h3>Honorable Chairman</h3>
                            <h2>Mr. Mohiuddin Ahmed</h2>
                            <p>Khoshroz Kitab Mahal and NDC Auto brick</p>
                        </div>
                        <div className="history__description--main">
                            <p>Mohiuddin Ahmad’s message as the founder of KKML is truly inspiring as it demonstrates his passion for creating a better future for the people of Bangladesh. His efforts to create employment opportunities and promote environmental sustainability are commendable. Despite facing adversity, he was able to establish multiple successful companies, which is a testament to his determination and entrepreneurial spirit. One of his notable achievements is the establishment of a pollution-free brick factory in partnership with organizations like UNDP and ADB, showing how businesses can have a positive impact on the environment.</p>
                            <p>The founder expresses his gratitude towards ADB and Janata Bank for investing in the project, as well as UNDP for their technical support. This highlights the importance of collaboration in achieving success.</p>
                            <p>
                                In summary, Mohiuddin Ahmad’s message emphasizes the power of determination and the pursuit of dreams in creating a positive impact on society. It is a reminder that with hard work and a commitment to creating a better future, anything is possible. During the 1980-90 decade when it was impossible to establish a private sector paper manufacturing company due to all paper mills being run by the government, he still had the vision to establish a paper manufacturing company. Thus, he established Paper Manufacturing & Paper Converting Company as a joint venture project with the government named Magura Paper Mills Ltd., Bangladesh Monospool Paper Manufacturing Company Ltd., and Paper Processing & Packaging Ltd.


                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About