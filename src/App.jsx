import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Exercise1 from "./Excercises/Exercise1";
import Exercise2a from "./Excercises/Exercise2a";
import Exercise2b from "./Excercises/Exercise2b";
import Exercise2c from "./Excercises/Exercise2c";

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to={"/"}>
                  Excercise1
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/Exercise2a"}>
                  Exercise2a
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/Exercise2b"}>
                  Exercise2b
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/Exercise2c"}>
                  Exercise2c
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Exercise1 />} />
        <Route path="Exercise2a" element={<Exercise2a />} />
        <Route path="Exercise2b" element={<Exercise2b />} />
        <Route path="Exercise2c" element={<Exercise2c />} />
      </Routes>
    </>
  );
}

export default App;
