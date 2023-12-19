export default function InventoryListItem({ item, handleAddToOrder }) {
  return (
    <div className="InventoryListItem">
      <div className="name">{item.name}</div>
      <div className="buy">
        <span>${item.price.toFixed(2)}</span>
        <button
          className="btn-sm"
          onClick={() => handleAddToOrder(item._id)}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
