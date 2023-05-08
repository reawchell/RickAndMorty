import {ThemeProvider} from "./context/ThemeContext";
import "./App.css";
// import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import GalleryInfo from "./assets/pages/GalleryInfo";
import Home from "./assets/pages/Home";
import Nav from "./assets/core/Nav";
import Gallery from "./assets/pages/Gallery";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";


function App() {
  // const {Theme} = useContext(ThemeContext);
  
  return (
    <ThemeProvider>
    <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/gallery/:id" element={<GalleryInfo />} />
        </Routes>
      
    </div>
    </ThemeProvider>
  );
}

export default App;
