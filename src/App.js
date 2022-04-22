import "./App.css";
import SmoothScroll from "./Components/SmoothScroll";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MainDS from "./pages/DataStructurePage/MainDS";
import MainAlgo from "./pages/AlgorithmPage/MainAlgo";
import CourseDS from "./pages/DataStructurePage/CourseDS";
import CourseAlgo from "./pages/AlgorithmPage/CourseAlgo";
import Content from "./pages/DataStructurePage/Content";
import PlayGround from "./pages/PlayGround/PlayGround";
import SelectPlay from "./pages/PlayGround/SelectPlay";
import GoPlay from "./pages/PlayGround/GoPlay";
import AContent from "./pages/AlgorithmPage/AContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="DataStructure" element={<MainDS />}>
          <Route index="true" element={<Content />} />
          <Route path=":courseID" element={<CourseDS />} />
        </Route>
        <Route path="Algorithm" element={<MainAlgo />}>
          <Route index="true" element={<AContent />} />
          <Route path=":courseID" element={<CourseAlgo />} />
        </Route>
        <Route path="PlayGround" element={<PlayGround />}>
          <Route index="true" element={<SelectPlay />} />
          <Route path=":VID" element={<GoPlay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
