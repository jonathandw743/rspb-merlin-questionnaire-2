const express = require("express");
const { readFile } = require("fs").promises;
const fs = require("fs");

const PORT = 3001;
const app = express();

app.use((request, response, next) => {
    console.log(`[${Date.now()}] ${request.method} ${request.url}`);
    next();
});

const cors = require("cors");
app.use(cors());

app.use(express.json({
    limit: '1mb'
}));

app.get("/get-data", async (req, res) => {
	res.json(JSON.parse(await readFile("./data.json", "utf8")));
});

app.post("/post-data", (req, res) => {
    fs.writeFile("./posted-data.json", JSON.stringify(req.body), {
        encoding: 'utf8'
    }, (err) => {
        console.log(err);
    });
    res.end();
});

app.get("/test", (request, response) => {
	response.json({ ok: true });
});

app.get("/greet/:name", (request, response) => {
	response.json({ greeting: `Hello ${request.params.name}.` });
});

app.listen(PORT, () => {
	console.log(`server is now listening on port ${PORT}`);
});
