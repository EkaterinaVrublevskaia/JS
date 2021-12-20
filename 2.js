/**2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть *сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от *находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
*a) Организовать такой массив для хранения товаров в корзине;
*b) Организовать функцию countCartPrice, которая будет считать стоимость корзины.*/

//a)Организовать такой массив для хранения товаров в корзине;
var basket = [
	{
		product: "Клавиатура проводная SVEN KB-C3010",
		price: 550,
		count: 25
	},
	{
		product: "Клавиатура проводная Oklick 505M",
		price: 599,
		count: 27
	},
	{
		product: "Клавиатура проводная Defender Spark GK-300L",
		price: 699,
		count: 17
	},
	{
		product: "Клавиатура беспроводная Logitech Wireless Keyboard K230",
		price: 1799,
		count: 7
	}
]

//b) Организовать функцию countCartPrice, которая будет считать стоимость корзины.

function countCartPrice(basket){
	var basketprice = 0;
	for(var item of basket){
		basketprice += item.price;
	}
	return basketprice;
}
console.log("Стоимость корзины: " + countCartPrice(basket) + " рублей.");
