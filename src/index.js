import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";
import Credits from "./components/Credits";
import { Canvas } from "react-three-fiber";
import Cubes from "./components/Cubes";
import Lights from "./components/Lights";
import Environment from "./components/Environment";
import Stars from "./components/Cubes/Stars"

function App() {
    return (
        <>
            <Canvas>
                <Lights />
                <Cubes />
                <Environment />
            </Canvas>
        </>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
