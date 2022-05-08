import { Link } from 'react-router-dom';
import CollectionItem from '../../CollectionItem'
import { FaAlignLeft } from "react-icons/fa";

import { RiMenu2Line } from "react-icons/ri";

import { GoVerified } from "react-icons/go";
import { MdKeyboardArrowUp } from "react-icons/md";
const NFTDetail = () => {
    return (
        <>
            <section className='border rounded-8 my-22 pt-18'>

                <div className='flex items-center gap-4 pb-18 border-b px-24 cursor-pointer'>
                    <span className='text-16 font-bold flex items-center gap-3 text-gray-900'> <FaAlignLeft className='text-gray-800' size="18" />Description </span>
                </div>

                <div className='px-24 bg-gray-50 pt-14 pb-18'>
                    <span className='text-gray-500 font-light text-16 flex items-center gap-2'> Created by <span className='text-red-500'>TeamAzuki</span> <GoVerified className="text-blue-500 text-16" /></span>
                </div>

                <div className='flex items-center justify-between gap-4 py-18 border-t border-b px-24 cursor-pointer'>
                    <span className='text-16 font-bold flex items-center gap-3 text-gray-900'> <RiMenu2Line className='text-gray-800' size="22" />Details </span>
                    <MdKeyboardArrowUp className='text-gray-600 cursor-pointer' size="20" />
                </div>

                <div className='px-24 bg-gray-50 pt-14 pb-18'>
                    <span className='text-gray-700 text-15 flex items-center justify-between gap-2 mb-10'> Contract Address<span className='text-red-500 transition-all hover:text-red-600'>0x306b...f949</span></span>
                    <span className='text-gray-700 text-15 flex items-center justify-between gap-2 mb-10'> Token ID<span className='text-red-500 transition-all hover:text-red-600'>2409</span></span>
                    <span className='text-gray-700 text-15 flex items-center justify-between gap-2 mb-10'> Token Standard<span className='text-gray-600'>ERC-721</span></span>
                    <span className='text-gray-700 text-15 flex items-center justify-between gap-2 mb-10'> Blockchain<span className='text-gray-600'>Ethereum</span></span>
                    <span className='text-gray-700 text-15 flex items-center justify-between gap-2 mb-10'> Creator Fees<span className='gray-red-600'>5%</span></span>
                </div>

            </section>
        </>
    )
}

export default NFTDetail;