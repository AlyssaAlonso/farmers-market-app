import { useState, useEffect } from "react";
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
import InventoryList from "../../components/InventoryList/InventoryList";

export default function ItemsPage({ user, setUser, cart, setCart }) {
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

    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  /*--- Event Handlers ---*/
  async function handleAddToOrder(itemId) {
    // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    // 2. Update the cart state with the updated cart received from the server
    setCart(updatedCart);
  }

  return (
    <>
      <div className="cards-container">
        <InventoryList allItems={items} handleAddToOrder={handleAddToOrder} />
      </div>
    </>
  );
}
