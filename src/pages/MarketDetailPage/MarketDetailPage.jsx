import { useParams } from "react-router-dom";

export default function MarketDetailPage() {
  let { marketName } = useParams();

  return (
    <>
      <h1>{marketName}</h1>
    </>
  );
}
