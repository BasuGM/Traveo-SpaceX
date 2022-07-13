import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {

  const state = useSelector(state => state)

  useEffect(() => {

    console.log('state')
    console.log(JSON.stringify(state, null, 4))
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
