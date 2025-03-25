export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: employeesList,
    getNumberOfDepartements(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return reportObject;
}
