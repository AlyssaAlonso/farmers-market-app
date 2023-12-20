import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
import * as reviewsAPI from "../../utilities/reviews-api";
import InventoryListItem from "../../components/InventoryListItem/InventoryListItem";

export default function ItemDetailPage({ user, setUser, cart, setCart }) {
  let { itemId } = useParams();
  const [item, setItem] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(function () {
    async function getItem() {
      const item = await itemsAPI.getById(itemId);
      setItem(item);
      setReviews(item.reviews);
    }
    getItem();

    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  async function handleAddToOrder(itemId) {
    // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    // 2. Update the cart state with the updated cart received from the server
    setCart(updatedCart);
  }

  return (
    <>
      <h1>{item.name}</h1>
      <p>Description: {item.description}</p>
      <p>Price: ${item.price}</p>
      <button className="btn-sm" onClick={() => handleAddToOrder(item._id)}>
        ADD
      </button>
    </>
  );
}
