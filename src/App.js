import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import LargeWithNewsletter from "./Components/Footer/Footer";

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
  UserForm,
} from "./Pages";
import NavBar from "./Components/NavBar/NavBar";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "./Redux/Slicers/projectSlicer";
import { getSeeLaterItem } from "./Redux/Slicers/projectSlicer";
import { verifyStatus } from "./Redux/Slicers/LogInSlicer";


function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const LogInStatus = useSelector (state => state.login.status)

  
  useEffect(()=>{
    if (!LogInStatus){
        dispatch(verifyStatus());
    }
    
  }, [dispatch, LogInStatus]);

  useEffect(() => {
    dispatch(getProject());
    dispatch(getSeeLaterItem());
  });

  return (
    <div className="App">
      {/* <div>
          {location.pathname !== '/pagos' || location.pathname !== '/login' && <NavBar/>}
      </div> */}
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/home/aboutUs" element={<AboutUs />} />
        <Route exact path="/projects/:id" element={<DetailProject />} />
        <Route exact path="/create" element={<FormProjects />} />
        <Route exact path="/user/:name" element={<DetailUser />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/create-user" element={<UserForm />} />
        <Route exact path="/pagos" element={<Pagos />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/validation" element={<Validation />} />
      </Routes>
      {location.pathname.indexOf("projects") !== 1 && <LargeWithNewsletter />}
    </div>
  );
}

export default App;
