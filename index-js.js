document.getElementById("loan-form").addEventListener("submit", calcResults);

function calcResults(x) {

    var amount = document.getElementById("amount").value;
    var percent = document.getElementById("percent").value;
    var years = document.getElementById("years").value;
    var desiredAmount = document.getElementById("desiredAmount").value;

    var calcAmount = parseFloat(amount);
    var calcPercent = parseFloat(percent) / 100;
    var calcMonth = parseFloat(years) * 12;
    var calcDesiredAmount = parseFloat(desiredAmount);

    var totalPay = (1 + calcPercent) * calcAmount;
    var perMonth = totalPay / calcMonth;

    document.getElementById("monthlyPayment").innerHTML = "$" + perMonth;
    document.getElementById("totalPayment").innerHTML = "$" + totalPay;

    if (calcDesiredAmount > perMonth) {
        document.getElementById("calcDesiredAmount").innerHTML = "!סכום גבוה, תנסה להקטין את הקרן או תגדיל את התקופה";
    } else {
        document.getElementById("calcDesiredAmount").innerHTML = "!הסכום נמוך, הינך יכול לשלם אותו";
    }
    x.preventDefault();
}

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
// https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault