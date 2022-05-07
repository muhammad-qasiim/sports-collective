
import { useState } from 'react'
import { GoVerified } from "react-icons/go";
import { BsCollection } from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";
import { AiOutlineTag, AiOutlineEyeInvisible, AiOutlineHeart, AiOutlineFormatPainter, AiOutlineUnorderedList } from "react-icons/ai";

import CollectionItem from '../components/CollectionItem'

function Create() {
  const [activeLink, setActiveLink] = useState('Collected')
  const Collections = ["Collected", "Created", "Favourited", "Hidden", "Activity", "Offers", "Lisitngs",]

  return (
    <>
      <header className="nft-bg relative w-100 h-224">
        <div className="absolute w-96 h-96 rounded-full  border-4 border-gray-50 -bottom-12 left-2/4 -translate-x-2/4">
          <img alt="Placeholder" className="h-full rounded-full w-full overflow-hidden" src="https://lh3.googleusercontent.com/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI=s130" />
        </div>
      </header>

      <section className="container mx-auto px-24 lg:px-99 my-72 text-center">
        <h3 className="text-28 font-semibold text-center mb-18 flex items-center gap-2 justify-center">Otherdeed for Otherside <GoVerified className="text-blue-500 text-22 mt-4" /> </h3>

        <h5 className="flex items-center gap-2 justify-center mb-14">Created by <span className="text-red-500 cursor-pointer transition-all hover:text-red-700">OthersideMeta</span> <GoVerified className="text-blue-500 text-14" /> </h5>


        <section className="flex justify-center items-center my-22">
          <div className="custom-shadow text-center px-20 py-12 w-160 cursor-pointer rounded-tl-8 rounded-bl-8 border">
            <h4 className="font-bold text-22">90.6K</h4>
            <p className="text-gray-600">items</p>
          </div>
          <div className="custom-shadow text-center px-20 py-12 w-160 cursor-pointer border">
            <h4 className="font-bold text-22">30.1K</h4>
            <p className="text-gray-600">owners</p>
          </div>
          <div className="custom-shadow text-center px-20 py-12 w-160 cursor-pointer border">
            <h4 className="font-bold text-22">7.09</h4>
            <p className="text-gray-600">floor price</p>
          </div>
          <div className="custom-shadow text-center px-20 py-12 w-160 cursor-pointer rounded-tr-8 rounded-br-8 border">
            <h4 className="font-bold text-22">70.3K</h4>
            <p className="text-gray-600">volume traded</p>
          </div>
        </section>

        <p className="text-18 w-full md:w-2/4 mx-auto font-light" style={{color: '#707a83'}}>Otherdeed is the key to claiming land in Otherside. Each have a unique blend of environment and sediment — some with resources, some home to powerful artifacts. And on a very few, a Koda roams.</p>
      </section>

      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 mb-32 mx-8 overflow-x-scroll">
                    <ul className="flex items-center 2xl:justify-center gap-8 mb-4 whitespace-nowrap">
                        {
                            Collections?.map(collection => (
                                <li onClick={() => setActiveLink(collection)}>
                                    <span className={`flex items-center gap-2 relative text-lg border-b-2 border-transparent cursor-pointer transition-all text-gray-500 hover:text-gray-800 ${activeLink === collection && 'active after:-bottom-2 text-gray-800'}`}>
                                    {collection === 'Collected' && <BsCollection size="16" />}
                                    {collection === 'Created' && <AiOutlineFormatPainter size="20" />}
                                    {collection === 'Favourited' && <AiOutlineHeart size="18" />}
                                    {collection === 'Hidden' && <AiOutlineEyeInvisible size="20" />}
                                    {collection === 'Activity' && <GiBackwardTime size="18" />}
                                    {collection === 'Offers' && <AiOutlineUnorderedList size="16" />}
                                    {collection === 'Lisitngs' && <AiOutlineTag size="18" />}
                                    {collection}
                                    <span className='text-14 mt-1'>0</span>
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>

      <section className="container mx-auto px-24 lg:px-99 my-72 text-center">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {
                    Collections?.map(collection => (
                        <CollectionItem />
                    ))
                }
            </div>
            </section>
    </>
  );
}

export default Create;
