import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Express");
});

app.listen(8000, () => {
    console.log("Listen on port 8000.");
});