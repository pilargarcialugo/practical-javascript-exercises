const colEmployees = [];

colEmployees.push({name: "Juana", salary: 500});
colEmployees.push({name: "Juan", salary: 1500});
colEmployees.push({name: "Mateo", salary: 700});
colEmployees.push({name: "Matea", salary: 200});
colEmployees.push({name: "Luz", salary: 2500});
colEmployees.push({name: "Sol", salary: 1000});
colEmployees.push({name: "Luna", salary: 100});
colEmployees.push({name: "Jaime", salary: 450});
colEmployees.push({name: "Carl", salary: 900});
colEmployees.push({name: "Eli", salary: 2000});

function isEven(number) {
    return number % 2 === 0;
}

function calculateAverage(list) {
    const sum = list.reduce((a, b) => a + b);
    return sum / list.length;
}

function salariesMedian(salaries) {
    const halfList = parseInt(salaries.length / 2);

    if (isEven(salaries.length)) {
        const halfEmployee1 = salaries[halfList];
        const halfEmployee2 = salaries[halfList - 1]
        const salariesAverage = calculateAverage([halfEmployee1, halfEmployee2]);
        return salariesAverage;
    } else {
        const halfEmployee = salaries[halfList];
        return halfEmployee;
    }
}

const colSalaries = colEmployees.map(e => e.salary);
const sortedColSalaries = colSalaries.sort((a, b) => a - b); // ordena de menor a mayor

const spliceStart = (sortedColSalaries.length * 90) / 100;
const spliceCount = sortedColSalaries.length - spliceStart;
const top10ColSalaries = sortedColSalaries.splice(spliceStart, spliceCount);

const generalMedianCol = salariesMedian(sortedColSalaries);
const top10MedianCol = salariesMedian(top10ColSalaries);

console.log({
    generalMedianCol,
    top10MedianCol
});