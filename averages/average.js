const salaries = [100, 200, 300, 400, 500];

function calculateAverage(list) {
    const sum = list.reduce((a, b) => a + b);
    return sum / list.length;
}
