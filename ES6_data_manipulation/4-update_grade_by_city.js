export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((students) => students.location === city)
    .map((student) => {
      const newGrade = newGrades.find((grades) => grades.studentId === student.id)[0];
      const grade = !newGrade ? newGrade.grade : 'N/A';
      return { ...student, grade };
    });
}
