import "./App.css";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";

import {
  AboutUs,
  DetailProject,
  DetailUser,
  FormProjects,
  Home,
  LogIn,
  Pagos,
  Projects,
  Validation,
} from "./Pages";
import NavBar from "./Components/NavBar/NavBar";


function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* <div>
          {location.pathname !== '/pagos' || location.pathname !== '/login' && <NavBar/>}
      </div> */}
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/home/aboutUs" element={<AboutUs />} />
        <Route exact path="/projects/:id" element={<DetailProject />} />
        <Route exact path="/create" element={<FormProjects />} />
        <Route exact path="/user/:id" element={<DetailUser />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/pagos" element={<Pagos />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/validation" element={<Validation />} />
      </Routes>
    </div>
  );
}

export default App;
