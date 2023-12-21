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
      image:
        "https://www.boozyburbs.com/wp-content/uploads/2013/06/englewoodfarm.jpg",
    },
    {
      name: "Glen Rock",
      address: "1 Harding Plaza, Glen Rock, NJ 07452",
      startDate: new Date("2023-06-25T10:00:00-04:00"),
      endDate: new Date("2023-11-19T14:00:00-05:00"),
      dayOfWeek: "Sundays",
      description:
        "Local farmers, groovy artisans and the best picnic spot in town.",
      image:
        "https://www.boozyburbs.com/wp-content/uploads/2016/10/farmersmarket-free-32-768x512.jpg",
    },
    {
      name: "Oradell",
      address: "618 Veldran Avenue, Oradell, NJ 07649",
      startDate: new Date("2023-06-04T10:00:00-04:00"),
      endDate: new Date("2023-11-19T15:00:00-05:00"),
      dayOfWeek: "Sundays",
      description:
        "Vegetables, Fruits, Honey, Bread, Jelly, Peanuts, Cheese, Plants, Herbs, Flowers, Eggs, Pizza, Pasta, Mozzarella Cheese, Cookies, Pies, Quiches, a variety of Pickles, Olives, Sausages, Homemade Ice Creams and more.",
      image:
        "https://www.boozyburbs.com/wp-content/uploads/2013/06/oradell_farm.jpg",
    },
    {
      name: "Paramus",
      address: "475 North Fairview Avenue, Paramus, NJ 07652",
      startDate: new Date("2023-06-21T15:00:00-04:00"),
      endDate: new Date("2023-09-27T19:00:00-04:00"),
      dayOfWeek: "Wednesdays",
      description:
        "Bakery items and breads, homemade pasta & raviolis, pasta sauces, handmade mozzarella, homemade dry and pork Italian sausages and other Italian items, pickles & olives, jelly & jams, bean coffee, whole leaf tea, hand blended soda, several varieties of kielbasa, peiroghi, bratwurst and other Polish items, dog bakery items such as biscuits, cookies, and cakes.",
      image:
        "https://www.northjersey.com/gcdn/presto/2022/08/07/PNJM/e90126b0-9a14-4187-9b1b-5b62d1fdf918-20220807_FarmersMarket_006.JPG?crop=2199,1237,x0,y113&width=1600&height=800&format=pjpg&auto=webp",
    },
    {
      name: "Ramsey",
      address: "1 Erie Plaza, Ramsey, NJ 07446",
      startDate: new Date("2023-06-04T09:00:00-04:00"),
      endDate: new Date("2023-11-19T14:00:00-05:00"),
      dayOfWeek: "Sundays",
      description:
        "Artisan breads, cheeses, homemade pasta, gourmet nuts, coffee, teas, olive oils, spices, honey maple syrup, wine, fish pasture raised meat, free range eggs.",
      image:
        "https://static.citylifestyle.com/articles/ramsey-farmers-market/_E8A6564%20Edited-1600.jpg?v=1",
    },
    {
      name: "Ridgewood",
      address: "6 Garber Square, Ridgewood, NJ 07450",
      startDate: new Date("2023-06-25T09:00:00-04:00"),
      endDate: new Date("2023-10-22T15:00:00-04:00"),
      dayOfWeek: "Sundays",
      description: "Variety of fruits & vegetables.",
      image:
        "https://theridgewoodblog.net/wp-content/uploads/2013/10/RidgewoodFarmersMarket_theridgewoodblog.jpg",
    },
    {
      name: "River Vale",
      address: "406 Rivervale Road, River Vale, NJ 07675",
      startDate: new Date("2023-06-22T12:00:00-04:00"),
      endDate: new Date("2023-10-26T18:00:00-04:00"),
      dayOfWeek: "Thursdays",
      description:
        "Amish baked goods, pickles & olives, frozin pizzas, hand made soaps, bakery items, artisan breads, cheese, Italian specialties, frozen fresh pastas, sauces, frozen prepared fish and Maryland crab cakes, Polish delicacies, hormone-free and antibiotic free grass fed meats, and poultry. Free range eggs, Italian ices, ice cream, and much more!",
      image:
        "https://www.boozyburbs.com/wp-content/uploads/2015/05/river_vale_farmersmarket_34.jpg",
    },
  ]);

  await Vendor.deleteMany({});
  const vendors = await Vendor.create([
    {
      name: "Spoon Me Soups",
      description:
        "When it comes to creating exciting and delicious artisanal soups, Spoon Me Soups has perfected the art. We’re entirely self-taught. Everything we know about crafting chilled and frozen soup recipes comes from hard work, dedication, and passion in the kitchen. We have an undying love for borrowing from world cuisine to create something distinctly unique. Bergen County, NJ residents who want to taste a flair for the exotic love of our creations. We’re locally-owned and -operated. Our owner is the operator, chef, delivery driver, and the point person at farmer’s markets throughout Bergen County, NJ and the surrounding area.",
      markets: [markets[0]._id, markets[2]._id, markets[3]._id, markets[4]._id],
      image:
        "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/385902691_18306311596143922_6657854032883564485_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=CfXjDqkW0N0AX8Tq24f&_nc_oc=AQkg5DuDMRYgPp-SZRsZ8uHx-qHV0oLMwPnnkO4ah9jfzVyi316lcxeURQDr4EzDMNY&_nc_ht=scontent-lga3-1.xx&oh=00_AfBiQUbJ9lZx-gG8rQYRypsaSL9cG7yDHgOwwbE3GE87tQ&oe=658833C2",
    },
    {
      name: "Valley Shepherd Creamery",
      description:
        "We are an old fashioned creamery Located on 120 rolling acres in Long Valley, Morris County, NJ, within an hour of New York City! We welcome you and your family to a unique farm experience in New Jersey. We have combined years of artisan cheesemaking expertise with modern equipment from around the world and age old European dairy farming practices to create Valley Shepherd Creamery. We take pride in being able to educate and involve the visitor in daily life of a real working sheep dairy while creating over fifty artisan dairy products.",
      markets: [
        markets[0]._id,
        markets[1]._id,
        markets[4]._id,
        markets[5]._id,
        markets[6]._id,
      ],
      image:
        "https://1.bp.blogspot.com/-lDn2wR9hsw8/WSGF7sABiRI/AAAAAAAAjBQ/vfxyXoPTg004hCrZ65CZdQ4shcNdL1KNgCKgB/s1600/IMG_0389.JPG",
    },
    {
      name: "Hudson Bakery",
      description:
        "Combining centuries-old traditions with the passion of skilled artisans.",
      markets: [markets[2]._id, markets[4]._id, markets[6]._id],
      image:
        "https://www.snackandbakery.com/ext/galleries/hudson-bread--north-bergen--n-j-/full/VJP_47540019.jpg?t=1337618385&width=1080",
    },
    {
      name: "Orchards of Concklin",
      description:
        "The Orchards of Concklin have put a stamp on the Pomona region. The Pomona region is named after the goddess of fruit in honor of Nicholas Concklin, the founder of the farm.",
      markets: [markets[1]._id, markets[4]._id, markets[5]._id, markets[6]._id],
      image:
        "https://theorchardsofconcklin.com/wp-content/uploads/2022/06/theorchardsofconcklin.com-063022-2-1080x675.jpg",
    },
    {
      name: "Cactus Pete’s Beef Jerky",
      description:
        "Our business is a team between a husband and wife. We make all our own marinating sauce from scratch, no nitrates added.",
      markets: [
        markets[1]._id,
        markets[2]._id,
        markets[4]._id,
        markets[5]._id,
        markets[6]._id,
      ],
      image:
        "https://images.squarespace-cdn.com/content/v1/5c4a6bd5697a98e988e0d417/1559010048002-OTGCUXFQS90R0IG5JWEW/Cactus%2BPete%2527s.jpg?format=2500w",
    },
    {
      name: "Anthi's Greek Specialties",
      description:
        "Food Truck, Farmers Markets, Events and Catering Company based in Tarrytown NY at the Heart of the Hudson Valley and Westchester.",
      markets: [
        markets[0]._id,
        markets[1]._id,
        markets[2]._id,
        markets[3]._id,
        markets[4]._id,
        markets[5]._id,
        markets[6]._id,
      ],
      image:
        "https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/84156607_4013666671992080_3150235035601207296_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=be3454&_nc_ohc=DPkoyyaemIMAX_yTI6J&_nc_ht=scontent-lga3-1.xx&oh=00_AfAf20lY-0YSfO8N0y8o-_CqfIhalW8ktt4edstvoRVb1Q&oe=65AB0B71",
    },
    {
      name: "Knot of This World",
      description:
        "In the early 1950’s Joseph and Ray Ruffino were the first to introduce New York City (NYC) Soft Pretzels on Long Island. Through the years, their sons Ron and Ray carried on the tradition. As a five-year-old Ray’s father gave him a basket of pretzels and jelly apples to sell in front of his house and he sold them all. Pretzels have been Ray Ruffino’s passion ever since... and that’s Knot of this World.",
      markets: [markets[1]._id, markets[4]._id, markets[5]._id],
      image:
        "https://static.wixstatic.com/media/ac4141_2ea707ab1325466491e5851430270485~mv2.jpg/v1/fill/w_1500,h_954,al_c,q_85,enc_auto/ac4141_2ea707ab1325466491e5851430270485~mv2.jpg",
    },
    {
      name: "Norwich Meadows Farm",
      description:
        "Certified organic fruits and vegetables farm since 1998 from Upstate New York.",
      markets: [markets[3]._id, markets[4]._id, markets[5]._id, markets[6]._id],
      image:
        "https://static.wixstatic.com/media/ac4141_2ea707ab1325466491e5851430270485~mv2.jpg/v1/fill/w_1500,h_954,al_c,q_85,enc_auto/ac4141_2ea707ab1325466491e5851430270485~mv2.jpg",
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
      name: "Bone Broth",
      description:
        "A hearty smooth stock made from grass fed bones. Flavors vary depending on season.",
      vendor: vendors[0],
      category: categories[6],
      price: 10.0,
      reviews: [],
      image:
        "https://shop.spoonmesoup.com/wp-content/uploads/2020/08/Bone-Broth.jpg",
    },

    {
      name: "Caribbean Pumpkin",
      description: "A velvety pureed spiced pumpkin soup.",
      vendor: vendors[0],
      category: categories[6],
      price: 9.0,
      reviews: [],
      image:
        "https://shop.spoonmesoup.com/wp-content/uploads/2020/08/IMG_9559-scaled.jpg",
    },
    {
      name: "Chicken and Rice",
      description:
        "A chicken stock loaded with brown and wild rice, chicken and fresh vegetables.",
      vendor: vendors[0],
      category: categories[6],
      price: 9.0,
      reviews: [],
      image:
        "https://shop.spoonmesoup.com/wp-content/uploads/2020/08/Chicken-and-Rice.jpg",
    },
    {
      name: "Curried Red Lentil",
      description: "Slightly spicy red lentil soup.",
      vendor: vendors[0],
      category: categories[6],
      price: 9.0,
      reviews: [],
      image:
        "https://shop.spoonmesoup.com/wp-content/uploads/2020/08/Curried-Red-Lentil.jpg",
    },
    {
      name: "Maharagwe",
      description: "A coconut milk based spicy kidney bean soup.",
      vendor: vendors[0],
      category: categories[6],
      price: 9.0,
      reviews: [],
      image:
        "https://shop.spoonmesoup.com/wp-content/uploads/2020/08/304FC2BF-DADE-4097-B562-7E76775BF74D-scaled.jpeg",
    },
    {
      name: "Split Pea",
      description: "A vegan and gluten free classic.",
      vendor: vendors[0],
      category: categories[6],
      price: 8.0,
      reviews: [],
      image:
        "https://shop.spoonmesoup.com/wp-content/uploads/2020/08/Split-Pea1.jpg",
    },
    {
      name: "Crema De Blue",
      description: "1lb Blue Cheese.",
      vendor: vendors[1],
      category: categories[1],
      price: 24.0,
      reviews: [],
      image:
        "https://valleyshepherd.myshopify.com/cdn/shop/products/cremadeblue.jpg?v=1668824949&width=1206",
    },
    {
      name: "Tartufo Shepherd",
      description: "1lb Black Tuscan Truffle Cheese.",
      vendor: vendors[1],
      category: categories[1],
      price: 29.0,
      reviews: [],
      image:
        "https://valleyshepherd.myshopify.com/cdn/shop/products/tartufoshepherd.jpg?v=1678658273&width=1206",
    },
    {
      name: "Carameaway",
      description: "1lb Gouda Style Cheese.",
      vendor: vendors[1],
      category: categories[1],
      price: 23.0,
      reviews: [],
      image:
        "https://valleyshepherd.myshopify.com/cdn/shop/products/carameaway.jpg?v=1668007708&width=1206",
    },
    {
      name: "Baguette Ciabatta",
      description:
        "Rustic Italian Bread made with a yeast starter (poolish) and olive oil. A traditional slipper bread, full crust with a porous interior. Ciabatta can be used for sandwiches, accompaniment to soups salads and made into toast for appetizers.",
      vendor: vendors[2],
      category: categories[2],
      price: 3.87,
      reviews: [],
      image:
        "https://store.hudsonbread.com/cdn/shop/products/20101-Baguette-Ciabatta-A_1080x.jpg?v=1590150757",
    },
    {
      name: "Baguette French",
      description:
        "Authentic French Baguette is a traditional long thin loaf, distinguished by its length and crisp thin crust. A lean dough (no additions of oils or fats) best eaten fresh, within a 24 hour from the oven. Baguette is easily affected by temperature and humidity.",
      vendor: vendors[2],
      category: categories[2],
      price: 3.56,
      reviews: [],
      image:
        "https://store.hudsonbread.com/cdn/shop/products/90101-Baguette-French-A_1080x.jpg?v=1590150962",
    },
    {
      name: "Apple Pie",
      description: "Small Apple Pie.",
      vendor: vendors[3],
      category: categories[2],
      price: 6.5,
      reviews: [],
      image:
        "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Teriyaki Beef Jerkey",
      description: "Mild Teriyaki Beef Jerkey.",
      vendor: vendors[4],
      category: categories[6],
      price: 9.0,
      reviews: [],
      image:
        "https://shop.spoonmesoup.com/wp-content/uploads/2020/08/304FC2BF-DADE-4097-B562-7E76775BF74D-scaled.jpeg",
    },
    {
      name: "Hummus Veggie Wrap",
      description: "Specialty Greek Wrap.",
      vendor: vendors[5],
      category: categories[6],
      price: 7.0,
      reviews: [],
      image:
        "https://littlesunnykitchen.com/wp-content/uploads/Hummus-Veggie-Wrap-11.jpg",
    },
    {
      name: "Small New York Pretzel",
      description: "7oz Pretzel.",
      vendor: vendors[6],
      category: categories[2],
      price: 2.0,
      reviews: [],
      image:
        "https://static.wixstatic.com/media/ac4141_f5baca9225b9400a88b8bf937db9ce2d~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ac4141_f5baca9225b9400a88b8bf937db9ce2d~mv2.jpg",
    },
    {
      name: "Medium New York Pretzel",
      description: "12oz Pretzel.",
      vendor: vendors[6],
      category: categories[2],
      price: 5.0,
      reviews: [],
      image:
        "https://static.wixstatic.com/media/ac4141_1aaebff2c30648f6b6e2bcb5df2646e4~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ac4141_1aaebff2c30648f6b6e2bcb5df2646e4~mv2.jpg",
    },
    {
      name: "Purple Napa Kimchi",
      description:
        "A limited edition collaboration between Chef Danny Bowien and Norwich Meadows Farm! Preorder today for pickup at our stand in Union Square’s Farmers Market.",
      vendor: vendors[7],
      category: categories[6],
      price: 16.0,
      reviews: [],
      image:
        "https://images.squarespace-cdn.com/content/v1/5e81081b06fbf51b7f893e7f/1690719564638-N195SKP89IWPR19X23NT/Kimchi+Front.jpeg?format=2500w",
    },
  ]);

  console.log(items);

  process.exit();
})();
