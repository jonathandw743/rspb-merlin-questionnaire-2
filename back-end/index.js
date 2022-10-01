const express = require('express');
const PORT = 3001;
const app = express();

// function logger(request, response, next) {
//     console.log(`[${Date.now()}] ${request.method} ${request.url}`);
//     next();
// }

// app.use(logger);
const cors = require("cors");
app.use(cors());

app.get('/test', (request, response) => {
    response.json({ok: true});
});

app.get('/greet/:name', (request, response) => {
    response.json({greeting: `Hello ${request.params.name}.`});
});

app.listen(PORT, () => {
    console.log(`server is now listening on port ${PORT}`);
});