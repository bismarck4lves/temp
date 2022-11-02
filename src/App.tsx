import { Toolbar } from "./components/Toolbar";
import MainContainer from "./components/MainContainer";

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
