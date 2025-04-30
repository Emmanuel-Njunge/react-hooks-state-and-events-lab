import React, { useState } from "react";
import Item from "./Item";
import itemsData from "../data/items";

function ShoppingList({ items = itemsData }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const itemsToDisplay = items.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  function handleChange(e) {
    setSelectedCategory(e.target.value);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
