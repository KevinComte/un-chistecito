import { unChistecitoContext } from "../../context";

import { useContext, useEffect } from "react";

const Layout = ({children}) => {
    const context = useContext(unChistecitoContext);
    return(
        <main className={`${context.isDarkMode?'w-screen h-full bg-primary flex flex-col items-center py-10 dark text-white relative':'w-screen h-full bg-slate-100 flex flex-col items-center py-10 relative'}`}>
        
            <h1 className="text-4xl font-Bebas"> UN CHISTECITO🤣</h1>
            {children}
  
        </main>
    )
}

export default Layout;