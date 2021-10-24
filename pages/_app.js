import "../styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Maintenance from "../public/maintenance/maintenance";

import ReactGa from "react-ga";

const TRACKING_ID = "G-GHYHBVVWV8";
ReactGa.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }) {
  //return <Component {...pageProps} />;
  return <Maintenance />;
}

export default MyApp;
