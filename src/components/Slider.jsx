import useDataFetching from '../Hooks/useDataFetching';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Loading from './Loading';

const Slider = () => {
    const { data, loading, error } = useDataFetching('/src/data/data.json');

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    const { brands } = data;
    return (
        <Swiper
            spaceBetween={0}
            freeMode={true}
            loop={true}
            speed={2000}
            autoplay={{
                delay: 0,
                pauseOnMouseEnter: true
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },

            }}
            modules={[FreeMode, Autoplay]}
        >
            {brands.brandLogos.map((item, index) => (
                <SwiperSlide key={index}>
                    <Link to={item.url} target='_blank'>
                        <img src={item.logo} alt={item.alt} />

                    </Link>
                </SwiperSlide>

            ))}
        </Swiper>
    )
}

export default Slider