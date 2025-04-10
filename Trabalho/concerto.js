
var carTypes = ['Fusca Azul', 'Hot Wheels', 'McQueen'];
var issueTypes = ['Troca de Óleo', 'Troca de Freios', 'Problema no Motor'];
var repairCosts = [
    [50, 80, 120],    // Troca de Óleo
    [100, 150, 200],   // Troca de Freios
    [200, 300, 400]    // Problema no Motor
];


const TAX_RATE = 0.1;

function calculateCost() {
   
    var carTypeIndex = document.getElementById('carType').selectedIndex;
    var issueTypeIndex = document.getElementById('issueType').selectedIndex;

    var cost = repairCosts[issueTypeIndex][carTypeIndex];

   
    if (isNaN(cost)) {
        alert('Por favor, selecione um tipo de carro e um tipo de problema.');
        return;
    }

    
    var finalCost = cost + cost * TAX_RATE;

    
    displayResult(finalCost.toFixed(2));
}

function displayResult(cost) {
    document.getElementById('result').innerText = 'Custo estimado: $' + cost;
}