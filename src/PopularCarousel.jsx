import React, { Component } from 'react';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
// core version + navigation, pagination modules:
import { Navigation, Pagination } from 'swiper';
import BlogPost from "./BlogPost";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// init Swiper:
class PopularCarousel extends Component{
    componentDidMount(){
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                slidesPerView: 1,
                spaceBetween: 20,
                slidesPerGroup: 1
                },
                // when window width is >= 1100px
                1100: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    slidesPerGroup: 2
                    },
                // when window width is >= 1501px
                1501: {
                slidesPerView: 3,
                spaceBetween: 40,
                slidesPerGroup: 2
                },
                // when window width is >= 2501px
                2501: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                    slidesPerGroup: 4
                    }
            },
          });
    }

    render() {
    

        return (
            <div>
                <div class="swiper-container">
        <div class="swiper-wrapper">
        
          <div class="swiper-slide"><BlogPost/></div>
          <div class="swiper-slide"><BlogPost/></div>
          <div class="swiper-slide"><BlogPost/></div>
          <div class="swiper-slide"><BlogPost/></div>
          <div class="swiper-slide"><BlogPost/></div>
          <div class="swiper-slide"><BlogPost/></div>
          <div class="swiper-slide"><BlogPost/></div>
          <div class="swiper-slide"><BlogPost/></div>
          <div class="swiper-slide"><BlogPost/></div>
          <div class="swiper-slide"><BlogPost/></div>
          
        </div>
        {/* Add Pagination */}
        <div class="swiper-pagination"></div>
        {/*  Add Arrows  */}
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
            </div>
        )
    }
}

export default PopularCarousel;




