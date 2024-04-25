import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Tool1 from "./pages/Tools/Tool1";
import Tool2 from "./pages/Tools/Tool2";
import Tool3 from "./pages/Tools/Tool3";
import Tool4 from "./pages/Tools/Tool4";
import Tool5 from "./pages/Tools/Tool5";
import Tool6 from "./pages/Tools/Tool6";
import Tool7 from "./pages/Tools/Tool7";
import Tool8 from "./pages/Tools/Tool8";
import Tool9 from "./pages/Tools/Tool9";
import Tool10 from "./pages/Tools/Tool10";
import Tool11 from "./pages/Tools/Tool11";
import Tool12 from "./pages/Tools/Tool12";
import Tool13 from "./pages/Tools/Tool13";
import Tool14 from "./pages/Tools/Tool14";
import Tool15 from "./pages/Tools/Tool15";
import Tool16 from "./pages/Tools/Tool16";
import Tool17 from "./pages/Tools/Tool17";
import Tool18 from "./pages/Tools/Tool18";
import Tool19 from "./pages/Tools/Tool19";
import Tool20 from "./pages/Tools/Tool20";
import Tool21 from "./pages/Tools/Tool21";
import Tool22 from "./pages/Tools/Tool22";
import Tool23 from "./pages/Tools/Tool23";
import Tool24 from "./pages/Tools/Tool24";
import Tool25 from "./pages/Tools/Tool25";
import Tool26 from "./pages/Tools/Tool26";
import Tool27 from "./pages/Tools/Tool27";
import Tool28 from "./pages/Tools/Tool28";
import Tool29 from "./pages/Tools/Tool29";
import Tool30 from "./pages/Tools/Tool30";
import Tool31 from "./pages/Tools/Tool31";
import Tool32 from "./pages/Tools/Tool32";
import Tool33 from "./pages/Tools/Tool33";
import Tool34 from "./pages/Tools/Tool34";
import Tool35 from "./pages/Tools/Tool35";
import Tool36 from "./pages/Tools/Tool36";
import Tool37 from "./pages/Tools/Tool37";
import Tool38 from "./pages/Tools/Tool38";
import Tool39 from "./pages/Tools/Tool39";
import Tool40 from "./pages/Tools/Tool40";
import Tool41 from "./pages/Tools/Tool41";
import Tool42 from "./pages/Tools/Tool42";
import Tool43 from "./pages/Tools/Tool43";
import Tool44 from "./pages/Tools/Tool44";
import Tool45 from "./pages/Tools/Tool45";
import Tool46 from "./pages/Tools/Tool46";
import Tool47 from "./pages/Tools/Tool47";
import Tool48 from "./pages/Tools/Tool48";
import Tool49 from "./pages/Tools/Tool49";
import Tool50 from "./pages/Tools/Tool50";
import Tool51 from "./pages/Tools/Tool51";
import Tool52 from "./pages/Tools/Tool52";
import Tool53 from "./pages/Tools/Tool53";
import Tool54 from "./pages/Tools/Tool54";
import Tool55 from "./pages/Tools/Tool55";
import Tool56 from "./pages/Tools/Tool56";
// import Case1 from "./pages/Cases/Case1";
import RightMenu from "./components/NewComponents/RightMenu";
import Index from "./pages/Cases/Index";
import Login from "./pages/Login";
import Landing from "./pages/Landing";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/tool1" element={<Tool1 logoDisplay={true} />} />
        <Route path="/tool2" element={<Tool2 logoDisplay={true}/>} />
        <Route path="/tool3" element={<Tool3 logoDisplay={true}/>} />
        <Route path="/tool4" element={<Tool4 logoDisplay={true}/>} />
        <Route path="/tool5" element={<Tool5 logoDisplay={true}/>} />
        <Route path="/tool6" element={<Tool6 logoDisplay={true}/>} />
        <Route path="/tool7" element={<Tool7 logoDisplay={true}/>} />
        <Route path="/tool8" element={<Tool8 logoDisplay={true}/>} />
        <Route path="/tool9" element={<Tool9 logoDisplay={true}/>} />
        <Route path="/tool10" element={<Tool10 logoDisplay={true}/>} />
        <Route path="/tool11" element={<Tool11 logoDisplay={true}/>} />
        <Route path="/tool12" element={<Tool12 logoDisplay={true}/>} />
        <Route path="/tool13" element={<Tool13 logoDisplay={true}/>} />
        <Route path="/tool14" element={<Tool14 logoDisplay={true} />} />
        <Route path="/tool15" element={<Tool15 logoDisplay={true}/>} />
        <Route path="/tool16" element={<Tool16 logoDisplay={true}/>} />
        <Route path="/tool17" element={<Tool17 logoDisplay={true}/>} />
        <Route path="/tool18" element={<Tool18 logoDisplay={true}/>} />
        <Route path="/tool19" element={<Tool19 logoDisplay={true}/>} />
        <Route path="/tool20" element={<Tool20 logoDisplay={true}/>} />
        <Route path="/tool21" element={<Tool21 logoDisplay={true}/>} />
        <Route path="/tool22" element={<Tool22 logoDisplay={true}/>} />
        <Route path="/tool23" element={<Tool23 logoDisplay={true}/>} />
        <Route path="/tool24" element={<Tool24 logoDisplay={true}/>} />
        <Route path="/tool25" element={<Tool25 logoDisplay={true}/>} />
        <Route path="/tool26" element={<Tool26 logoDisplay={true}/>} />
        <Route path="/tool27" element={<Tool27 logoDisplay={true}/>} />
        <Route path="/tool28" element={<Tool28 logoDisplay={true}/>} />
        <Route path="/tool29" element={<Tool29 logoDisplay={true}/>} />
        <Route path="/tool30" element={<Tool30 logoDisplay={true}/>} />
        <Route path="/tool31" element={<Tool31 logoDisplay={true}/>} />
        <Route path="/tool32" element={<Tool32 logoDisplay={true}/>} />
        <Route path="/tool33" element={<Tool33 logoDisplay={true}/>} />
        <Route path="/tool34" element={<Tool34 logoDisplay={true}/>} />
        <Route path="/tool35" element={<Tool35 logoDisplay={true}/>} />
        <Route path="/tool36" element={<Tool36 logoDisplay={true}/>} />
        <Route path="/tool37" element={<Tool37 logoDisplay={true}/>} />
        <Route path="/tool38" element={<Tool38 logoDisplay={true}/>} />
        <Route path="/tool39" element={<Tool39 logoDisplay={true}/>} />
        <Route path="/tool40" element={<Tool40 logoDisplay={true}/>} />
        <Route path="/tool41" element={<Tool41 logoDisplay={true}/>} />
        <Route path="/tool42" element={<Tool42 logoDisplay={true}/>} />
        <Route path="/tool43" element={<Tool43 logoDisplay={true}/>} />
        <Route path="/tool44" element={<Tool44 logoDisplay={true}/>} />
        <Route path="/tool45" element={<Tool45 logoDisplay={true}/>} />
        <Route path="/tool46" element={<Tool46 logoDisplay={true}/>} />
        <Route path="/tool47" element={<Tool47 logoDisplay={true}/>} />
        <Route path="/tool48" element={<Tool48 logoDisplay={true}/>} />
        <Route path="/tool49" element={<Tool49 logoDisplay={true}/>} />
        <Route path="/tool50" element={<Tool50 logoDisplay={true}/>} />
        <Route path="/tool51" element={<Tool51 logoDisplay={true}/>} />
        <Route path="/tool52" element={<Tool52 logoDisplay={true}/>} />
        <Route path="/tool53" element={<Tool53 logoDisplay={true}/>} />
        <Route path="/tool54" element={<Tool54 logoDisplay={true}/>} />
        <Route path="/tool55" element={<Tool55 logoDisplay={true}/>} />
        <Route path="/tool56" element={<Tool56 logoDisplay={true}/>} />

        {/* Case Studies */}
        <Route path="/casestudies/index" element={<Index />} />

        {isLoggedIn ? <Route path="*" element={<RightMenu />} /> : null}

        {/* <Route path='*' element={<div>Page Not Found</div>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
