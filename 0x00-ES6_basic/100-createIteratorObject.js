export default function createIteratorObject(report) {
  const data = [];
  for (const id of Object.values(report.allEmployees)) {
    data.push(...id);
  }
  return data;
}
