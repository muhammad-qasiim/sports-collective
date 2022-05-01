import { Link } from 'react-router-dom';
import Header from "../components/Header";
import BrowseByCategory from "../components/BrowseByCategory";
import TopCollectionsOver from "../components/TopCollectionsOver";
import ResourcesForGettingStarted from "../components/ResourcesForGettingStarted";

function Home() {
  return (
    <>
      <Header />

      <BrowseByCategory />

      <TopCollectionsOver />

      <ResourcesForGettingStarted />


      <section className='flex justify-center my-72'>
        <Link to="/explore">  <button className="bg-red-500 text-white px-32 py-10 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px" >Explore the marketplace</button> </Link>
      </section>
    </>
  );
}

export default Home;
