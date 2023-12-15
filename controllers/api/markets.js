const Market = require("../../models/market");

async function index(req, res) {
  const markets = await Market.find({}).sort("name");
  res.json(markets);
}

async function show(req, res) {
  const market = await Market.findById(req.params.id);
  res.json(market);
}

module.exports = {
  index,
  show,
};
