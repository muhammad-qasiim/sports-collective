import AtheleteCard from '../Common/AtheleteCard'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

const MeetOurAtheletes = ({ children }) => {

    const Atheletes = ["LeBron James", "Roger Federer", "Kevin Durant", "Tiger Woods", "Rafael Nadal", "Kobe Bryant", "Gareth Bale", "Usain Bolt", "Rory McIlroy"]

    return (
        <section className="container mx-auto px-24 lg:px-99 py-99">

            {children}

            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {
                    Atheletes?.map(athelete => (
                        <AtheleteCard athelete={athelete} >
                            <footer className='flex items-center justify-between py-18 px-16 border rounded-bl-lg rounded-br-lg'>
                                <h6 className="flex items-center gap-2 justify-center text-xl leading-relaxed text-secondary cursor-pointer font-semibold transition-all hover:text-gray-900"> {athelete} </h6>
                                <section className='flex items-center justify-center gap-2 text-secondary'>
                                    <FaFacebookSquare className='text-25 transition-all cursor-pointer hover:text-primary' />
                                    <AiFillInstagram className='text-30 transition-all cursor-pointer hover:text-primary' />
                                    <FaTwitterSquare className='text-27 transition-all cursor-pointer hover:text-primary' />
                                </section>
                            </footer>
                        </AtheleteCard>
                    ))
                }
            </div>
        </section>
    )
}

export default MeetOurAtheletes;