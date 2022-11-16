import { createContext, ReactNode, useState } from "react";

type SideBarContextProps = {
    isCollapsed: boolean;
    setIsCollapsed: (state: boolean) => void;
}

export const SideBarContext = createContext({} as SideBarContextProps)

export const SideBarProvider = ({ children }: { children: ReactNode }) => {
    const [isCollapsed, setIsCollapsed] = useState(true)

    return (
        <SideBarContext.Provider value={{
            isCollapsed,
            setIsCollapsed,
        }}>
            {children}
        </SideBarContext.Provider>
    )
}
