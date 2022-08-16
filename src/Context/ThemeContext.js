import { createContext, useReducer } from "react";
import { ThemeReducer } from "./Reducer/ThemeReducer";
import { TOGGLE_THEME } from "./ActionType"

export const ThemeContext = createContext();

const initval = {
    theme: 'light'
}

export const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(ThemeReducer, initval);


    const Toogle_Change = (val) => {
        let newtheme = val === 'light' ? 'dark' : 'light'

        dispatch({ type:TOGGLE_THEME, payload: newtheme })

    }
    return (
        <ThemeContext.Provider
            value={{
                ...state,
                Toogle_Change
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;

// export const theme_context = createContext();

// const initval = {
//     theme: 'light'
// }

// export const Theme_provider = () => {
//     const [state, dispatch] = useReducer(themereducer , initval);

//     const togglechange = (val) => {
//         let newtheme = val === 'light' ? 'dark' : 'light'

//         dispatch({type:TOGGLE_THEME, payload:newtheme})
//     }

//     return(
//         <theme_context.Provider 
//             value={
//                 {
//                     ...state,
//                     togglechange
//                 }
//             }
//         >
            
//         </theme_context.Provider>
//     )
// }  

// export default Theme_provider;   