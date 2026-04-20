import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/pages/home/Hero";
import Trustedby from "./components/pages/home/TrustedBy";
import Services from "./components/pages/services/Services";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Trustedby />
      <Services />
    </div>
  );
};

export default App;
