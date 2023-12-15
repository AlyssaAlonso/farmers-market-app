export default function MarketCard({ market }) {
  return (
    <>
      <div>
        <h2>{market.name}</h2>
        <p>{market.address}</p>
        <p>{market.dayOfWeek}</p>
        <p>{market.startDate}</p>
        <p>{market.endDate}</p>
        <p>{market.description}</p>
      </div>
    </>
  );
}
