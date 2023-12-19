import InventoryListItem from "../InventoryListItem/InventoryListItem";

export default function InventoryList({ marketItems, handleAddToOrder }) {
  const items = marketItems.map((item) => (
    <InventoryListItem
      key={item._id}
      marketItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  ));
  return (
    <>
      <main className="InventoryList">{items}</main>
    </>
  );
}
