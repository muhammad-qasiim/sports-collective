
import { GoVerified } from "react-icons/go";
import Collection from '../components/ExploreCollections/Collection'

function Create() {
  const Collections = ["Trending", "Top", "Art", "Collectibles", "Domain Names", "Music", "Photography", "Sports", "Trading Cards", "Utility", "Virtual Worlds"]

  return (
    <>
      <header className="nft-bg relative w-100 h-224">
        <div className="absolute w-96 h-96 rounded-full  border-4 border-gray-50 -bottom-12 left-2/4 -translate-x-2/4">
          <img alt="Placeholder" className="h-full rounded-full w-full overflow-hidden" src="https://lh3.googleusercontent.com/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI=s130" />
        </div>
      </header>

      <section className="container mx-auto px-24 lg:px-99 my-72 text-center">
        <h3 className="text-28 font-semibold text-center mb-18 flex items-center gap-2 justify-center">Otherdeed for Otherside <GoVerified className="text-blue-500 text-22 mt-4" /> </h3>

        <h5 className="flex items-center gap-2 justify-center mb-14">Created by <span className="text-blue-500 cursor-pointer transition-all hover:text-blue-700">OthersideMeta</span> <GoVerified className="text-blue-500 text-14" /> </h5>


        <section className="flex justify-center items-center my-22">
          <div className="custom-shadow text-center px-20 py-12 w-160 cursor-pointer rounded-tl-8 rounded-bl-8 border">
            <h4 className="font-bold text-22">90.6K</h4>
            <p className="text-gray-600">items</p>
          </div>
          <div className="custom-shadow text-center px-20 py-12 w-160 cursor-pointer border">
            <h4 className="font-bold text-22">30.1K</h4>
            <p className="text-gray-600">owners</p>
          </div>
          <div className="custom-shadow text-center px-20 py-12 w-160 cursor-pointer border">
            <h4 className="font-bold text-22">7.09</h4>
            <p className="text-gray-600">floor price</p>
          </div>
          <div className="custom-shadow text-center px-20 py-12 w-160 cursor-pointer rounded-tr-8 rounded-br-8 border">
            <h4 className="font-bold text-22">70.3K</h4>
            <p className="text-gray-600">volume traded</p>
          </div>
        </section>

        <p className="text-gray-600 text-18 w-full md:w-2/4 mx-auto">Otherdeed is the key to claiming land in Otherside. Each have a unique blend of environment and sediment — some with resources, some home to powerful artifacts. And on a very few, a Koda roams.</p>
      </section>

      <section className="container mx-auto px-24 lg:px-99 my-72 text-center">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {
                    Collections?.map(collection => (
                        <Collection />
                    ))
                }
            </div>
            </section>
    </>
  );
}

export default Create;
