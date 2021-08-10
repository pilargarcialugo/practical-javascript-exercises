function calculateSquarePerimeter(size) {
    return size * 4;
}

function calculateSquareArea(size) {
    return size * size;
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