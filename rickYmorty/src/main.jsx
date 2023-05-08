import { BrowserRouter} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeProvider from "./context/ThemeContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  </BrowserRouter>
  
)
