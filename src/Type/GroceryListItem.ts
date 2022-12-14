export interface GroceryListItem {
    id: Number;
    name: string;
    description: string;
    price: number;
    purchased: boolean;
}

export interface GroceryListContextState {
    groceryListItems : GroceryListItem[];
    hasBeenPurchased: boolean;
    addGroceryListItem: (groceryListItem :GroceryListItem) => void;
    removeGroceryListItem: (id : number) => void;
    purchaseGroceryListItem: (id : number) => void;

}