import { createContext, useContext, useEffect, useState } from "react";

export const ManagerContext = createContext();

const ManagerProvider = ({ children }) => {
    const [action, setAction] = useState('');
    const [openListId, setOpenListId] = useState('');
    const [editingItemId, setEditingItemId] = useState('');
    const [menuCollapsed, setMenuCollapsed] = useState(false);

    return (
        <ManagerContext.Provider value={
            { 
                action, setAction, 
                openListId, setOpenListId, 
                editingItemId, setEditingItemId,
                menuCollapsed, setMenuCollapsed
            }
        }>
            {children}
        </ManagerContext.Provider>
    )
}

const useManager = () => useContext(ManagerContext);

export { ManagerProvider, useManager }