
import { Link } from 'react-router-dom';
import { AiFillInstagram } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {

    return (
        <footer className="bg-white">
            <section className="container mx-auto px-24 lg:px-99 py-42 md:flex md:items-center text-center md:justify-between">
                <Link to="/"> <img className="w-99 mx-auto md:mx-0 cursor-pointer" src="/assets/logo.svg" alt="" /> </Link>
                <p className="text-sm text-secondary my-20 md:my-0 sm:text-center ml-8">2022 Copyright © 2022 Sports Collective - All Right Reserved</p>
                <div className="flex flex-col gap-2 mt-4 space-x-6 justify-center md:mt-0">
                    <span className="cursor-pointer text-gray-800 text-14 font-bold">FOLLOW US</span>
                    <div className='flex items-center justify-center gap-3 text-secondary'>
                        <FaFacebookSquare className='text-23 transition-all cursor-pointer hover:text-primary' />
                        <AiFillInstagram className='text-28 transition-all cursor-pointer hover:text-primary' />
                        <FaTwitterSquare className='text-25 transition-all cursor-pointer hover:text-primary' />
                        <SiTelegram className='text-24 transition-all cursor-pointer hover:text-primary' />
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;