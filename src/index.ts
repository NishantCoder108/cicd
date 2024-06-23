import express, { Response } from "express";

const app = express();

app.get("/", (req, res: Response) => {
    res.send({
        message: "Hello World",
        userInfo: {
            name: "Nishant",
            age: 25,
            address: {
                city: "Mumbai",
                state: "Maharashtra",
            },
            hobbies: "Programming, Coding",
        },
    });
});

app.listen(3000, () => {
    console.log("App is listening on port 3000");
});
