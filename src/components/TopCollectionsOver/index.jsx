import Collection from './category'
import { IoIosArrowDown } from "react-icons/io";

const TopCollectionsOver = () => {

    const Categories = ["How to Easily Setup a MetaMask Wallet", "How to Fund MetaMask with ETH", "How to Find an NFT You Love"]

    return (
        <section className="container mx-auto px-24 lg:px-99 my-99">

            <h3 className="text-28 font-semibold text-center mb-38 flex items-center gap-3 justify-center">Top collections over <span className='cursor-pointer text-red-600 flex items-center gap-3'>last 7 days <IoIosArrowDown className='mt-8' /></span></h3>

            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {
                    Categories?.map(category => (
                        <Collection category={category} />
                    ))
                }
            </div>
            <section className='flex justify-center mb-72 mt-38'>
        <button className="bg-red-500 text-white px-32 py-10 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px" >Go to Rankings</button> 
      </section>
        </section>
    )
}

export default TopCollectionsOver;