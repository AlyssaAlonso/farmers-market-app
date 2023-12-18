const Schema = require("mongoose").Schema;

const reviewSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    vendor: { type: Schema.Types.ObjectId, ref: "Vendor" },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    price: { type: Number, required: true },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = itemSchema;
