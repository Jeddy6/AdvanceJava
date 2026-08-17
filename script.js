let numbers = [];


function insertNumber() {

    let input = document.getElementById("numberInput");
    let number = Number(input.value);

    if (number <= 0 || input.value === "") {
        alert("Please enter a positive number.");
        return;
    }


    numbers.push(number);

    input.value = "";

    displayNumbers();
}


function displayNumbers() {

    let output = document.getElementById("numbers");

    output.innerHTML = "";

    for (let i = 0; i < numbers.length; i++) {

        let number = numbers[i];

        let type;

        if (number % 2 === 0) {
            type = "<span class='even'>EVEN</span>";
        } else {
            type = "<span class='odd'>ODD</span>";
        }

        output.innerHTML +=
            number + " " +
            type +
            " <button onclick='removeNumber(" + i + ")'>Remove</button>" +
            " <button onclick='editNumber(" + i + ")'>Edit</button>" +
            "<br>";
    }

    updateStats();
}


function removeNumber(index) {

    numbers.splice(index, 1);

    displayNumbers();
}


function editNumber(index) {

    let newNumber = prompt(
        "Enter a new positive number:",
        numbers[index]
    );

    if (newNumber === null) {
        return;
    }

    newNumber = Number(newNumber);

    if (newNumber <= 0 || isNaN(newNumber)) {
        alert("Please enter a positive number.");
        return;
    }

    numbers[index] = newNumber;

    displayNumbers();
}

function updateStats() {

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    document.getElementById("total").innerHTML = total;


    if (numbers.length > 0) {

        let highest = Math.max(...numbers);
        let lowest = Math.min(...numbers);

        document.getElementById("highest").innerHTML = highest;
        document.getElementById("lowest").innerHTML = lowest;

    } else {

        document.getElementById("highest").innerHTML = "-";
        document.getElementById("lowest").innerHTML = "-";
    }
}


function clearEntry() {

    document.getElementById("numberInput").value = "";
}


function clearItems() {

    numbers = [];

    displayNumbers();
}

function getTotal() {

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    alert("Total: " + total);
}

function findHighestLowest() {

    if (numbers.length === 0) {
        alert("No numbers inserted.");
        return;
    }

    let highest = Math.max(...numbers);
    let lowest = Math.min(...numbers);

    alert(
        "Highest: " + highest +
        "\nLowest: " + lowest
    );
}

function sortNumbers(order) {

    if (order === "asc") {

        numbers.sort(function(a, b) {
            return a - b;
        });

    } else if (order === "desc") {

        numbers.sort(function(a, b) {
            return b - a;
        });
    }

    displayNumbers();
}