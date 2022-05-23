import CarouselCard from './CarouselCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GridCarousel = ({ children }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    }

    const CarouselCards = ["How to Easily Setup a MetaMask Wallet", "How to Fund MetaMask with ETH", "How to Find an NFT You Love"]

    return (
        <section className="container mx-auto px-24 lg:px-99 my-99">
            <main className='flex flex-col 2xl:flex-row items-start 2xl:items-center gap-8'>
                <div className='w-full 2xl:w-3/12 px-16 2xl:px-0'>
                    {children}
                </div>

                <section className='w-full'>
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