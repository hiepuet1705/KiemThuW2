const calculateBMI = (weight, height) => {
    if (weight < 40 || height < 1.5 || weight > 90 || height > 1.9) {
        return "Đầu vào không hợp lệ"
    }
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);
    if (bmi < 16.5) {
        return "Dưới Chuẩn"
    }
    else if (bmi <= 25) {
        return "Chuẩn"
    }
    else return "Béo"
}
console.log(calculateBMI(20, 1.8))
module.exports = calculateBMI