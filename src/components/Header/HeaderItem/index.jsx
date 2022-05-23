import { Link } from 'react-router-dom';

const HeaderItem = ({ item }) => {

    const { imgUrl, color } = item;

    return (
        <header className='relative w-full h-600 lg:h-800'>
            <section className='flex justify-between'>
                <div className="hidden lg:block w-full h-600 lg:h-800 bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(/assets/header/${imgUrl}.png)` }}></div>
                <div className="relative w-full h-600 lg:h-800 bg-cover bg-top bg-no-repeat" style={{ backgroundColor: `${color}` }}>
                    <img className='absolute top-0' src={`/assets/header/top-icon/${1}.svg`} alt="" />
                    <img className='absolute bottom-0 right-0' src={`/assets/header/bottom-icon/${1}.svg`} alt="" />
                </div>
            </section>
            <section className='w-full absolute h-600 lg:h-800 top-0'>
                <section className="container mx-auto px-24 lg:px-99">
                    <section className='flex justify-between h-600 lg:h-800'>
                        <div className="hidden lg:block w-full"></div>
                        <div className="w-full text-right pr-10 pl-0 lg:pl-112">
                            <section className='h-full flex flex-col justify-center'>
                                <h3 className="text-36 lg:text-50 font-semibold mb-10 text-white leading-58">Latest News</h3>
                                <p className="mt-4 text-16 md:text-18 text-gray-50"> 
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto eos et atque dolorem praesentium sunt laborum minima placeat velit autem quod, facilis soluta eum at distinctio excepturi eaque necessitatibus aspernatur voluptatum porro non? Exercitationem suscipit porro quasi nulla officia.                                </p>
                                <div className="flex items-center justify-end mt-38">
                                    <Link to="/explore">
                                        <button className="bg-white text-primary font-bold px-32 py-10 rounded-5 transition-all hover:bg-gray-200 relative top-0 hover:top-px" style={{ color: `${color}` }} >EXPLORE</button>
                                    </Link>        
                                    { color === '#8251D4' && <Link to="/sign-up"> <button className="bg-white ml-12 text-primary font-bold px-32 py-10 rounded-5 transition-all hover:bg-gray-200 relative top-0 hover:top-px" style={{ color: `${color}` }} >SIGN UP</button> </Link> }                            
                                </div>
                            </section>
                        </div>
                    </section>
                </section>
            </section>
        </header>

    )
}

export default HeaderItem;