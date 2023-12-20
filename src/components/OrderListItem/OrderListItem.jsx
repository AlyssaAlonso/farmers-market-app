import LineItem from "../LineItem/LineItem";

export default function OrderListItem({ order, activeOrder, setActiveOrder }) {
  const lineItems = order.lineItems.map((item) => (
    <LineItem lineItem={item} isPaid={order.isPaid} key={item._id} />
  ));

  // const formattedOrderDate = (order.updatedAt).toLocaleDateString("en-US", {
  //   month: "long",
  //   day: "numeric",
  //   year: "numeric",
  // });

  return (
    // <div
    //   className={`OrderListItem ${order === activeOrder ? "selected" : ""}`}
    //   onClick={() => setActiveOrder(order)}
    // >
    //   <div>
    //     <div>
    //       Order Id: <span className="smaller">{order.orderId}</span>
    //     </div>
    //     <div className="smaller">
    //       {new Date(order.updatedAt).toLocaleDateString()}
    //     </div>
    //   </div>
    //   <div className="align-rt">
    //     <div>${order.orderTotal.toFixed(2)}</div>
    //     <div className="smaller">
    //       {order.orderQty} Item{order.orderQty > 1 ? "s" : ""}
    //     </div>
    //   </div>
    // </div>

    <div class="order-card">
      <h3>
        {new Date(order.updatedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </h3>
      <p>#{order.orderId}</p>
      {lineItems}
      <div class="space-between-container {">
        <p>
          {order.orderQty} Item{order.orderQty > 1 ? "s" : ""}
        </p>
        <p>${order.orderTotal.toFixed(2)}</p>
      </div>
    </div>
  );
}
