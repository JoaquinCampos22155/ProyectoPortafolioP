"use client"

import {Swiper} from "swiper/react";
import { Pagination } from "swiper/modules";

const SliderTech = () => {
    return ( 
        <Swiper 
        breakpoints= {{
        320: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 15
        },
    }}
    freeMode= {true}
    pagination = {{
        clickable: true
    }}
    modules = {[Pagination]}
    className = "h-[280px] md:h-[340px] w-[270px] md:w-[550px]">
        
    </Swiper>
     );
}
 
export default SliderTech;