import React, { useState } from "react";
import { Toolbar } from "./components/Toolbar";
import MainContainer from "./components/MainContainer";
import { soma } from "./utils";

function App() {
  return (
    <>
      <div
        style={{
          width: 500,
        }}
      >
        <Toolbar />
      </div>
      <MainContainer />
    </>
  );
}

export default App;
