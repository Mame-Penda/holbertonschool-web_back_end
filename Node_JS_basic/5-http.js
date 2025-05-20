const http = require('http');
const countStudents = require('./3-read_file_async');
const fs = require('fs');

const args = process.argv;
const databaseFile = args[2];

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        countStudents(databaseFile)
        .then(() => {
        })
        .catch((err) => {
            res.write(err.message);
        })
        .finally(() => {
            res.end();
        });
    }
});

app.listen(1245);

module.exports = app;