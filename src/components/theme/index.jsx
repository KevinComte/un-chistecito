import React from "react";
import { useContext, useEffect } from "react";
import { unChistecitoContext } from "../../context";

const Theme = () => {
    const context = useContext(unChistecitoContext);

    const toggleDarkMode = () => {
        context.setIsDarkMode(!context.isDarkMode);
    };


return (
    <div className="mt-20 pb-20">
        <button onClick={toggleDarkMode} className="w-16 h-16 hover:text-white bg-tertiary rounded-full flex items-center justify-center mb-4 shadow-md shadow-pink-400/50 lg:mb-2 transform active:scale-x-75 transition-transform" id="toggle">
            {/* <!-- light mode --> */}
            <svg id="svg-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${context.isDarkMode?'w-6 h-6':'w-6 h-6 hidden'}`}>
                <path id="svg-light-path" className={`${context.isDarkMode?'duration-300':'hidden duration-300'}`}strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>

            {/* <!-- dark mode --> */}
            <svg id="svg-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 dark:hidden">
                <path id="svg-dark-path" className="dark:hidden transition duration-300" strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
        </button>
    </div>
)
}

export default Theme;