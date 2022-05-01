
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Create from "./Pages/Create";
import SingleNFT from "./Pages/SingleNFT";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="create" element={<Create />} />
          <Route path="single_nft" element={<SingleNFT />} />
        </Route>
      </Routes>


    </>
  );
}

export default App;
