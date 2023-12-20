import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./OrderHistoryPage.css";
import * as ordersAPI from "../../utilities/orders-api";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import OrderList from "../../components/OrderList/OrderList";

export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(function () {
    async function getOrders() {
      const orders = await ordersAPI.getAllForUser();
      setActiveOrder(orders[0] || null);
      setOrders(orders);
    }
    getOrders();
  }, []);

  return (
    <div className="orders-container">
      <h1>Order History</h1>
      <OrderList
        orders={orders}
        activeOrder={activeOrder}
        setActiveOrder={setActiveOrder}
      />
    </div>
  );
}
