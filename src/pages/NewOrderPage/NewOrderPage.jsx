import * as ordersAPI from "../../utilities/orders-api";
import { useNavigate } from "react-router-dom";
import OrderDetail from "../../components/OrderDetail/OrderDetail";

export default function NewOrderPage({
  user,
  setUser,
  cart,
  setCart,
  stripePromise,
}) {
  const navigate = useNavigate();

  useEffect(
    function () {
      // Load cart (a cart is the unpaid order for the logged in user)
      async function getCart() {
        const cart = await ordersAPI.getCart();
        setCart(cart);
      }
      getCart();
    },
    [setCart]
  );

  /*--- Event Handlers ---*/
  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    try {
      const response = await ordersAPI.createCheckoutSession(); // Call the function to initiate checkout
      const { sessionId } = response; // Assuming the API returns sessionId

      // Redirect to Stripe Checkout with the received sessionId
      const stripe = await stripePromise; // Assuming Stripe has been initialized
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        throw new Error(error.message);
      } else {
        // Redirect to Order History page after successful payment
        navigate("/orders");
      }
    } catch (error) {
      console.error("Error during checkout:", error.message);
    }
  }

  return (
    <>
      <div className="orders-container">
        <h1>Order Summary</h1>
        <br />
        <OrderDetail
          order={cart}
          handleChangeQty={handleChangeQty}
          handleCheckout={handleCheckout}
        />
      </div>
    </>
  );
}
