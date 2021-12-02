// import db from "../../utilities/db";

export default async function handler(req, res) {
  // await db.connect();
  // await db.disconnect();
  res.status(200).json("hello from the database");
}
