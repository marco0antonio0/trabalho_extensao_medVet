export default function handler(req, res) {
  const dbConnection = new DatabaseConnection();

  res.status(200).json({ logs: "hello" });
}
