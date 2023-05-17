import React from "react";
import Navigation from "./components/Navigation/Navigation";

import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Home/>
      </main>
    </>
  );
}

export default App;
