import React from "react";
import { HomePage } from "./flow/homepage";
import { Context } from './contexts/context'
function App() {
  return (
    <React.StrictMode>
      <Context>  
          <HomePage />
      </Context>
    </React.StrictMode>
  );
}

export default App;
