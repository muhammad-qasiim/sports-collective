
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Explore from "./Pages/Explore";
import Create from "./Pages/Create";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Explore />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>


    </>
  );
}

export default App;
