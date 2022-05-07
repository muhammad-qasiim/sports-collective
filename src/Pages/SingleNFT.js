
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart, AiFillEye } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import { IoMdRefresh } from "react-icons/io";

import { BsThreeDotsVertical, BsFillShareFill } from "react-icons/bs";

import { AiFillPlayCircle } from "react-icons/ai";

function Create() {

  return (
    <>
      <section className="container mx-auto px-24 lg:px-99 pt-32 pb-99 mb-99 w-3/4">
        <main>
          <section className="flex flex-col xl:flex-row items-start gap-6">
            <div className="w-full md:w-3/5 xl:w-full">
              <Link to="/collection">
                <div className="relative my-18 px-14 w-full lg:my-12 lg:px-14">
                  <article className="border cursor-pointer overflow-hidden rounded-lg shadow-lg">
                    <div className='px-24 py-14 flex items-center gap-4 justify-between'>
                      <img class="w-3" src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" alt="" />
                      <span className="text-14 text-gray-600 flex items-center gap-2"> <AiOutlineHeart className="transition-all cursor-pointer hover:text-red-600" size="22" /> 14</span>
                    </div>
                    <section className="relative">
                      <img alt="Placeholder" className="block h-auto w-full" src="https://lh3.googleusercontent.com/LwWCE4G49qFjE-HBdMNtMQVDYK6MRbv3rGDJt59o1YAj2DXfxJyCu1KIsK76D_nvcnH9ISAw3OAP2iPT571UVs4CERn_LaPTn1D0QQ=w600" />
                    </section>
                  </article>
                </div>
              </Link>
            </div>
            <div className="w-full mt-8 mb-32 xl:mb-10">
              <section className='flex items-center gap-4 justify-between'>
                <span className='text-red-500 text-18 flex items-center gap-3'>BEANZ Official <GoVerified className="text-blue-500 text-16" /></span>
                <section className="flex justify-center items-center my-8">
                  <div className="grid place-items-center custom-shadow text-gray-500 text-center px-20 h-40 w-56 cursor-pointer rounded-tl-8 rounded-bl-8 border">
                    <IoMdRefresh size="18" />
                  </div>
                  <div className="grid place-items-center custom-shadow text-gray-500 text-center px-20 h-40 w-56 cursor-pointer border">
                    <BsFillShareFill size="14" />
                  </div>
                  <div className="grid place-items-center custom-shadow text-gray-500 text-center px-20 h-40 w-56 cursor-pointer rounded-tr-8 rounded-br-8 border">
                    <BsThreeDotsVertical />
                  </div>
                </section>
              </section>
              <h3 className="text-36 font-semibold mb-2 text-black leading-58">Bean #2409</h3>
              <section className='flex items-center gap-6'>
                <p className="flex items-center gap-2 text-gray-500 "> Owned by  <span className='text-red-500 transition-all hover:text-red-600 cursor-pointer'>BALEAS</span></p>
                <p className="flex items-center gap-2 cursor-pointer text-gray-500 transition-all hover:text-gray-900"> <AiFillEye className="text-gray-450" size="26" /> 7.7K views</p>
                <p className="flex items-center gap-2 cursor-pointer text-gray-500 transition-all hover:text-gray-900"> <AiFillHeart className="text-gray-450" size="24" /> 334 favorites</p>
              </section>
              <p className="mt-4 text-34 text-gray-700 leading-48 pr-0 lg:pr-112">beglobal is the world's first and largest NFT marketplace</p>
              <div className="flex items-center gap-4 mt-38">
                <Link to="/explore">  <button className="bg-red-500 text-white px-32 py-10 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px" >Place Bid</button> </Link>
              </div>
            </div>
          </section>
        </main>
      </section>
    </>
  );
}

export default Create;
