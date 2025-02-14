var mongoose = require("mongoose");
var { siteSchema } = require("../../models/site");

// versi asli
// mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");

// versi gpt
const mongoURL = process.env.MONGO_URL || "mongodb://admin:password@localhost:27017/ecommerce";

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
const Site = mongoose.model("Site", siteSchema);

async function listSite(req, res, next) {
  res.json(await Site.find({}));
}

async function createSite(req, res, next) {
  const newSite = new Site(req.body);
  newSite.save();
  res.send(newSite);
}

async function updateSite(req, res, next) {
  await Site.findByIdAndUpdate(
    req.query.siteID,
    {
      name: req.body.name,
      description: req.body.description,
      keywords: req.body.keywords,
    },
    { new: true }
  );

  // console.table(req.body);
  res.send("Site Updated");
}

async function showSite(req, res, next) {
  res.json(await Site.findById(req.query.siteID));
}

async function deleteSite(req, res, next) {
  res.json(await Site.findByIdAndDelete(req.query.siteID));
}

module.exports = {
  listSite,
  createSite,
  updateSite,
  showSite,
  deleteSite,
};
