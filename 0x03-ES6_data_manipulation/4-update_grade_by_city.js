export default function updateStudentGradeByCity(
  students,
  location,
  // eslint-disable-next-line comma-dangle
  newGrades
) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) return [];

  const result = students.filter((student) => student.location === location);

  const st = result.map((res) => {
    const thing = newGrades.find((grade) => grade.studentId === res.id);
    return { ...res, grade: thing ? thing.grade : 'N/A' };
  });

  return st;
}
