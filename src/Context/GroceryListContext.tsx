import React from "react";
import { useState } from "react";
import { GroceryListItem, GroceryListContextState } from "../Type/GroceryListItem";

interface ProviderProps {
    children: React.ReactNode;
}

export const GroceryListContext = React.createContext<GroceryListContextState | null>(null);

export const GroceryListProvider: React.FC<ProviderProps> = ({children}) => {

    const [groceryListItems, setGroceryListItems] = useState<GroceryListItem[]>([]);
    const [hasBeenPurchased, setHasBeenPurchased] = useState<boolean>(false);
    
    const addGroceryListItem = (groceryListItem : GroceryListItem) => {
        const newItem : GroceryListItem = {
            id: groceryListItem.id,
            name: groceryListItem.name,
            description: groceryListItem.description,
            price : groceryListItem.price,
            purchased : groceryListItem.purchased
        }

        setGroceryListItems([...groceryListItems, newItem]);
    };

    const purchaseGroceryListItem = (id : Number) => {
        groceryListItems.filter((item : GroceryListItem) => {
            if(item.id === id) {
                item.purchased = true;
            }
        })
    };

    const removeGroceryListItem = (id: Number) => {
        setGroceryListItems(groceryListItems.filter((item: GroceryListItem) => item.id !== id));
    };

    return (
        <GroceryListContext.Provider value={{groceryListItems, hasBeenPurchased, addGroceryListItem, removeGroceryListItem, purchaseGroceryListItem}}>
            {children}
        </GroceryListContext.Provider>
    );

};