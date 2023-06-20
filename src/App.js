import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Candy from "./Candy";
import Lobster from "./Lobster";
import Yogurt from "./Yogurt";
import VendingMachine from "./VendingMachine";
import NavigationBar from "./NavigationBar";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("/");
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar selected={selected} setSelected={setSelected} />
        <h1>Vending Machine</h1>

        <Routes>
          <Route
            path="/"
            element={<VendingMachine setSelected={setSelected} />}
          >
            Home
          </Route>
          <Route
            path="/candy"
            element={
              <Candy
                setSelected={setSelected}
                onClick={() => setSelected("candy")}
              />
            }
          >
            Candy
          </Route>
          <Route
            path="/lobster"
            element={
              <Lobster
                setSelected={setSelected}
                onClick={() => setSelected("lobster")}
              />
            }
          >
            Lobster
          </Route>
          <Route
          onClick={() => setSelected("yogurt")}
            path="/yogurt"
            element={
              <Yogurt
                setSelected={setSelected}
                
              />
            }
          >
            Yogurt
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
