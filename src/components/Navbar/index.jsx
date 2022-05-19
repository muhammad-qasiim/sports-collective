import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    const [activeLink, setActiveLink] = useState('');
    const Navigation = [{ placeholder: 'EXPLORE', path: '/EXPLORE' }, { placeholder: 'TRENDING', path: '/' }, { placeholder: 'HOW IT WORKS?', path: '/' }, { placeholder: 'ABOUT', path: '/' }, { placeholder: 'CONTACT', path: '/CONTACT' }]

    return (
        <>
            <nav className="sticky top-0 z-20 bg-white shadow-xl py-20">
                <main className="container mx-auto px-24 lg:px-99">
                    <section className="flex justify-between flex-wrap items-center gap-12 px-10">
                        <main className='flex items-center gap-8'>
                            <Link to="/"> <img onClick={() => setActiveLink('')} className="w-80 cursor-pointer" src="/assets/logo.svg" alt="" /> </Link>
                            <div className="hidden justify-between items-center w-full xl:flex xl:w-auto xl:order-2" id="mobile-menu-3">
                                <ul className="flex items-center gap-5">
                                    {
                                        Navigation?.map(item => (
                                            <li onClick={() => setActiveLink(item?.placeholder)}>
                                                <Link to={item?.path}>
                                                    <span className={`relative transition-all border-b-2 border-transparent cursor-pointer text-sm font-semibold ${activeLink === item?.placeholder ? 'active text-primary after:-bottom-8' : 'text-secondary hover:text-primary'}`}>
                                                        {item?.placeholder === 'HOW IT WORKS?' ? <ScrollLink to="how-it-works" spy={true} smooth={true}>{item?.placeholder}</ScrollLink> : item?.placeholder}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </main>
                        <section className="flex items-center gap-4">
                            <Link to="/sign-up"> <span onClick={() => setActiveLink('CREATE ACCOUNT')} className={`relative transition-all text-secondary hover:text-primary border-b-2 border-transparent cursor-pointer text-sm font-semibold ${activeLink === 'CREATE ACCOUNT' ? 'active text-primary after:-bottom-8' : 'text-secondary hover:text-primary'}`}>
                                CREATE ACCOUNT
                            </span> </Link>
                            <Link to="/sign-in"> <button onClick={() => setActiveLink('')} className="bg-primary text-white font-bold px-32 py-8 rounded-5 transition-all hover:bg-purple-700 relative top-0 hover:top-px" >LOGIN</button> </Link>
                        </section>
                    </section>
                </main>
            </nav>
        </>

    )
}

export default Navbar;