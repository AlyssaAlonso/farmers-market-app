const Item = require("../../models/item");

async function getAllForItem(req, res) {
  const { itemId } = req.params;
  const reviews = await Review.find({ item: itemId }).sort("-createdAt");
  res.json(reviews);
}

async function addReview(req, res) {
  const { itemId } = req.params;
  const { content, rating } = req.body;
  const item = await Item.findById(itemId);

  const newReview = {
    content,
    rating,
    user: req.user._id,
  };

  item.reviews.push(newReview);
  const savedItem = await item.save();

  res.json(savedItem);
}

async function updateReview(req, res) {
  const { reviewId } = req.params;
  const { content, rating } = req.body;
  const item = await Item.findById(itemId);

  const newReview = {
    content,
    rating,
    user: req.user._id,
  };

  item.reviews.push(newReview);
  const savedItem = await item.save();

  res.json(savedItem);
}
async function deleteReview(req, res) {
  const { reviewId } = req.params;
  await Review.findByIdAndDelete(reviewId);
  res.json({ message: "Review deleted successfully" });
}

module.exports = {
  getAllForItem,
  addReview,
  updateReview,
  deleteReview,
};
