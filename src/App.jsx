import "./App.css";
import Layout from "./components/common/Layout";
import ChooseVehicle from "./pages/ChooseVehicle";
import FAQs from "./pages/FAQs";
import Home from "./pages/Home";
import WhyElectric from "./pages/WhyElectric";
import { createBrowserRouter } from "react-router-dom";
import Calculator from "./pages/Calculator";
import Incentives from "./pages/Incentives";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/choose-vehicle",
    element: <ChooseVehicle />,
  },
  {
    path: "/faqs",
    element: <FAQs />,
  },
  {
    path: "/incentives",
    element: <Incentives />,
  },

  {
    path: "/why-electric",
    element: <WhyElectric />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
]);
export default App;
