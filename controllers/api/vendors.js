const Vendor = require("../../models/vendor");

async function index(req, res) {
  const vendors = await Vendor.find({}).sort("name");
  res.json(vendors);
}

async function show(req, res) {
  const vendor = await Vendor.findById(req.params.id);
  res.json(vendor);
}

module.exports = {
  index,
  show,
};
