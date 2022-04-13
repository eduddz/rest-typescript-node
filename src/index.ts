import express, { NextFunction, Request, Response } from "express";

const app = express();
const port = 5000;

app.get("/status", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ message: "deu certoooooooo!" });
})

app.listen(port, () => {
    console.log("Server running on port " + port + " 🔥🔥🔥🔥🔥")
})