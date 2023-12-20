import LineItem from "../LineItem/LineItem";

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({
  order,
  handleChangeQty,
  handleCheckout,
}) {
  if (!order) return null;

  const lineItems = order.lineItems.map((item) => (
    <LineItem
      lineItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  ));

  return (
    <div className="OrderDetail">
      <div>
        {order.isPaid ? <h2>ORDER {order.orderId}</h2> : <h2>NEW ORDER</h2>}
        <h3>{new Date(order.updatedAt).toLocaleDateString()}</h3>
      </div>

      <div>
        {lineItems.length ? (
          <>
            {lineItems}
            <section className="total">
              {order.isPaid ? (
                <span>TOTAL&nbsp;&nbsp;</span>
              ) : (
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >
                  CHECKOUT
                </button>
              )}
              <span>{order.totalQty}</span>
              <span>${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
        ) : (
          <div>Your cart is empty</div>
        )}
      </div>
    </div>
  );
}
