import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            reject(new Error('Cannot load the database'));
        } else {
            const lines = data.trim().split('\n');
            const students = {};
            const fields = lines[0].split(',');
            const fieldIndex = fields.indexOf('field');
            const nameIndex = fields.indexOf('firstname');

            lines.slice(1).forEach((line) => {
                const parts = line.split(',');
                const field = parts[fieldIndex];
                const name = parts[nameIndex];

                if (!students[field]) students[field] = [];
                students[field].push(name);
            });
            
            resolve(students);
        }
    });
});

export default readDatabase;
