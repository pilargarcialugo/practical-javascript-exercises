function calculateSquarePerimeter() {
    const sizeInput = document.getElementById("squareSize");
    const perimeter = sizeInput.value * 4;
    alert("Perimeter = " + perimeter) 
    return perimeter;
}

function calculateSquareArea() {
    const sizeInput = document.getElementById("squareSize");
    const area = sizeInput.value * sizeInput.value;
    alert("Area = " + area); 
    return area;
}

function calculateTrianglePerimeter(base, side1, side2) {
    return base + side1 + side2;
}

function calculateTriangleArea(base, height) {
    return (base * height) / 2
}

function calculateCircleDiameter(radio) {
    return radio * 2;
}

function calculateCirclePerimeter(radio) {
    return calculateCircleDiameter(radio) * Math.PI;
}

function calculateCircleArea(radio) {
    return (radio * radio) * Math.PI;
}

function checkIsoscelesTriangleHeight() {
    const sidea = document.getElementById("sidea").value;
    const sideb = document.getElementById("sideb").value;
    if (sidea === sideb) {
        const height = calculateIsoscelesTriangleHeight(
            document.getElementById("base").value, sidea);
        alert("Heigth = " + height);
    } else {
        alert("The values entered do not correspond to an isosceles triangle");
    }
}

function calculateIsoscelesTriangleHeight(base, sidea) {
    return Math.sqrt(Math.pow(sidea, 2) - (Math.pow(base, 2) / 4));
}
