import React from "react";
import Header from "./components/Header";
import imgs from "./assets/img/logo.png"

function App() {
  return (
    <React.StrictMode>
      <Header img-logo={imgs} />
    </React.StrictMode >
  );
}

export default App;
