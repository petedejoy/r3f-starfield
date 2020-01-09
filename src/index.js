import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import Cubes from "./components/Cubes";
import Lights from "./components/Lights";
import Environment from "./components/Environment";
import Stars from "./components/Cubes/Stars"

function App() {
    return (
        <>
            <Canvas camera={{ position:[0,0,.5], near: 0.01, far: 10000 }}>
                <Lights />
                <Cubes />
                <Environment />
            </Canvas>
        </>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
