import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import MarketsPage from "../MarketsPage/MarketsPage";
import MarketDetailPage from "../MarketDetailPage/MarketDetailPage";
import VendorsPage from "../VendorsPage/VendorsPage";
import VendorDetailPage from "../VendorDetailPage/VendorDetailPage";
import ItemsPage from "../ItemsPage/ItemsPage";
import ItemDetailPage from "../ItemDetailPage/ItemDetailPage";
import NavBar from "../../components/NavBar/NavBar";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OPHzBBfZizcqMjjF7yam0oq9Qs9dETmpo3JtbZ1oOwCVneISd8rGGsfyiqx6MgNTak49niGl8gGVAv7Qbhwraqd00Y4oYfy1u"
);

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState(null);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route
              path="/orders/new"
              element={
                <NewOrderPage
                  user={user}
                  setUser={setUser}
                  cart={cart}
                  setCart={setCart}
                  stripePromise={stripePromise}
                />
              }
            />
            <Route
              path="/orders"
              element={
                <OrderHistoryPage
                  user={user}
                  setUser={setUser}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/markets"
              element={
                <MarketsPage
                  user={user}
                  setUser={setUser}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/markets/:marketId"
              element={
                <MarketDetailPage
                  user={user}
                  setUser={setUser}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/vendors"
              element={
                <VendorsPage
                  user={user}
                  setUser={setUser}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/vendors/:vendorId"
              element={
                <VendorDetailPage
                  user={user}
                  setUser={setUser}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/items"
              element={
                <ItemsPage
                  user={user}
                  setUser={setUser}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/items/:itemId"
              element={
                <ItemDetailPage
                  user={user}
                  setUser={setUser}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route path="/*" element={<Navigate to="/markets" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
