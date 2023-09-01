import DatabaseConnection from "./../../model/models";
export default async function handler(req, res) {
  const db = new DatabaseConnection();
  try {
    await db.connect();
    const results = await db.query("SELECT * FROM animais");
    res.status(200).json({ data: results });
  } catch (error) {
    console.error("Error executing SQL query:", error.message);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await db.close();
  }
}
