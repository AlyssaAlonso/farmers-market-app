require("dotenv").config();
require("./config/database");

const Market = require("./models/market");

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
})();
