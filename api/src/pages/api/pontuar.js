import {
  getDateInBelem,
  getTimeInBelem,
} from "@/controller/funcao_get_datatimes";
import DatabaseConnection from "./../../model/models";
require("dotenv").config();

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
    // args url
    // ia -> id_animal
    // io -> id_ong
    // n -> nome
    // t -> telefone
    // p -> pontos
    // x -> data
    // y -> horario
    const { ia, io, n, t, p, pass } = req.query;
    await db.connect();
    if (ia && n && t && p && io && pass == process.env.PASS) {
      let x = getDateInBelem();
      let y = getTimeInBelem();
      await db.query(
        `INSERT INTO tabela_formulario ( id_animal, nome, telefone, pontos,data,horario,id_ong) VALUES ( ${ia}, "${n}", "${t}", ${p},"${x}","${y}",${io})`
      );
      res.status(200).json({ data: true });
    } else {
      res.status(500).json({ data: "error" });
    }
  } catch (error) {
    console.error("Error executing SQL query:", error.message);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await db.close();
  }
}
