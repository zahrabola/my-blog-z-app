import "bootstrap/dist/css/bootstrap.min.css";
import Hpage from "./Pages/Hpage/Hpage";
import Navbar from "./Components/navbar/Navbar";
import React from "react";
import Single from "./Pages/singlepage/Single";
import Writing from "./Pages/writing/Writing";
import Setting from "./Pages/settings/Settings";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hpage />}>
            {" "}
          </Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/write" element={<Writing />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
          <Route path="/single" element={<Single />}></Route>
        </Routes>
      </BrowserRouter>

      <div>Zahra Olanrewaju</div>
    </div>
  );
}

export default App;
