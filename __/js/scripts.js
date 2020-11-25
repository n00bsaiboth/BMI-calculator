"use strict";

function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (weight > 0 && height > 0) {
        let bmi = weight / (height / 100 * height / 100);

        bmi = parseFloat(bmi).toFixed(2);
        
        document.getElementById("result").innerHTML = `Your body mass index (BMI) is: ${bmi}.`;

        if (bmi < 18.5) {
            document.getElementById("info").innerHTML = "You are too thin.";
        }
        else if (bmi > 18.5 && bmi < 25){
            document.getElementById("info").innerHTML = "That means, that you are healthy."
        }
        else {
            document.getElementById("info").innerHTML = "Sadly, you have some overweight."
        }
        
    } else {
        document.getElementById("result").innerHTML = `Oops, something went wrong. `;
    }
}