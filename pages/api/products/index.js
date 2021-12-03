import nc from "next-connect";
import Product from "../../../models/Product";
import db from "../../../utilities/db";
const handler = nc();

handler.get(async (req, res) => {
  await db.connect;
  const products = await Product.find({});
  db.disconnect();
  res.send(products);
});

export default handler;
