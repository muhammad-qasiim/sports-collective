import AtheleteCard from '../Common/AtheleteCard'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const AtheletesGallery = ({ children }) => {

    const Atheletes = ["LeBron James", "Roger Federer", "Kevin Durant", "Tiger Woods", "Rafael Nadal", "Kobe Bryant", "Gareth Bale", "Usain Bolt", "Rory McIlroy"]

    return (
        <section className="container mx-auto px-24 lg:px-99 py-99">

            {children}

            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {
                    Atheletes?.map(athelete => (
                        <AtheleteCard athelete={athelete} >
                            <footer className='py-18 px-16 border rounded-bl-lg rounded-br-lg'>
                                <section className='flex items-center justify-between gap-5'>
                                    <h6 className="text-xl leading-relaxed text-secondary cursor-pointer font-semibold transition-all hover:text-gray-900"> {athelete} </h6>
                                    <h6 className="text-lg leading-relaxed text-secondary cursor-pointer font-semibold transition-all hover:text-gray-900"> $60, 000 </h6>
                                </section>
                                <section className='flex items-center justify-between gap-5 mt-12 mb-6'>
                                    <button className="bg-primary text-white px-32 py-8 rounded-5 transition-all hover:bg-purple-700 relative top-0 hover:top-px" >Buy now</button>
                                    <div className='group relative text-28 text-gray-600'>
                                        <AiOutlineHeart className='absolute z-10 bg-white group-hover:opacity-0 transition-all' />
                                        <AiFillHeart className='text-primary transition-all group-hover:opacity-1' />
                                    </div>
                                </section>
                            </footer>
                        </AtheleteCard>
                    ))
                }
            </div>
        </section>
    )
}

export default AtheletesGallery;