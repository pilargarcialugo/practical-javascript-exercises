const coupons = [
    {
        name: "LUNESLOCOS",
        discount: 10
    },
    {
        name: "VIERNESFELICES",
        discount: 30
    },
    {
        name: "MIERCOLESRANDOM",
        discount: 15
    }
];

function calculatePriceWitDiscount(price, discount) {
    return (price * (100 - discount)) / 100;
}

function printResult(result) {
    const priceWithDiscountP = document.getElementById("priceWithDiscount");
    priceWithDiscountP.innerText = "Precio con descuento $" + result;
}

function onClickPrintPriceWithDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");
    
    const discountResult = calculatePriceWitDiscount(inputPrice.value, inputDiscount.value);
    printResult(discountResult);
}

function checkCouponValue(couponValue) {
    const isAValidCoupon = function(coupon) {
        return coupon.name === couponValue;
    }
    const existCoupon = coupons.find(isAValidCoupon);

    if (!existCoupon) {
        alert("Cupón " + couponValue + " inválido");
    } else {
        return existCoupon.discount;
    }
}

function onClickPrintPriceWithCoupon() {
    const inputPrice = document.getElementById("inputPrice");
    const inputCoupon = document.getElementById("inputCoupon");
    const discountValue = checkCouponValue(inputCoupon.value);
    
    const couponResult = calculatePriceWitDiscount(inputPrice.value, discountValue);
    printResult(couponResult);
}