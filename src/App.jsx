import React from "react";
import Header from "./Header";

import { Footer } from "./Footer";
import Content from "./content";
function App() {
    let css ={color:'blue'}
    return (
        <>
            <Header/>
            <h1 style={css}>hii{name}</h1>
            <Content/>
            <Footer/>
        </>
    )
}

export default App;
