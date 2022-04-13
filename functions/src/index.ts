import express from "express";
import cors from "cors";
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

const app = express();
app.use(cors({ origin: true }));

app.get("/hello", (req: any, res: any) => {
  return res.status(200).send("Hello I am simple function!");
});

export const api = functions.https.onRequest(app);
