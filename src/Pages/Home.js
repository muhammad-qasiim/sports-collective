import { Link } from 'react-router-dom';
import HowItWorks from "../components/HowItWorks";
import MeetOurAtheletes from "../components/MeetOurAtheletes";
import Header from "../components/Header";
import GridCarousel from "../components/GridCarousel";

function Home() {
  return (
    <>

      <Header />

      <GridCarousel >
        <h3 className="text-30 font-bold text-tertiary mb-28 pr-0 lg:pr-22">DISCOVER OUR MOST POPULAR DROPS</h3>
        <button className="bg-tertiary text-white font-bold px-32 py-10 rounded-5 transition-all hover:bg-yellow relative top-0 hover:top-px" >DISCOVER</button>
      </GridCarousel>

      <GridCarousel >
        <h3 className="text-30 font-bold text-primary mb-28 pr-0 lg:pr-22">CHECK OUT NEW ITEMS</h3>
        <button className="bg-primary text-white font-bold px-32 py-10 rounded-5 transition-all hover:bg-purple-600 relative top-0 hover:top-px" >DISCOVER</button>
      </GridCarousel>

      <MeetOurAtheletes>
        <h3 className="text-40 font-bold text-secondary text-center leading-58 mb-42">MEET OUR ATHELETES</h3>
      </MeetOurAtheletes>

      <HowItWorks />

    </>
  );
}

export default Home;
