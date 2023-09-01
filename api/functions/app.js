// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = express.Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/api/", router);

module.exports.handler = serverless(api);
