import "./App.css";
import SmoothScroll from "./Components/SmoothScroll";
import LandingPage from "./pages/LandingPage/LandingPage";
import Array from "./pages/TestPage/Array";

function App() {
  return (
    <SmoothScroll>
      {/* <LandingPage /> */}
      <Array/>
    </SmoothScroll>
  );
}

export default App;
