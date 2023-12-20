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
        {lineItems.length ? (
          <>
            {lineItems}
            <div className="space-between-container">
              {order.isPaid ? (
                <h5>Total&nbsp;&nbsp;</h5>
              ) : (
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >
                  Checkout
                </button>
              )}

              <h5>${order.orderTotal.toFixed(2)}</h5>
            </div>
          </>
        ) : (
          <div>Your cart is empty</div>
        )}
      </div>
    </div>
  );
}
