import express, { Application, Request, Response } from "express";
import puppeteer from "puppeteer";

const app: Application = express();

const port: Number = 5000 || process.env.PORT;

app.get("/", (request: Request, response: Response) => {
  response.json({ msg: "Welcome to att bot" }).status(200);
});

app.get("/att", async (request: Request, response: Response) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://att.lmu.edu.ng/log/login");
    await page.screenshot({ path: "att-login.png" });

    browser.close();
  } catch (error) {
    return response.json(error);
  }
  return response.send("Done");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
