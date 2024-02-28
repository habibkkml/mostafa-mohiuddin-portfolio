import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { SEO } from "../components/SEO";

const Companies = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            fetch("./company.json")
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
    if (loading) { return <Loading /> }
    const { company } = data;
    return (
        <>
            <SEO title="Companies | Mostafa Mohiuddin"
                description="Leading family business specializing in publications exports, with multiple companies including Khoshroz Kitab Mahal, National Development Company Limited, Jatiya Mudran Limited, Magura Agriculture Park Limited, E-Stylze Fashion Limited, and Dream International Limited"
                keywords="Khoshroz Group, Khoshroz Kitab Mahal, National Development Company Limited, Jatiya Mudran, Magura Agriculture Park Limited, E-Stylze fashion e-commerce, Dream International Limited, company group, conglomerate, business group, diversified company, investment company, corporate group, Khoshroz, Kitab Mahal, development company, agriculture park, fashion e-commerce, international company, business concerns, company portfolio, group of companies, enterprise group, investment group, corporate entity, business conglomerate, company holdings, business portfolio, company subsidiaries, Khoshroz Group, benevolent services, profit-making, society, multi-faceted entity, food sector, clothing sector, housing sector, education sector, healthcare sector, Bangladeshi people, economic development, industries, plants, future of the nation, business operations, management, diversification, opportunities, dedication, hard work, subsidiaries, economic development, industries, plants, activities, sectors, lifestyle enhancement, Bangladesh, Khoshroz Group concerns"
                author="Khoshroz Group Developers"
                ogTitle="Khoshroz Group of Company"
                ogDescription="Leading family business specializing in publications exports, with multiple companies including Khoshroz Kitab Mahal, National Development Company Limited, Jatiya Mudran Limited, Magura Agriculture Park Limited, E-Stylze Fashion Limited, and Dream International Limited"
                ogUrl="https://www.mostafamohiuddin.com"
                ogImage="https://res.cloudinary.com/dfaw271y6/image/upload/v1706095346/logos/b1z8dxf7cvrkqugkr5io.png"
                twitterTitle="Khoshroz Group of Company"
                twitterDescription="Leading family business specializing in publications exports, with multiple companies including Khoshroz Kitab Mahal, National Development Company Limited, Jatiya Mudran Limited, Magura Agriculture Park Limited, E-Stylze Fashion Limited, and Dream International Limited"
                twitterImage="https://res.cloudinary.com/dfaw271y6/image/upload/v1706095346/logos/b1z8dxf7cvrkqugkr5io.png" />
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
                        <div className="row justify-content-center">
                            {company?.companies?.map((item, index) => (
                                <div className="col-lg-5" key={index}>
                                    <div className="company__container">
                                        <a href={item.url} target="/_blank">
                                            <div className="company__logo">
                                                <img src={item.logo} alt={item.alt} />
                                            </div>
                                            <div className="company__text">
                                                <p>{item.text}</p>
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