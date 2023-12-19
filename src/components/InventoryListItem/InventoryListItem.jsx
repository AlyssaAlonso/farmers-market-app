export default function InventoryListItem({ marketItem, handleAddToOrder }) {
  return (
    <div className="InventoryListItem">
      <div className="name">{marketItem.name}</div>
      <div className="buy">
        <span>${marketItem.price.toFixed(2)}</span>
        <button
          className="btn-sm"
          onClick={() => handleAddToOrder(marketItem._id)}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
