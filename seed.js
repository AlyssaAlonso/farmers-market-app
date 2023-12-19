require("dotenv").config();
require("./config/database");

const Market = require("./models/market");
const Vendor = require("./models/vendor");
const Item = require("./models/item");
const Category = require("./models/category");

(async function () {
  await Market.deleteMany({});
  const markets = await Market.create([
    {
      name: "Englewood",
      address: "Veteran's Memorial Park, Englewood, NJ 07631",
      startDate: new Date("2023-06-09T10:00:00-04:00"),
      endDate: new Date("2023-10-27T14:00:00-04:00"),
      dayOfWeek: "Fridays",
      description:
        "A variety of fruits and vegetables, eggs, fresh baked goods, pickles and more.",
    },
    {
      name: "Glen Rock",
      address: "1 Harding Plaza, Glen Rock, NJ 07452",
      startDate: new Date("2023-06-25T10:00:00-04:00"),
      endDate: new Date("2023-11-19T14:00:00-05:00"),
      dayOfWeek: "Sundays",
      description:
        "Local farmers, groovy artisans and the best picnic spot in town.",
    },
    {
      name: "Oradell",
      address: "618 Veldran Avenue, Oradell, NJ 07649",
      startDate: new Date("2023-06-04T10:00:00-04:00"),
      endDate: new Date("2023-11-19T15:00:00-05:00"),
      dayOfWeek: "Sundays",
      description:
        "Vegetables, Fruits, Honey, Bread, Jelly, Peanuts, Cheese, Plants, Herbs, Flowers, Eggs, Pizza, Pasta, Mozzarella Cheese, Cookies, Pies, Quiches, a variety of Pickles, Olives, Sausages, Homemade Ice Creams and more.",
    },
    {
      name: "Paramus",
      address: "475 North Fairview Avenue, Paramus, NJ 07652",
      startDate: new Date("2023-06-21T15:00:00-04:00"),
      endDate: new Date("2023-09-27T19:00:00-04:00"),
      dayOfWeek: "Wednesdays",
      description:
        "Bakery items and breads, homemade pasta & raviolis, pasta sauces, handmade mozzarella, homemade dry and pork Italian sausages and other Italian items, pickles & olives, jelly & jams, bean coffee, whole leaf tea, hand blended soda, several varieties of kielbasa, peiroghi, bratwurst and other Polish items, dog bakery items such as biscuits, cookies, and cakes.",
    },
    {
      name: "Ramsey",
      address: "1 Erie Plaza, Ramsey, NJ 07446",
      startDate: new Date("2023-06-04T09:00:00-04:00"),
      endDate: new Date("2023-11-19T14:00:00-05:00"),
      dayOfWeek: "Sundays",
      description:
        "Artisan breads, cheeses, homemade pasta, gourmet nuts, coffee, teas, olive oils, spices, honey maple syrup, wine, fish pasture raised meat, free range eggs.",
    },
    {
      name: "Ridgewood",
      address: "6 Garber Square, Ridgewood, NJ 07450",
      startDate: new Date("2023-06-25T09:00:00-04:00"),
      endDate: new Date("2023-10-22T15:00:00-04:00"),
      dayOfWeek: "Sundays",
      description: "Variety of fruits & vegetables.",
    },
    {
      name: "River Vale",
      address: "406 Rivervale Road, River Vale, NJ 07675",
      startDate: new Date("2023-06-22T12:00:00-04:00"),
      endDate: new Date("2023-10-26T18:00:00-04:00"),
      dayOfWeek: "Thursdays",
      description:
        "Amish baked goods, pickles & olives, frozin pizzas, hand made soaps, bakery items, artisan breads, cheese, Italian specialties, frozen fresh pastas, sauces, frozen prepared fish and Maryland crab cakes, Polish delicacies, hormone-free and antibiotic free grass fed meats, and poultry. Free range eggs, Italian ices, ice cream, and much more!",
    },
  ]);

  await Vendor.deleteMany({});
  const vendors = await Vendor.create([
    {
      name: "Spoon Me Soups",
      description:
        "When it comes to creating exciting and delicious artisanal soups, Spoon Me Soups has perfected the art. We’re entirely self-taught. Everything we know about crafting chilled and frozen soup recipes comes from hard work, dedication, and passion in the kitchen. We have an undying love for borrowing from world cuisine to create something distinctly unique. Bergen County, NJ residents who want to taste a flair for the exotic love of our creations. We’re locally-owned and -operated. Our owner is the operator, chef, delivery driver, and the point person at farmer’s markets throughout Bergen County, NJ and the surrounding area.",
      markets: [
        markets[0]._id,
        markets[1]._id,
        markets[2]._id,
        markets[3]._id,
        markets[4]._id,
        markets[5]._id,
        markets[6]._id,
      ],
    },
    {
      name: "Valley Shepherd Creamery",
      description:
        "We are an old fashioned creamery Located on 120 rolling acres in Long Valley, Morris County, NJ, within an hour of New York City! We welcome you and your family to a unique farm experience in New Jersey. We have combined years of artisan cheesemaking expertise with modern equipment from around the world and age old European dairy farming practices to create Valley Shepherd Creamery. We take pride in being able to educate and involve the visitor in daily life of a real working sheep dairy while creating over fifty artisan dairy products.",
      markets: [
        markets[1]._id,
        markets[2]._id,
        markets[3]._id,
        markets[4]._id,
        markets[5]._id,
        markets[6]._id,
      ],
    },
    {
      name: "Hudson Bakery",
      description:
        "Combining centuries-old traditions with the passion of skilled artisans.",
      markets: [
        markets[0]._id,
        markets[1]._id,
        markets[2]._id,
        markets[3]._id,
        markets[4]._id,
        markets[5]._id,
        markets[6]._id,
      ],
    },
  ]);

  await Category.deleteMany({});
  const categories = await Category.create([
    { name: "Produce", sortOrder: 10 },
    { name: "Dairy", sortOrder: 20 },
    { name: "Baked Goods", sortOrder: 30 },
    { name: "Preserves and Jams", sortOrder: 40 },
    { name: "Crafts and Handmade Goods", sortOrder: 50 },
    { name: "Flowers and Plants", sortOrder: 60 },
    { name: "Specialty Foods", sortOrder: 70 },
    { name: "Snacks", sortOrder: 80 },
    { name: "Beverages", sortOrder: 90 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: "Blue Mug",
      description: "Blue and white coffee mug",
      vendor: vendors[0],
      category: categories[4],
      price: 5.95,
      reviews: [],
    },

    {
      name: "Red Mug",
      description: "Red and white coffee mug",
      vendor: vendors[1],
      category: categories[4],
      price: 5.95,
      reviews: [],
    },
    {
      name: "Green Mug",
      description: "Green and white coffee mug",
      vendor: vendors[2],
      category: categories[4],
      price: 5.95,
      reviews: [],
    },
  ]);

  console.log(items);

  process.exit();
})();
