1. Write a JavaScript program to get an array from the user and return the:
a) Sum of all elements in the array using reduce()
b) Average of all elements in the array using reduce()

// Using reduce() to get the sum of all elements in the array
const array = [ 1, 2, 3, 4, 5 ];
const sum = array.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

// Using reduce() to get the average of all elements in the array
const average = array.reduce((acc, curr) => acc + curr, 0) / array.length;
console.log(average); 

2. Write a JavaScript program to
a) Calculate grades on basis of marks
>90 = A
>80 = B
>70 = C
>60 = D
>50 = E
else = F
b) Map the grades of each student
c) Group students according to the grades they have received and display.

let students = [
    { name: "John", marks: 92 },
    { name: "Oliver", marks: 85 },
    { name: "Michael", marks: 79 },
    { name: "Dwight", marks: 95},
    { name: "Oscar", marks: 64 },
    { name: "Kevin", marks: 48 },
];

// Calculating grades on the basis of marks
const calculateGrades = (marks) => {
    if (marks > 90) return "A";
    if (marks > 80) return "B";
    if (marks > 70) return "C";
    if (marks > 60) return "D";
    if (marks > 50) return "E";
    return "F";
}

// Mapping the grades of each student
const studentGrades = students.map(student => {
    return {
        name: student.name,
        grade: calculateGrades(student.marks)
    }
});

// Grouping students according to the grades they have received
const groupByGrade = studentGrades.reduce((acc, curr) => {
    if (!acc[curr.grade]) {
        acc[curr.grade] = [curr];
    } else {
        acc[curr.grade].push(curr);
    }
    return acc;
}, {});
console.log(groupByGrade);

