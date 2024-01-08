import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";



const Testimonial = () => {
    return (
        <div className='mt-[30px] lg:mt-[55px] '>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}>
                <SwiperSlide> <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor '>
                                Steve Pinkman
                            </h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        I have received medical care from their team, and I must say, their treatment is exceptional. They provide top-notch medical services with great care and professionalism.
                    </p>
                </div></SwiperSlide>
                <SwiperSlide>  <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor '>
                                John Anderson
                            </h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        I could not be happier with the medical services provided by this healthcare center. The doctors and staff are not only highly skilled but also incredibly caring. They have my full trust and gratitude.
                    </p>
                </div></SwiperSlide>
                <SwiperSlide><div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor '>
                                Sarah Johnson
                            </h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        My experience with their medical services has been outstanding. The care and attention I received were truly exceptional. They go above and beyond to ensure their patients well-being.
                    </p>
                </div></SwiperSlide>
                <SwiperSlide><div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor '>
                                Emily Parker
                            </h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        I recently received medical care from them, and I could not be more pleased. The level of care and attention I received was exceptional. They truly excel in providing the highest quality medical services.
                    </p>
                </div></SwiperSlide>

            </Swiper>

        </div>
    )
}

export default Testimonial