const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('result');
    if (height <= 0 || isNaN(height)) {
        result.innerHTML = `Enter the Valid Height  ${height}`;
        return;
    }
    else if (weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Enter the Valid weight  ${weight}`;
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    let category = "";
    if (bmi < 18.6) category = "Underweight";
    else if (bmi >= 18.6 && bmi <= 24.9) category = "Normal weight";
    else category = "Overweight";

    result.innerHTML = `Your BMI is <b>${bmi}</b> (${category})`;
})