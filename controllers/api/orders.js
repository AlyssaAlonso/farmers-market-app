const Order = require("../../models/order");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

async function getAllForUser(req, res) {
  const orders = await Order.find({ user: req.user._id, isPaid: true }).sort(
    "-updatedAt"
  );
  res.json(orders);
}

// A cart is the unpaid order for a user
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// Add an item to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addItemToCart(req.params.id);
  res.json(cart);
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty);
  res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}

// Create a checkout session for the cart
async function createCheckoutSession(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();

  const lineItems = cart.lineItems.map((lineItem) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: lineItem.item.name,
      },
      unit_amount: lineItem.item.price * 100, // Amount in cents
    },
    quantity: lineItem.qty,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.BASE_URL}/orders`,
      cancel_url: `${process.env.BASE_URL}/orders/new`,
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
}

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  getAllForUser,
  createCheckoutSession,
};
