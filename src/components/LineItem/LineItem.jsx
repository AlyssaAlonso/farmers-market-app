import "./LineItem.css";

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <div className="">
      <div className="line-item-card">
        <div>
          <h4>{lineItem.item.name}</h4>
          {lineItem.qty > 1 ? (
            <p>each ${lineItem.item.price.toFixed(2)}</p>
          ) : (
            <> </>
          )}
        </div>
        <div className="qty" style={{ justifyContent: isPaid && "center" }}>
          {!isPaid && (
            <button
              className="btn-xs"
              onClick={() =>
                handleChangeQty(lineItem.item._id, lineItem.qty - 1)
              }
            >
              -
            </button>
          )}
          <span>{lineItem.qty}</span>
          {!isPaid && (
            <button
              className="btn-xs"
              onClick={() =>
                handleChangeQty(lineItem.item._id, lineItem.qty + 1)
              }
            >
              +
            </button>
          )}
        </div>
        <p className="pricexqty">${lineItem.extPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}
