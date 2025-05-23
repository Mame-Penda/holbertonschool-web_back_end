import readDatabase from "../utils";

class StudentsController {
    static getAllStudents(req, res) {
        const filePath = process.argv[2];
        readDatabase(filePath)
        .then((data) => {
            const lines = ['This is the list of our students'];
            const sortedFields = Object.keys(data).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
            sortedFields.forEach((field) =>{
                lines.push(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`);
            });
            res.status(200).send(lines.join('\n'));
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
    }
    static getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        const filePath = process.argv[2];
        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }
        readDatabase(filePath)
        .then((data) => {
            const students = data[major];
            res.status(200).send(`List: ${students.join(', ')}`);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
    }
}

export default StudentsController;
