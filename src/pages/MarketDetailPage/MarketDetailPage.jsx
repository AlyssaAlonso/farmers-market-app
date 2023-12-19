import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
import * as marketsAPI from "../../utilities/markets-api";
import * as vendorsAPI from "../../utilities/vendors-api";
import { Link, useNavigate } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";

export default function MarketDetailPage({ user, setUser, cart, setCart }) {
  let { marketId } = useParams();
  const [market, setMarket] = useState({});
  const [marketItems, setMarketItems] = useState([]);
  const [marketVendors, setMarketVendors] = useState([]);

  useEffect(function () {
    async function getMarketData() {
      const market = await marketsAPI.getById(marketId);
      setMarket(market);

      const vendors = await vendorsAPI.getAll();
      const marketVendors = vendors.filter((vendor) => {
        return vendor.markets.some((market) => market._id === marketId);
      });
      setMarketVendors(marketVendors);

      const items = await itemsAPI.getAll();
      const marketItems = items.filter((item) => {
        return marketVendors.some((vendor) => vendor._id === item.vendor._id);
      });
      setMarketItems(marketItems);
    }
    getMarketData();

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
      <h1>{market.name}</h1>
      <h3>Items:</h3>
      <InventoryList
        allItems={marketItems}
        handleAddToOrder={handleAddToOrder}
      />
      <br />
      <h3>Featured Vendors:</h3>
      <ul>
        {marketVendors.map((vendor) => (
          <li key={vendor._id}>{vendor.name} </li>
        ))}
      </ul>
    </>
  );
}
