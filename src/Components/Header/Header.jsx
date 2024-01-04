// Import CSS
import './Header.css';

// Import Header Books Data
import { headerBooks } from '../../Data/Data';

// Import Swiper React components Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Import Link
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <div className="container header-container">
            {/* Header Swiper slider */}
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                {
                    headerBooks.map(({title, info, btnLink}, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="header-wrapper container">
                                    {/* Header Left */}
                                    <div className="header-left">
                                        <h1>{title}</h1>
                                        <p dangerouslySetInnerHTML={{__html: info}}></p>
                                        <Link className="btn btn-border" to={btnLink}>Learn More</Link>
                                    </div>
                                    {/* Header Right */}
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                
            </Swiper>
        </div>
    </header>
  )
}
