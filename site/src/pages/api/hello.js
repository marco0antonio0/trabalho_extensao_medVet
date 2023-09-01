// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const DatabaseConnection = require("./model.js"); // Importe a classe de conexão com o banco de dados

export default function handler(req, res) {
  const dbConnection = new DatabaseConnection();

  res.status(200).json({ logs: "hello" });
}
