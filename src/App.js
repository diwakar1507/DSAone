import "./App.css";
import SmoothScroll from "./Components/SmoothScroll";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MainDS from "./pages/DataStructurePage/MainDS";
import NewMainDS from "./pages/DataStructurePage/NewMainDS";
import CourseDS from "./pages/DataStructurePage/CourseDS";
import Content from "./pages/DataStructurePage/Content";

function App() {
  return (
    // <SmoothScroll>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="DataStructure" element={<NewMainDS />}>
          <Route index="true" element={<Content />}/>
          <Route path=":courseID" element={<CourseDS />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // </SmoothScroll>
  );
}

export default App;
