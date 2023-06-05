import { createContext, useEffect } from "react";
import { useState } from "react";

export const unChistecitoContext = createContext();



export const UnChistecitoProvider = ({ children }) => {
    // estado para guardar los chistes
    const [chistes, setChistes] = useState({})

    useEffect(() => {
        fetch('https://chisteapp-daroq-default-rtdb.firebaseio.com/chistes.json')
            .then(response => response.json())
            .then(data => setChistes(data))
    }, [])

    // Category Array
    const [category, setCategory] = useState(['Funable', 'Misc', 'Informatica']);

    // Category Array Filtered
    const [categoryFiltered, setCategoryFiltered] = useState([]);

    // Category Array Filtered
    const [chistesFiltered, setChistesFiltered] = useState([]);


    // Category Array Filtered
    const [chisteFinal, setChisteFinal] = useState(
        { autor: '', categoria: '', contenidoChiste: '', id: '' }
    );

    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <unChistecitoContext.Provider value={{
            chistes,
            setChistes,
            category,
            setCategory,
            categoryFiltered,
            setCategoryFiltered,
            chistes,
            setChistes,
            chistesFiltered,
            setChistesFiltered,
            chisteFinal,
            setChisteFinal,
            isDarkMode,
            setIsDarkMode
        }}>
            {children}
        </unChistecitoContext.Provider>
    )
}

// export default unChistecitoProvider;