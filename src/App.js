import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
