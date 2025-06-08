function calculateChaiIngredients(){
let numberOfCups = prompt("Karibu! How many cups of chai Bora would you like to make");
    if (isNaN(numberOfCups)|| numberOfCups <=0){
        alert("Please enter a valid Number greater than zero");
     return; }
const waterPerCup = 200;
const milkPerCup = 50;
const teaLeavesPerCup = 1;
const sugarPerCup = 2;

const totalWater = waterPerCup * numberOfCups;
const totalMilk = milkPerCup * numberOfCups;
const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
const totalSugar = sugarPerCup * numberOfCups;
console.log (`To make ${numberOfCups} cups of Kenyan Chai you will need :`);
console.log(`Water: ${totalWater} ml`);
console.log(`Milk: ${totalMilk} ml`);
console.log(`Tea leaves (Majani): ${totalTeaLeaves} tablespoons`);
console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
console.log('\n Enjoy your Chai Bora!')
} 
calculateChaiIngredients();