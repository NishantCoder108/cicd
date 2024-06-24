import express, { Response } from "express";

const app = express();

app.get("/", (req, res: Response) => {
    res.send({
        message: "One day will come , you will be very happy!",
    });
});

app.listen(3000, () => {
    console.log("App is listening on port 3000");
});
