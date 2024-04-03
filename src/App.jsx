import "./App.css";
import Footer from "./componet/Footer";
import {NavBar} from "./componet/NavBar";
import { Outlet } from "react-router";
function App() {
  return (
    <div>
      <div>
        <NavBar />
        <Outlet />
        
      </div>
    </div>
  );
}

export default App;
