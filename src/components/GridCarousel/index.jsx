import CarouselCard from './CarouselCard'

const GridCarousel = ({ children }) => {

    const CarouselCards = ["How to Easily Setup a MetaMask Wallet", "How to Fund MetaMask with ETH", "How to Find an NFT You Love"]

    return (
        <section className="container mx-auto px-24 lg:px-99 my-99">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mx-1 lg:-mx-4">

                <div className="flex flex-col items-start justify-center w-full my-18 px-14 lg:mt-32 lg:mb-18 lg:px-14">
                    {children}
                </div>

                {
                    CarouselCards?.map((card) => (
                        <CarouselCard />
                    ))
                }
            </div>
        </section>
    )
}

export default GridCarousel;