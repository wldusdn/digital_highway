import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import Frame3 from "./pages/Frame3";
import Frame4 from "./pages/Frame4";
import Frame5 from "./pages/Frame5";
import Frame6 from "./pages/Frame6";
import Frame7 from "./pages/Frame7";
import Frame8 from "./pages/Frame8";
import Frame9 from "./pages/Frame9";
import Frame10 from "./pages/Frame10";
import Frame11 from "./pages/Frame11";
import Frame12 from "./pages/Frame12";
import Frame13 from "./pages/Frame13";
import Frame14 from "./pages/Frame14";
import Frame15 from "./pages/Frame15";
import Frame16 from "./pages/Frame16";
import Frame17 from "./pages/Frame17";
import Frame18 from "./pages/Frame18";
import Frame19 from "./pages/Frame19";
import Frame20 from "./pages/Frame20";
import Frame21 from "./pages/Frame21";
import Frame22 from "./pages/Frame22";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/2":
        title = "";
        metaDescription = "";
        break;
      case "/3":
        title = "";
        metaDescription = "";
        break;
      case "/4":
        title = "";
        metaDescription = "";
        break;
      case "/5":
        title = "";
        metaDescription = "";
        break;
      case "/6":
        title = "";
        metaDescription = "";
        break;
      case "/7":
        title = "";
        metaDescription = "";
        break;
      case "/8":
        title = "";
        metaDescription = "";
        break;
      case "/10":
        title = "";
        metaDescription = "";
        break;
      case "/12":
        title = "";
        metaDescription = "";
        break;
      case "/13":
        title = "";
        metaDescription = "";
        break;
      case "/14":
        title = "";
        metaDescription = "";
        break;
      case "/15":
        title = "";
        metaDescription = "";
        break;
      case "/16":
        title = "";
        metaDescription = "";
        break;
      case "/17":
        title = "";
        metaDescription = "";
        break;
      case "/18":
        title = "";
        metaDescription = "";
        break;
      case "/19":
        title = "";
        metaDescription = "";
        break;
      case "/20":
        title = "";
        metaDescription = "";
        break;
      case "/21":
        title = "";
        metaDescription = "";
        break;
      case "/22":
        title = "";
        metaDescription = "";
        break;
      case "/9":
        title = "";
        metaDescription = "";
        break;
      case "/23":
        title = "";
        metaDescription = "";
        break;
      case "/11":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frame />} />
      <Route path="/2" element={<Frame1 />} />
      <Route path="/3" element={<Frame2 />} />
      <Route path="/4" element={<Frame3 />} />
      <Route path="/5" element={<Frame4 />} />
      <Route path="/6" element={<Frame5 />} />
      <Route path="/7" element={<Frame6 />} />
      <Route path="/8" element={<Frame7 />} />
      <Route path="/10" element={<Frame8 />} />
      <Route path="/12" element={<Frame9 />} />
      <Route path="/13" element={<Frame10 />} />
      <Route path="/14" element={<Frame11 />} />
      <Route path="/15" element={<Frame12 />} />
      <Route path="/16" element={<Frame13 />} />
      <Route path="/17" element={<Frame14 />} />
      <Route path="/18" element={<Frame15 />} />
      <Route path="/19" element={<Frame16 />} />
      <Route path="/20" element={<Frame17 />} />
      <Route path="/21" element={<Frame18 />} />
      <Route path="/22" element={<Frame19 />} />
      <Route path="/9" element={<Frame20 />} />
      <Route path="/23" element={<Frame21 />} />
      <Route path="/11" element={<Frame22 />} />
    </Routes>
  );
}
export default App;
