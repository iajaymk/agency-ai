import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className="dark:bg-black realtive">
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
