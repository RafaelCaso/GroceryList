import React, { useEffect } from "react";
import { GroceryListItem, GroceryListContextState } from "../../Type/GroceryListItem";
import axios from 'axios';


const GroceryListItemCard: React.FC<GroceryListItem> = ({id: id, name: name, description: description, price: price, purchased: purchased}) => {

    const handleClick =  async () => {
        try {

            const {data} = await axios.put<number> (
                `http://localhost:8000/grocerylistitems/purchaseditem?id=${id}`,
                {
                    headers: { 'Access-Control-Allow-Origin': '*' },
                }
            )
            
        } catch (error) {
            console.log(error)
        }
        
        window.location.reload();
    }



  return (
    <div className="grocery-list-item-card">
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h3>{price}</h3>
        <button onClick={handleClick}>Remove Item</button>
    </div>
  )
}

export default GroceryListItemCard