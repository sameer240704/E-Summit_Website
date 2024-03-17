import { useRef } from "react";
import image1 from "../assets/events/img1.jpg";
import image2 from "../assets/events/img2.jpg";
import image3 from "../assets/events/img3.jpg";
import image4 from "../assets/events/img4.jpg";
import image5 from "../assets/events/img5.jpg";
import image6 from "../assets/events/img6.jpg";
import image7 from "../assets/events/img7.jpg";
import image8 from "../assets/events/img8.jpg";
import image9 from "../assets/events/img9.jpg";
import image10 from "../assets/events/img10.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
// import "../styles/carousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10 ];

const Gallery = () => {
    return (
        <div id="gallery" className="relative h-screen flex items-center justify-center">
            <Swiper
                modules={[ EffectCoverflow, Navigation, Pagination ]}
                navigation = {{
                    prevEl: ".button-prev",
                    nextEl: ".button-next",
                }}
                pagination={{ clickable: true }}
                spaceBetween={2}
                speed={ 1000 }
                slidesPerView={3}
                centeredSlides
                effect={"coverflow"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                className="h-[500px] w-[99%] mt-20 rounded-xl"
            >
                {images.map(( slide, index ) => (
                    <SwiperSlide key={index} className="w-full h-full">
                        <img 
                            src={slide} 
                            alt="Event Image"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </SwiperSlide>
                ))}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 bg-ESummitBlue-900 rounded-full flex justify-center items-center cursor-pointer z-10 button-prev text-white">
                    <IoIosArrowBack />
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-ESummitBlue-900 rounded-full flex justify-center items-center cursor-pointer z-10 button-next text-white">
                    <IoIosArrowForward />
                </div>
            </Swiper>
        </div>
    );
}

export default Gallery;
