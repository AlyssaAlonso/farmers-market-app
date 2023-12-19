import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import CartPage from "../CartPage/CartPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import MarketsPage from "../MarketsPage/MarketsPage";
import MarketDetailPage from "../MarketDetailPage/MarketDetailPage";
import NavBar from "../../components/NavBar/NavBar";

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
              path="/cart"
              element={
                <CartPage
                  user={user}
                  setUser={setUser}
                  cart={cart}
                  setCart={setCart}
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
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
