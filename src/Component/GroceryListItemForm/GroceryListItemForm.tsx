import React, { useState } from "react";
import axios from "axios";
import { GroceryListItem } from "../../Type/GroceryListItem";

const GroceryListItemForm: React.FC = () => {

    const [itemName, setItemName] = useState<string>("");
    const [itemDescription, setItemDescription] = useState<string>("");
    const [itemPrice, setItemPrice] = useState<Number>(NaN);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "name") {
            setItemName(e.target.value);
        } else if (e.target.name === "description") {
            setItemDescription(e.target.value);
        } else if (e.target.name === "price") {
            setItemPrice(e.target.valueAsNumber);
        }
    }

    const handleSubmit = async () => {



        try {

            const {data} = await axios.post<GroceryListItem> (
                'http://localhost:8000/grocerylistitems/newitem', 
                {
                    name: itemName,
                    description: itemDescription,
                    price: itemPrice
                }
            )

            console.log(data);
            
        } catch (error) {
            if(axios.isAxiosError(error)) {
                return error.message
            } else {
                return `An unexpected error occured: ${error}`
            }
        }

        window.location.reload();

        
    }


    return (
        <div className="grocery-list-item-form">
            <label htmlFor="name">Name</label>
            <input onChange={handleChange} name="name" type="text" />
            <label htmlFor="description">Description</label>
            <input onChange={handleChange} name="description" type="text" />
            <label htmlFor="price">Price</label>
            <input onChange={handleChange} name="price" type="number" />
            <button onClick={handleSubmit}>Add to List</button>
        </div>
    )

}

export default GroceryListItemForm;