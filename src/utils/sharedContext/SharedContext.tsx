import React, { createContext, useState } from 'react';

export const SharedContextProvider = (props: any) => {
    const [showAddProductButton, setShowAddProductButton] = useState(false)
    const [showOverlay, setShowOverlay] = useState<boolean>(false)
    const [showGlobalLoading, setShowGlobalLoading] = useState<boolean>(false)
    const [forceProductsToRefresh, setForceProductsToRefresh] = useState<boolean>(false)
    const [selectedCategory, setselectedCategory] = useState<string>()

    return (
        <SharedContext.Provider
            value={{
                showAddProductButton,
                setShowAddProductButton,
                showOverlay,
                setShowOverlay,
                showGlobalLoading,
                setShowGlobalLoading,
                forceProductsToRefresh,
                setForceProductsToRefresh,
                selectedCategory,
                setselectedCategory
            }}>
            {props.children}
        </SharedContext.Provider>
    );
};

export const SharedContext = createContext({});
