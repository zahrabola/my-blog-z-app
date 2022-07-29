import "bootstrap/dist/css/bootstrap.min.css";
import Hpage from "./Pages/Hpage/Hpage";
import Navbar from "./Components/navbar/Navbar";
import React from "react";
import Header from "./Components/header/Header";
import Single from "./Pages/singlepage/Single";
import Writing from "./Pages/writing/Writing";
import Setting from "./Pages/settings/Settings";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";


function App() {
  return (
    <div className="App">
      <div>Zahra Olanrewaju</div>
<Navbar/>
<Header/>
<Hpage />
<Single />
<Writing />
<Setting />
<Login />
<Register />
    </div>
  );
}

export default App;
