import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Header = () => {

    return (
        <header className='relative w-full h-600'>
            <section className='flex justify-between'>
                <div className="hidden lg:block w-full h-600 bg-cover bg-top bg-no-repeat" style={{ backgroundImage: 'url(https://picsum.photos/800/800/?random)' }}></div>
                <div className="w-full h-600 bg-cover bg-top bg-no-repeat" style={{ backgroundImage: 'url(/assets/bg-header.svg)' }}></div>
            </section>
            <section className='w-full absolute top-0'>
                <section className="container mx-auto px-24 lg:px-99 my-99">
                    <section className='flex justify-between'>
                        <div className="hidden lg:block w-full"></div>
                        <div className="w-full text-right pr-10 pl-0 lg:pl-112">
                            <h3 className="text-36 lg:text-50 font-semibold mb-10 text-white leading-58">Discover, collect, and sell extraordinary NFTs</h3>
                            <p className="mt-4 text-16 md:text-18 text-gray-50"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur reiciendis modi impedit eligendi minima quidem deserunt laborum veniam eos debitis? </p>
                            <div className="flex items-center justify-end mt-38">
                                <Link to="/explore">
                                    <button className="bg-white text-primary font-bold px-32 py-10 rounded-5 transition-all hover:bg-gray-200 relative top-0 hover:top-px" >EXPLORE</button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </header>

    )
}

export default Header;