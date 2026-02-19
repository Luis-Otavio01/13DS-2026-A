import React, { useState } from 'react';
import './Switch.module.css';

const Switch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleSwitch = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`switch ${isDarkMode ? 'dark' : 'light'}`}> 
            <label className="switch-label">Modo {isDarkMode ? 'Escuro' : 'Claro'}</label>
            <input type="checkbox" onChange={toggleSwitch} />
        </div>
    );
};

export default Switch;
