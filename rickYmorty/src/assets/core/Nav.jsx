import { Link } from "react-router-dom";
import "./Nav.scss"
import { useContext } from "react";
import {ThemeContext} from "/src/context/ThemeContext.jsx"
import dark from "/src/assets/core/dark.webp"
import dia from "/src/assets/core/dia.jpg"


const Nav = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  // console.log(theme);
  return (
    <nav className={`bar ${theme}`}>
        <ul>
            <li>
                <Link to="" className="link">Home</Link>
            </li>
            <li>
                <Link to="/gallery" className="link">Gallery</Link>
            </li>
          <button onClick={toggleTheme}>
            <img src={theme =="dia" ? dia : dark} alt="noche y dia"/>

          </button>  
        </ul>
    </nav>
  )
}

export default Nav

// export default function Nav(){

// // const Nav = () => {
//   return (
//    <nav>
//         <ul>
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="/Gallery">Gallery</Link></li>
//         </ul>
//    </nav>
//   )
// }


