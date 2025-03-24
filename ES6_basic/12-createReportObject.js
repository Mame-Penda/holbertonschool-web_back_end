export default function createReportObject(employeesList) {
return {
    allEmployees:{...employeesList},
    getNumberOfDepartements(employees) {
        return Object.keys(employees).length;
},
};
}