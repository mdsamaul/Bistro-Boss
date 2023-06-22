import { Rating } from '@smastrom/react-rating';
import { useEffect, useState } from "react";
import { ImQuotesLeft } from 'react-icons/im';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle.jsx";

import '@smastrom/react-rating/style.css';

const TestMonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error))
    }, []);
    // console.log(reviews);
    return (
        <section>
            <SectionTitle subHeading={'What our client Say'} heading={'Testimonials'}></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper bg-gradient-to-r from-[#878ffd00] via-indigo-500 to-[#7167ff00] ">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center my-20 mx-20">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <div className='mt-6'>
                                    <ImQuotesLeft className='text-7xl' />
                                </div>
                                <p className='py-10 px-24 text-center'>{review.details}</p>
                                <h3 className="text-2xl text-orange-400">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </section>
    );
};

export default TestMonials;