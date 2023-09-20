import React from "react";

const TabButton = ({ active, selectTab, children }) => {
const buttonClasses = active ? 'text-white border-b border-orange-600' : 'text-[#ADB7BE]'

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-orange-600 ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton;