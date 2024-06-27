import express, { Response } from "express";

const app = express();

app.get("/", (req, res: Response) => {
    res.send({
        message: "Thank you god!",
        user: {
            name: "Nishant",
            profession: "Full stack developer",
        },
    });
});

app.listen(3000, () => {
    console.log("App is listening on port 3000");
});
