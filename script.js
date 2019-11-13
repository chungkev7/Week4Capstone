var shoppingList = ["Apple", "Banana", "Orange", "Potato", "Milk", "Eggs"];
var shoppingPrice = [0.25, 0.33, 0.35, 1.25, 2.25, 1.99];
var itemCount = [0, 0, 0, 0, 0, 0];

function addApples() {
	itemCount[0] +=1;
	document.getElementById("items").innerHTML += shoppingList[0] + "<br>";
	document.getElementById("cost").innerHTML += shoppingPrice[0] + "<br>";
}

function addBananas() {
	itemCount[1] +=1;
	document.getElementById("items").innerHTML += shoppingList[1] + "<br>";
	document.getElementById("cost").innerHTML += shoppingPrice[1] + "<br>";
}

function addOranges() {
	itemCount[2] +=1;
	document.getElementById("items").innerHTML += shoppingList[2] + "<br>";
	document.getElementById("cost").innerHTML += shoppingPrice[2] + "<br>";
}

function addPotato() {
	itemCount[3] +=1;
	document.getElementById("items").innerHTML += shoppingList[3] + "<br>";
	document.getElementById("cost").innerHTML += shoppingPrice[3] + "<br>";
}

function addMilk() {
	itemCount[4] +=1;
	document.getElementById("items").innerHTML += shoppingList[4] + "<br>";
	document.getElementById("cost").innerHTML += shoppingPrice[4] + "<br>";
}

function addEggs() {
	itemCount[5] +=1;
	document.getElementById("items").innerHTML += shoppingList[5] + "<br>";
	document.getElementById("cost").innerHTML += shoppingPrice[5] + "<br>";
}

var printList="";
var totalCost = 0;
function checkOut() {

	for (i=0; i<shoppingList.length; i++) {
		totalCost += shoppingPrice[i]* itemCount[i];
	}

	document.getElementById("total").innerHTML = "Total: $" + totalCost.toFixed(2);

	document.getElementById("tax").innerHTML = "Sales tax (6%): $" + (totalCost * .06).toFixed(2);

	document.getElementById("grandTotal").innerHTML = "Grand total: $" + (totalCost * 1.06).toFixed(2);

}
