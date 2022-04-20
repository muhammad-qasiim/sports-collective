import { GoVerified } from "react-icons/go";

const Collection = () => {

    return (

        <div class="my-18 px-14 w-full md:w-1/2 lg:my-12 lg:px-14 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
                <section className="relative">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                    <div className="absolute h-64 w-64 rounded-full  border-4 border-gray-50 -bottom-7 left-2/4 -translate-x-2/4">
                        <img alt="Placeholder" class="h-full rounded-full w-full overflow-hidden" src="https://picsum.photos/600/400/?random" />
                    </div>
                </section>
                <footer className='text-center py-34 px-12'>
                    <h6 className="flex items-center gap-2 justify-center mt-4 text-lg leading-relaxed text-gray-800 cursor-pointer font-medium transition-all hover:text-gray-900"> PhantaBear <GoVerified className="text-blue-500 text-16" /> </h6>
                    <div className="flex items-center gap-2 justify-center text-14 leading-relaxed text-gray-600 pl-4 mb-6"> by
                        <span className="text-red-600 cursor-pointer font-medium hover:underline">EzekClub</span>
                        <GoVerified className="text-blue-500 text-14" />
                    </div>
                    <p className="text-14 leading-relaxed text-gray-500 pl-4 "> Phanta Bear  is jointly launched by MandoPop King Jay Chou's Fashion Brand PHANTACi and EzekClub (ht... </p>
                </footer>
            </article>
        </div>

    )
}

export default Collection;