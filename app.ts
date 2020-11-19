import express, { Application, Request, Response } from "express";

const app: Application = express();

const port: Number = 5000 || process.env.PORT;

app.get("/", (request: Request, response: Response) => {
  response.json({ msg: "Welcome to att bot" }).status(200);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
