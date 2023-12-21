import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
import * as marketsAPI from "../../utilities/markets-api";
import * as vendorsAPI from "../../utilities/vendors-api";
import { Link, useNavigate } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";

export default function VendorDetailPage({ user, setUser, cart, setCart }) {
  let { vendorId } = useParams();
  const [vendor, setVendor] = useState({});
  const [vendorItems, setVendorItems] = useState([]);

  useEffect(function () {
    async function getVendorData() {
      const vendor = await vendorsAPI.getById(vendorId);
      setVendor(vendor);

      const items = await itemsAPI.getAll();
      const vendorItems = items.filter(
        (item) => item.vendor._id === vendor._id
      );
      setVendorItems(vendorItems);
    }
    getVendorData();

    // Load cart (a cart is the unpaid order for the logged in user)
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
      <main>
        <br />
        <h1>{vendor.name}</h1>
        <div class="cards-container">
          <p>{vendor.description}</p>
        </div>
        <InventoryList
          allItems={vendorItems}
          handleAddToOrder={handleAddToOrder}
        />
      </main>
    </>
  );
}
