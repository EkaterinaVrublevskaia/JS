/*2. Продолжить работу с интернет-магазином:
*В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно *заменить их элементы?
*Реализуйте такие объекты.
*Перенести функционал подсчета корзины на объектно-ориентированную базу.*/
'use strict';

const keyboard_1 = {
		product: "Клавиатура проводная SVEN KB-C3010",
		price: 550,
		count: 25
	};
const keyboard_2 = {
		product: "Клавиатура проводная Oklick 505M",
		price: 599,
		count: 27
	};
const keyboard_3 = {
		product: "Клавиатура проводная Defender Spark GK-300L",
		price: 699,
		count: 17
	};
const keyboard_4 = {
		product: "Клавиатура беспроводная Logitech Wireless Keyboard K230",
		price: 1799,
		count: 7
	};
const basket = {
	sum: 0,
	items: {},
	sumbasket: function(){
		var sum = 0;
		for(var key in this.items){
			const j = this.items[key];
			sum += j.count * j.price;
		}
		this.sum = sum
		return sum; 
	}
};

basket.items = {keyboard_1, keyboard_2, keyboard_3, keyboard_4};


alert(basket);
basket.sumbasket();
console.log("Стоимость корзины: " + basket.sum + "рублей.");
