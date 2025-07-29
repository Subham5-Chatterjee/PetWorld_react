import { BrowserRouter } from "react-router";
// import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import "swiper/css";
import "swiper/css/pagination";
import "./css/header-footer.css";
import "./css/style.css";
import "./css/responsive.css";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
