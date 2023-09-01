// Importe a biblioteca cors
const cors = require("cors");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const DatabaseConnection = require("./../models/model"); // Importe a classe de conexão com o banco de dados

// Crie uma instância do middleware CORS
const corsMiddleware = cors({
  origin: "*", // Troque "*" pelo domínio que deseja permitir o acesso (ou deixe "*" para permitir de qualquer origem)
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Métodos HTTP permitidos
  preflightContinue: false,
  optionsSuccessStatus: 204,
});

export default async function handler(req, res) {
  try {
    // Use o middleware CORS antes de qualquer manipulação de requisição
    corsMiddleware(req, res, async () => {
      const dbConnection = new DatabaseConnection();
      const connection = await dbConnection.connect(); // Aguarde a conexão ser estabelecida
      const query = "SELECT * FROM animais";
      const [rows, fields] = await connection.query(query); // Use query() em vez de execute()
      // await dbConnection.close();

      res.json({ data: rows });
    });
  } catch (error) {
    console.error("Error executing SQL query:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}
