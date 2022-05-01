import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Common/Input';
import { IoClose } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { BiWallet } from "react-icons/bi";

const Navbar = () => {

    const [activeLink, setActiveLink] = useState('Trending')
    const Navigation = [{ placeholder: 'Explore', path: '/explore' }, { placeholder: 'Stats', path: '/' }, { placeholder: 'Resources', path: '/' }, { placeholder: 'Create', path: '/create' }]

    return (

        <nav className="shadow-xl py-24">
            <div className="container flex flex-wrap justify-between items-center mx-auto px-24 lg:px-99">
                <Link to="/"> <span className="self-center text-xl font-semibold whitespace-nowrap flex items-center gap-2">
                    <img className="w-7" src="/assets/beglobal.svg" alt="" />
                    beglobal</span> </Link>

                <div className="flex xl:order-1">
                    <div className="hidden relative mr-3 xl:mr-0 xl:block">
                        <Input type="text" startAdorment={<BiSearch className='mt-2' />} />
                    </div>
                    <button type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-xl xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu-3" aria-expanded="false">
                        <GiHamburgerMenu />
                    </button>
                </div>

                <div className="hidden justify-between items-center w-full xl:flex xl:w-auto xl:order-2" id="mobile-menu-3">
                    <ul className="flex flex-col items-center mt-4 xl:flex-row xl:space-x-8 xl:mt-0 xl:text-sm xl:font-medium">
                        {
                            Navigation?.map(item => (
                                <li onClick={() => setActiveLink(item?.placeholder)}>
                                    <Link to={item?.path}>       <span className={`relative text-xl border-b-2 border-transparent cursor-pointer transition-all text-gray-500 hover:text-gray-800 ${activeLink === item?.placeholder && 'active text-gray-800 after:-bottom-8'}`}>
                                        {item?.placeholder}
                                    </span> </Link>
                                </li>
                            ))
                        }
                        <li>
                            <span className='relative text-3xl border-b-2 border-transparent cursor-pointer transition-all text-gray-500 hover:text-gray-800'>
                                <BiWallet />
                            </span>
                        </li>
                        <li>
                            <span className='relative text-3xl border-b-2 border-transparent cursor-pointer transition-all text-gray-500 hover:text-gray-800'>
                                <CgProfile />
                            </span>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>

    )
}

export default Navbar;