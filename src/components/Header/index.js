import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderItem from "./HeaderItem";

const Header = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const headerItems = [{ imgUrl: '3', color: '#8251D4' }, { imgUrl: '3', color: '#FF0011' }, { imgUrl: '3', color: '#FFA500' }]

    return (
        <>
            <div className="w-full">
                <Slider {...settings}>
                    {
                        headerItems?.map(item => (
                            <section>
                                <HeaderItem item={item} />
                            </section>
                        ))
                    }
                </Slider>
            </div>
        </>
    );
}

export default Header;