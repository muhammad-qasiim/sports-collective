import CarouselCard from './CarouselCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GridCarousel = ({ theme, children }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    }

    const CarouselCards = [1, 2, 3, 4, 5, 6, 7]

    return (
        <section className="container overflow-x-hidden mx-auto px-24 lg:px-99 mt-62 lg:mt-99">

            <main className='flex flex-col 2xl:flex-row items-start 2xl:items-center gap-8'>

                <div className='w-full mb-18 2xl:mb-99 2xl:w-3/12 px-16 2xl:px-0'>
                    {children}
                </div>

                <section className={`slider-listing w-full 2xl:w-3/4 ${theme}`}>
                    <Slider {...settings}>
                        {
                            CarouselCards?.map(item => (
                                <section className='w-full'>
                                    <CarouselCard />
                                </section>

                            ))
                        }
                    </Slider>
                </section>

            </main>
        </section>
    )
}

export default GridCarousel;