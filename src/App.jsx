import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Components/Movies";
import Secondary from "./Components/Secondary";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Movies
                counter={count}
                increase={Increment}
                username="Rukshan Dias"
              ></Movies>
            }
          ></Route>
          <Route
            path="/two"
            element={<Secondary testinglol="testing this property"></Secondary>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
