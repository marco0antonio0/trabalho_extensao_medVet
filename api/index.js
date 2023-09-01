const express = require("express");
const DatabaseConnection = require("./model.js"); // Importe a classe de conexão com o banco de dados
const cors = require("cors"); // Importe o pacote cors

const app = express();
app.use(cors());
const dbConnection = new DatabaseConnection();
//=====================================================================
// rota de consulta todos os dados
app.get("/api/consuta-dados", async (req, res) => {
  try {
    const connection = await dbConnection.connect();
    const query = "SELECT * FROM animais";
    const [rows, fields] = await connection.execute(query);
    // await dbConnection.close();

    res.json({ data: rows });
  } catch (error) {
    console.error("Error executing SQL query:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Inicie o servidor na porta 3000
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
