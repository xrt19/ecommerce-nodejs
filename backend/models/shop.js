var mongoose = require("mongoose");
const { Schema } = mongoose;

const shopSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    phone: { type: String },
    email: { type: String },
    description: { type: String },
    link: {
      website: { type: String },
      facebook: { type: String },
      twitter: { type: String },
      linkedin: { type: String },
      pinterest: { type: String },
    },
    address: {
      country: { type: String },
      province: { type: String },
      city: { type: String },
      postCode: { type: String },
      street: { type: String },
    },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = {
  shopSchema,
};
