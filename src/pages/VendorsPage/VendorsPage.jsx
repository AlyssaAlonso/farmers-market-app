import { useState, useEffect } from "react";
import VendorCard from "../../components/VendorCard/VendorCard";
import * as vendorsAPI from "../../utilities/vendors-api";

export default function VendorsPage() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    async function getVendors() {
      try {
        const allVendors = await vendorsAPI.getAll();
        setVendors(allVendors); // Update state with fetched vendors
      } catch (error) {
        console.error("Error fetching vendors:", error);
      }
    }

    getVendors();
  }, []); // Empty dependency array runs this effect only once on mount

  return (
    <>
      <div className="cards-container">
        {vendors.map((vendor) => {
          return <VendorCard key={vendor._id} vendor={vendor} />;
        })}
      </div>
    </>
  );
}
