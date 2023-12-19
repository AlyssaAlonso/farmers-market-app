import { useState, useEffect, useRef } from "react";
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
import { Link, useNavigate } from "react-router-dom";
import OrderDetail from "../../components/OrderDetail/OrderDetail";

export default function NewOrderPage({ user, setUser, cart, setCart }) {
  const navigate = useNavigate();

  useEffect(function () {
    // Load cart (a cart is the unpaid order for the logged in user)
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  /*--- Event Handlers ---*/
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
      <main className="NewOrderPage">
        <OrderDetail
          order={cart}
          handleChangeQty={handleChangeQty}
          handleCheckout={handleCheckout}
        />
      </main>
    </>
  );
}
