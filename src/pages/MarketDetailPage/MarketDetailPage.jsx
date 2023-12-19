import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
import * as vendorsAPI from "../../utilities/vendors-api";
import { Link, useNavigate } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";

export default function MarketDetailPage({ user, setUser }) {
  let { marketName } = useParams();
  const [marketItems, setMarketItems] = useState([]);
  const [allVendors, setAllVendors] = useState([]);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      setMarketItems(items);
    }
    getItems();

    async function getVendors() {
      const vendors = await vendorsAPI.getAll();

      const marketVendors = vendors.filter((vendor) =>
        vendor.markets.includes(marketName)
      );

      setAllVendors(marketVendors);
    }
    getVendors();

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

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate("/orders");
  }

  return (
    <>
      <h1>{marketName}</h1>
      <InventoryList
        marketItems={marketItems.filter((item) =>
          allVendors.some((vendor) => vendor._id === item.vendor)
        )}
        handleAddToOrder={handleAddToOrder}
      />
    </>
  );
}
