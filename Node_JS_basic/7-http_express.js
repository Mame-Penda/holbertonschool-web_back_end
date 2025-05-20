const express = require('express');
const countStudents = require('./3-read_file_async');
const fs = require('fs');


const app = express();
const port = 1245;
const database = process.argv[2];

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
    let response = 'This is the list of our students\n';

    try {
        const data = await fs.promises.readFile(database, 'utf-8');
        const lines = data.trim().split('\n').filter(line => line !== '');
        const students = lines.slice(1);

        response += `Number of students: ${students.length}\n`;
        const fields = {};

        students.forEach((line) => {
            const [firstname, , , field] = line.split(',');

            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstname);
        });
        for (const [field, names] of Object.entries(fields)) {
            response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }
        res.set('Content-Type', 'text/plain');
        res.send(response.trim());
    } catch (err) {
        res.status(500).send('Cannot load the database');
    }
});

app.listen(port);
module.exports = app;