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


