import { useState } from 'react'
import Collection from './Collection'

const CollectionsContainer = () => {

    const [activeLink, setActiveLink] = useState('Trending')
    const Collections = ["Trending", "Top", "Art", "Collectibles", "Domain Names", "Music", "Photography", "Sports", "Trading Cards", "Utility", "Virtual Worlds"]

    return (
        <>
            <section className='mt-99 relative'>
                <img className='absolute -top-10 left-0 hidden lg:block' src="/assets/left-graphic.png" alt="" />
                <h3 className="text-40 font-semibold text-center mb-99">Explore Collections</h3>
                <img className='absolute -top-10 right-0 hidden lg:block' src="/assets/right-graphic.png" alt="" />
            </section>

            <section className="container mx-auto px-24 lg:px-99 my-99">

                <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 mb-32 mx-8 overflow-x-scroll">
                    <ul className="flex items-center 2xl:justify-center gap-8 mb-4 whitespace-nowrap">
                        {
                            Collections?.map(collection => (
                                <li onClick={() => setActiveLink(collection)}>
                                    <span className={`relative text-lg border-b-2 border-transparent cursor-pointer transition-all text-gray-500 hover:text-gray-800 ${activeLink === collection && 'active after:-bottom-2 text-gray-800'}`}>{collection}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>


                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {
                        Collections?.map(collection => (
                            <Collection />
                        ))
                    }
                </div>
            </section>
        </>

    )
}

export default CollectionsContainer;