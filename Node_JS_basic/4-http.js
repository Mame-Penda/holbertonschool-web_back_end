const http = require('http');

const port = 1245;

const app = http.createServer((req, res) => {
    res.setHeader(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Hello Holberton School!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
