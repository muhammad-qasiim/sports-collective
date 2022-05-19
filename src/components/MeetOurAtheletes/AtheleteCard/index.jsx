import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

const AtheleteCard = ({ athelete }) => {

    return (

        <div className="my-18 px-14 w-full md:w-1/2 lg:my-12 lg:px-14 lg:w-1/3">
            <article className="overflow-hidden rounded-lg transition-all shadow-lg cursor-pointer">
                <section className="relative">
                    <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/800/?random" />
                </section>
                <footer className='flex items-center justify-between py-18 px-16 border rounded-bl-lg rounded-br-lg'>
                    <h6 className="flex items-center gap-2 justify-center text-xl leading-relaxed text-secondary cursor-pointer font-semibold transition-all hover:text-gray-900"> {athelete} </h6>
                    <section className='flex items-center justify-center gap-2 text-secondary'>
                        <FaFacebookSquare className='text-25 transition-all cursor-pointer hover:text-primary' />
                        <AiFillInstagram className='text-30 transition-all cursor-pointer hover:text-primary' />
                        <FaTwitterSquare className='text-27 transition-all cursor-pointer hover:text-primary' />
                    </section>
                </footer>
            </article>
        </div>

    )
}

export default AtheleteCard;