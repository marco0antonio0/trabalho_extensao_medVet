import DatabaseConnection from "./../../model/models";
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  const db = new DatabaseConnection();
  try {
    await db.connect();
    const { id } = req.query;
    const results = await db.query("SELECT * FROM tabela_ong WHERE id =" + id);
    res.status(200).json({ data: results });
  } catch (error) {
    console.error("Error executing SQL query:", error.message);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await db.close();
  }
}
