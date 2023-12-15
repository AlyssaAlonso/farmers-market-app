import { useState, useEffect } from "react";
import MarketCard from "../../components/MarketCard/MarketCard";
import * as marketsAPI from "../../utilities/markets-api";

export default function MarketsPage() {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    async function getMarkets() {
      try {
        const allMarkets = await marketsAPI.getAll();
        setMarkets(allMarkets); // Update state with fetched markets
      } catch (error) {
        console.error("Error fetching markets:", error);
      }
    }

    getMarkets();
  }, []); // Empty dependency array runs this effect only once on mount

  return (
    <>
      <div>
        {markets.map((market) => {
          return <MarketCard key={market._id} market={market} />;
        })}
      </div>
    </>
  );
}
