const employees = [
    { name: "John", department: "IT", salary: 75000 },
    { name: "Jane", department: "Marketing", salary: 60000 },
    { name: "Bob", department: "IT", salary: 55000 },
    { name: "Alice", department: "HR", salary: 65000 },
    { name: "Charlie", department: "IT", salary: 60000 }
];

// filter employees according to department = IT
const ITEmployees = employees.filter(employee => employee.department === "IT");
console.log(ITEmployees);

// filter employees who earn a salary < 65000
const lowSalaryEmployees = employees.filter(employee => employee.salary < 65000);
console.log(lowSalaryEmployees);


const hospitals = [
    { name: "KP Hospital", location: "Pune", beds: 250, available: "Yes" },
    { name: "APOLLO Hospital", location: "Mumbai", beds: 150, available: "No" },
    { name: "RELIANCE Hospital", location: "Pune", beds: 300, available: "Yes" },
    { name: "KMT Hospital", location: "Delhi", beds: 100, available: "Yes" },
    { name: "JMT Hospital", location: "Pune", beds: 200, available: "No" },
];

// filter hospitals according to number of beds > 200
const largeHospitals = hospitals.filter(hospital => hospital.beds > 200);
console.log(largeHospitals);

// filter hospitals according to availability of beds = Yes
const availableHospitals = hospitals.filter(hospital => hospital.available === "Yes");
console.log(availableHospitals);

// filter hospitals according to location = Pune
const PuneHospitals = hospitals.filter(hospital => hospital.location === "Pune");
console.log(PuneHospitals);
