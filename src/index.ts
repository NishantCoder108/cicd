import express, { Response } from "express";

const app = express();

app.get("/", (req, res: Response) => {
    res.send({
        message: "Bad boy",
    });
});

app.listen(3000, () => {
    console.log("App is listening on port 3000");
});
