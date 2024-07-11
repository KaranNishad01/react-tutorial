import React, { useContext } from "react";

export const ThemeContext = React.createContext({
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {}
});



export const ThemeProvider = ThemeContext.Provider;

// custom hook

export  function useTheme() {
     return useContext(ThemeContext)
}