import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
import * as marketsAPI from "../../utilities/markets-api";
import * as vendorsAPI from "../../utilities/vendors-api";
import { Link, useNavigate } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";
import { useLocation } from "react-router-dom";

export default function MarketDetailPage({ user, setUser }) {
  let { marketId } = useParams();
  const [market, setMarket] = useState({});
  const [marketItems, setMarketItems] = useState([]);
  const [allVendors, setAllVendors] = useState([]);
  const [marketVendors, setMarketVendors] = useState([]);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      setMarketItems(items);
    }
    getItems();

    async function getMarketVendors() {
      const market = await marketsAPI.getById(marketId);
      setMarket(market);

      const vendors = await vendorsAPI.getAll();
      setAllVendors(vendors);

      const marketVendors = vendors.filter((vendor) => {
        return vendor.markets.some((market) => market._id === marketId);
      });
      setMarketVendors(marketVendors);
      console.log(marketVendors);
    }
    getMarketVendors();

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
      <h1>{market.name}</h1>
      <InventoryList
        marketItems={marketItems.filter((item) =>
          allVendors.some((vendor) => vendor._id === item.vendor)
        )}
        handleAddToOrder={handleAddToOrder}
      />
      <ul>
        {marketVendors.map((vendor) => (
          <li key={vendor._id}>{vendor.name} </li>
        ))}
      </ul>
    </>
  );
}
