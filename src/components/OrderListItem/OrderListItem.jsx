import LineItem from "../LineItem/LineItem";

export default function OrderListItem({ order, activeOrder, setActiveOrder }) {
  const lineItems = order.lineItems.map((item) => (
    <LineItem lineItem={item} isPaid={order.isPaid} key={item._id} />
  ));

  return (
    <div className="order-card">
      <h3>
        {new Date(order.updatedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </h3>
      <p>#{order.orderId}</p>
      {lineItems}
      <div className="space-between-container {">
        <p>
          {order.orderQty} Item{order.orderQty > 1 ? "s" : ""}
        </p>
        <p>${order.orderTotal.toFixed(2)}</p>
      </div>
    </div>
  );
}
