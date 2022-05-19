import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Common/Input';
import { AiOutlineHeart, AiOutlineUser, AiOutlineEye, AiOutlineSetting, AiOutlineMenu } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BiWallet } from "react-icons/bi";

const Navbar = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    const [activeLink, setActiveLink] = useState('Trending');
    const Navigation = [{ placeholder: 'EXPLORE', path: '/EXPLORE' }, { placeholder: 'TRENDING', path: '/' }, { placeholder: 'HOW IT WORKS?', path: '/' }, { placeholder: 'ABOUT', path: '/' }, { placeholder: 'CONTACT', path: '/' }]

    return (
        <>
            <nav className="sticky top-0 z-10 bg-white shadow-xl py-26">
            <main className="container mx-auto px-24 lg:px-99">
                <section className="flex justify-between flex-wrap items-center gap-12 px-10">
                    <main className='flex items-center gap-12'>
                        <Link to="/"> <img className="w-80 cursor-pointer" src="/assets/logo.svg" alt="" /> </Link>
                        <div className="hidden justify-between items-center w-full xl:flex xl:w-auto xl:order-2" id="mobile-menu-3">
                            <ul className="flex items-center gap-6">
                                {
                                    Navigation?.map(item => (
                                        <li onClick={() => setActiveLink(item?.placeholder)}>
                                            <Link to={item?.path}>
                                                <span className={`relative transition-all  border-b-2 border-transparent cursor-pointer text-md font-semibold ${activeLink === item?.placeholder ? 'active text-primary after:-bottom-10' : 'text-secondary hover:text-primary'}`}>
                                                    {item?.placeholder}
                                                </span>
                                            </Link>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </main>
                    <section className="flex items-center gap-6">
                        <span className='relative transition-all text-secondary hover:text-primary border-b-2 border-transparent cursor-pointer text-md font-semibold'>
                            CREATE ACCOUNT
                        </span>
                        <button className="bg-secondary text-white font-bold px-32 py-10 rounded-5 transition-all hover:bg-gray-800 relative top-0 hover:top-px" >LOGIN</button>
                    </section>
                </section>
                </main>
            </nav>
        </>

    )
}

export default Navbar;