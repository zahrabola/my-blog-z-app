import "bootstrap/dist/css/bootstrap.min.css";
import Hpage from "./Pages/Hpage/Hpage";
import Navbar from "./Components/navbar/Navbar";
import React from "react";
import Header from "./Components/header/Header";
import Single from "./Pages/singlepage/Single";
import Writing from "./Pages/writing/Writing";

function App() {
  return (
    <div className="App">
      <div>Zahra Olanrewaju</div>
<Navbar/>
<Header/>
<Hpage />
<Single />
<Writing />
    </div>
  );
}

export default App;
