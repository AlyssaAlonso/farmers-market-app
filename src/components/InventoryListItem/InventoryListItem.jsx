export default function InventoryListItem({ item, handleAddToOrder }) {
  const randomNumber = Math.floor(Math.random() * 1000); // Generating a random number
  return (
    <div className="card-container">
      <div
        className="card-image"
        style={{
          background: `url('https://source.unsplash.com/collection/202618/320x180?sig=${
            Date.now() + randomNumber
          }')`,
        }}
      ></div>

      <div className="card-content">
        <h2>{item.name}</h2>
        <p>${item.price.toFixed(2)}</p>
        <p>{item.description}</p>

        <div className="card-links">
          <button className="btn-sm" onClick={() => handleAddToOrder(item._id)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
