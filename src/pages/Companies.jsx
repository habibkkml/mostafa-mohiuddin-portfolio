import { useEffect, useState } from "react";
// import useDataFetching from "../Hooks/useDataFetching";
import Loading from "../components/Loading";
import { SEO } from "../components/SEO";

const Companies = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("./company.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, [])

    if (!data) {
        return <Loading />;
    }
    // const homeContent = data?.homeContent;
    const { company } = data;
    const seoProps = {
        title: 'Home | Mostafa Mohiuddin',
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
            <section className="company">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="company__desc">
                                {company?.desc?.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="company__wrapper">
                    <div className="wrapper">
                        <div className="row">
                            {company?.companies?.map((item, index) => (
                                <div className="col-lg-5 mx-auto" key={index}>
                                    <div className="company__container">
                                        <a href={item.url} target="/_blank">
                                            <div className="company__logo">
                                                <img src={item.logo} alt={item.alt} />
                                            </div>
                                            <div className="company__text">
                                                <p>{item.alt}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Companies