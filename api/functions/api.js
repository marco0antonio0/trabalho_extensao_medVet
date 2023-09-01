// minha-api-express/functions/api.js

import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello, World!"));

api.use("/.netlify/functions/api", router);

export const handler = serverless(api);
