import "./App.css";
import {NavBar} from "./componet/NavBar";
import { Outlet } from "react-router";
function App() {
  return (
    <div>
      <div className="bg-gray-900">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
