/*eslint-disable*/
export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: employeesList,
    getNumberOfDepartements() {
      return Object.keys(employeesList).length;
    },
  };

  return reportObject;
}
