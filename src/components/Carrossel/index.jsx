import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import gtx1650 from '../../assets/produtos/gtx1650.png';
import rtx4060ti from'../../assets/produtos/rtx4060ti.png'
import rx6600 from '../../assets/produtos/rx6600.png'
import rx7600 from '../../assets/produtos/rx7600.png'
import './styles.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Carrossel() {
    const slides = [gtx1650, rtx4060ti, rx6600, rx7600];
    return (
        <div className="carrossel-home">
            <Swiper
            modules = {[Navigation, Pagination]}
                navigation
                pagination
                loop
                >
                {slides.map(slide => (
                    <SwiperSlide>
                        <img src={slide} alt={slides} srcset="" />
                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    )
}

export default Carrossel