
import { useState } from "react";
import ExploreCollections from "../components/ExploreCollections";
import Filter from "../components/Filter";
import { BsArrowRightShort } from "react-icons/bs";

function Index() {
  const [toggle, setToggle] = useState(true)
  return (
    <>
      <section className="bg-gray-50">
        <main className="flex items-start gap-6">
          <div className={`absolute 2xl:relative z-10 lg:block transition-all ${toggle ? 'open-sidebar' : 'close-sidebar'}`}>
              <Filter />
              <div onClick={() => setToggle(!toggle)} className="circle absolute top-7 -right-6 grid 2xl:hidden place-content-center w-32 h-32 bg-primary text-white text-24 cursor-pointer">
                <BsArrowRightShort />
              </div>
          </div>
          <div className="w-full">
            <ExploreCollections />
          </div>
        </main>
      </section>
    </>
  );
}

export default Index;
