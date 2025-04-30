'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DropdownContextType {
    isMenuOpen: boolean;
    toggleDropdown: () => void;
    closeDropdown: () => void;
}

const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

export const DropdownProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleDropdown = () => setIsMenuOpen(prev => !prev);
    const closeDropdown = () => setIsMenuOpen(false);

    return (
        <DropdownContext.Provider value={{ isMenuOpen, toggleDropdown, closeDropdown }}>
            {children}
        </DropdownContext.Provider>
    );
};

// Create a custom hook for easier access to the context
export const useDropdown = () => {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error("useDropdown must be used within a DropdownProvider");
    }
    return context;
};