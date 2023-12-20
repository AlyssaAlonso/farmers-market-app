import InventoryListItem from "../InventoryListItem/InventoryListItem";

export default function InventoryList({ allItems, handleAddToOrder }) {
  const items = allItems.map((item) => (
    <InventoryListItem
      key={item._id}
      item={item}
      handleAddToOrder={handleAddToOrder}
    />
  ));
  return (
    <>
      <div className="cards-container">{items}</div>
    </>
  );
}
