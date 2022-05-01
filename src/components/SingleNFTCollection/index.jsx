import { GoVerified } from "react-icons/go";
import {  AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const SingleNFTCollection = () => {

    return (

        <div className="my-18 px-14 w-full md:w-1/2 lg:my-12 lg:px-14 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg custom-shadow">
                <section className="relative">
                    <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                    {/* <div className="absolute h-64 w-64 rounded-full  border-4 border-gray-50 -bottom-7 left-2/4 -translate-x-2/4">
                        <img alt="Placeholder" className="h-full rounded-full w-full overflow-hidden" src="https://picsum.photos/600/400/?random" />
                    </div> */}
                </section>
                <footer className='text-center py-14 px-12'>
                    <div className="flex items-center justify-between gap-2 mt-4 mb-8">
                    <h6 className="flex items-center gap-2 justify-center mt-4 text-md leading-relaxed text-gray-700 cursor-pointer font-medium transition-all hover:text-gray-900"> Otherdeed for Otherside <GoVerified className="text-blue-500 text-16" /> </h6>
                    <span className="text-14 text-gray-600">Top Bid</span>
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-4 mb-8">
                    <h6 className="flex items-center gap-2 justify-center mt-4 text-sm leading-relaxed text-gray-600 cursor-pointer font-medium transition-all hover:text-gray-900"> 58192 </h6>
                    <span className="text-14 text-gray-700 font-bold flex items-center gap-2">
                        <img className="w-10" src="https://openseauserdata.com/files/accae6b6fb3888cbff27a013729c22dc.svg" alt="" />
                        5.5</span>
                    </div>
                    <div className="flex justify-end mb-14">
                    <span className="text-14 text-gray-700 font-bold flex items-center gap-2">
                        <span className="text-gray-500 font-light text-12">Offers for: </span>
                        <img className="w-10" src="https://openseauserdata.com/files/accae6b6fb3888cbff27a013729c22dc.svg" alt="" />
                        5.5</span>                    
                    </div>

                    <section className="flex items-center justify-between gap-2 mb-8 border-t pt-16 mt-12">
                    <h6 className="flex items-center gap-2 justify-center mt-4 text-md leading-relaxed text-gray-700 cursor-pointer font-medium transition-all hover:text-gray-900"> 
                    <Link to="/transfer_nft">  Transfer </Link>
                     </h6>
                    <span className="text-14 text-gray-600 flex items-center gap-2"> <AiOutlineHeart className="transition-all cursor-pointer hover:text-red-600" size="22" /> 14</span>
                    </section>
                </footer>
            </article>
        </div>

    )
}

export default SingleNFTCollection;