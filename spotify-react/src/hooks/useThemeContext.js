import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export const useThemeContext = () => 
{
    const context = useContext(ThemeContext);

    if(context === undefined)
    {
        console.error('Please make sure the component is within the scope');
    }

    return context
}