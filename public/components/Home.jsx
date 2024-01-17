import useDataFetching from '../Hooks/useDataFetching';

const Home = () => {
    const { data, loading, error } = useDataFetching('/public/data/data.json');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    const { homeContent } = data.home;
    return (
        <section className="home">
            <div className="wrapper">
                <div className="row ">
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
                        <div className="home__company">
                            {/* <marquee direction="left">
                                <h3>{homeContent.company} {homeContent.company} {homeContent.company}</h3>
                            </marquee> */}
                            <h3>{homeContent.company}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__image">
                <img src={homeContent.homeImage} alt={homeContent.title} />
            </div>
        </section>
    )
}

export default Home