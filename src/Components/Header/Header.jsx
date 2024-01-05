// Import CSS
import "./Header.css";

// Import Header Books Data
import { headerBooks } from "../../Data/Data";

// Import Swiper React components, Core module, styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

// Import Rreact Arrow Icon
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

// Import Link
import { Link } from "react-router-dom";

// Import Shape Svg
import headerShape from '../../assets/header-shape.svg';

export default function Header() {
  return (
    <header>
      <div className="container header-container">
        {/* Header Swiper slider */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          modules={[Navigation, Pagination]}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            prevEl: ".button-prev-slide",
            nextEl: ".button-next-slide",
          }}
        >
          {headerBooks.map(({ title, info, img, btnLink }, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="header-wrapper container">
                  {/* Header Left */}
                  <div className="header-left">
                    <h1>{title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: info }}></p>
                    <Link className="btn btn-border" to={btnLink}>
                      Learn More
                    </Link>
                  </div>
                  {/* Header Right */}
                  <div className="header-right">
                    <img src={img} alt="Image" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          {/*.......Arrow Button.......... */}
          <div className="slider-button">
            <div className="button-prev-slide slidebutton">
              <GoArrowLeft />
            </div>
            <div className="button-next-slide slidebutton">
              <GoArrowRight />
            </div>
          </div>

          {/*.......Header Pagination.......... */}
          <div className="container">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>

         {/*.......Header Shape.......... */}
         <div className="header-shape">
            <img src={headerShape} alt=""/>
          </div>
      </div>
    </header>
  );
}
