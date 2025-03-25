/*eslint-disable*/
export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: {...employeesList},
    getNumberOfDepartements() {
      return Object.keys(this.employeesList).length;
    },
  };

  return reportObject;
}
