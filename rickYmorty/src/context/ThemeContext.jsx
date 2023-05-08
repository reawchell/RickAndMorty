import React, { useState } from "react"
export const ThemeContext = React.createContext({
    them: "dia",
    toggleTheme: ()=> {}
})

export const ThemeProvider = ({children})=>{
    const [theme,setTheme] = useState("dia");
    const toggleTheme = () => {
        const nuevoTheme = theme === "dia"? "noche": "dia";
        setTheme(nuevoTheme)
    };
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
export default ThemeProvider;