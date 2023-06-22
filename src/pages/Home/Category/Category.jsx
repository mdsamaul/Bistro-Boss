import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import slider1 from '../../../assets/home/slide1.jpg';
import slider2 from '../../../assets/home/slide2.jpg';
import slider3 from '../../../assets/home/slide3.jpg';
import slider4 from '../../../assets/home/slide4.jpg';
import slider5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle.jsx";

const Category = () => {
    return (
        <section>
            <SectionTitle subHeading={'From 11.00am to 10.00pm'}
                heading={'Order Online'}>

            </SectionTitle>
            <Swiper

                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-5"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h3 className="text-white text-4xl text-center uppercase -mt-16">Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className="text-white text-4xl text-center uppercase -mt-16">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className="text-white text-4xl text-center uppercase -mt-16">Jusce</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className="text-white text-4xl text-center uppercase -mt-16">Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h3 className="text-white text-4xl text-center uppercase -mt-26">Salad</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;