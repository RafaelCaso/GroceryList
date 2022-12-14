import React from "react";
import { useContext, useState, useEffect } from "react";
import axios from 'axios'
import { GroceryListContext } from "../../Context/GroceryListContext";
import { GroceryListItem, GroceryListContextState } from "../../Type/GroceryListItem";
import GroceryListItemCard from "../GroceryListItemCard/GroceryListItemCard";

const ListLayout: React.FC = () => {

    // const {groceryListItems} = useContext(GroceryListContext) as GroceryListContextState;

    const [groceryListItems, setGroceryListItems] = useState<GroceryListItem[]>([]);

    async function getGroceryListItems() {
        try {
            const {data} = await axios.get<GroceryListItem[]> (
                "http://localhost:8000/grocerylistitems/all"
            )

            setGroceryListItems(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getGroceryListItems()
    }, [])

    return (
        <div>
            {
                groceryListItems.map((item, id) => {
                    if(item.purchased) {}
                    else {
                    return (
                        <GroceryListItemCard key={id} name={item.name} description={item.description} price={item.price} id={item.id} purchased={item.purchased} />
                    )
                    }
                })
            }
        </div>
    )
}

export default ListLayout;