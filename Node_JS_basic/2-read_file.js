const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length === 0) {
            console.log('Number of students: 0');
            return;
        }

        const students = lines.slice(1);
        const fields = {};

        students.forEach((line) => {
            const [firstname, , , field] = line.split(',');
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstname);
        });

        console.log(`Number of students: ${students.length}`);
        Object.entries(fields).forEach(([field, names]) => {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        });
    } catch (err) {
        throw new Error('Cannot load the database');
}
};

module.exports = countStudents;
