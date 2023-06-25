const foodData = require('./food.json');
//List all food items
console.log("All Food Items:");
function listAllFoodItems(data) {
    return data.map((food) => food.foodname);
}
console.log(listAllFoodItems(foodData));


function listFoodItemsByCategory(data, category) {
    return data.filter((food) => food.category === category).map((food) => food.foodname);
}

console.log("Food Items with Category Vegetable  are " + listFoodItemsByCategory(foodData, "Vegetable"));
console.log("Food Items with Category fruits  are " + listFoodItemsByCategory(foodData, "Fruit"));
console.log("Food Items with Category protien  are " + listFoodItemsByCategory(foodData, "Protein"));
console.log("Food Items with Category Grain  are " + listFoodItemsByCategory(foodData, "Grain"));
console.log("Food Items with Category Nuts  are " + listFoodItemsByCategory(foodData, "Nuts"));
console.log("Food Items with Category Dairy  are " + listFoodItemsByCategory(foodData, "Dairy"));

// List food items with calories above a certain threshold
function listFoodItemsAboveCalorie(data, threshold) {
    return data.filter((food) => food.calorie > threshold).map((food) => food.foodname);
}
console.log("Food Items with Calories Above 100: " + listFoodItemsAboveCalorie(foodData, 100));


// List food items with calories below a certain threshold
function listFoodItemsBelowCalorie(data, threshold) {
    return data.filter((food) => food.calorie < threshold).map((food) => food.foodname);
}
console.log("Food Items with Calories Below 100: " + listFoodItemsBelowCalorie(foodData, 100));

// List food items sorted by protein content (highest to lowest)
function listFoodItemsByProtein(data) {
    return data.sort((a, b) => b.protein - a.protein).map((food) => food.foodname);
}
console.log("Food Items Sorted by Protein Content (Highest to Lowest): " + listFoodItemsByProtein(foodData));


// List food items sorted by carbohydrate content (lowest to highest)
function listFoodItemsByCarbs(data) {
    return data.sort((a, b) => a.carbs - b.carbs).map((food) => food.foodname);
}

console.log("Food Items Sorted by Carbohydrate Content (Lowest to highest): " + listFoodItemsByCarbs(foodData))







