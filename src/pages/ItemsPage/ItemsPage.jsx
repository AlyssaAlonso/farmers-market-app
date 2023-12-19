import { useState, useEffect } from "react";
import ItemCard from "../../components/ItemCard/ItemCard";
import * as itemsAPI from "../../utilities/items-api";

export default function ItemsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      try {
        const items = await itemsAPI.getAll();
        setItems(items);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }

    getItems();
  }, []); // Empty dependency array runs this effect only once on mount

  return (
    <>
      <div className="cards-container">
        {items.map((item) => {
          return <ItemCard key={item._id} item={item} />;
        })}
      </div>
    </>
  );
}
