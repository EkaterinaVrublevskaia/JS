/**6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, 
*operation), где arg1, arg2 – значения аргументов, operation – строка с названием
*операции. В зависимости от переданного значения операции выполнить одну из 
*арифметических операций (использовать функции из пункта 3) и вернуть полученное 
*значение (использовать switch). */

function mathOperation(arg1, arg2, operation){
switch (operation){
    case 'Сложение':
		alert(arg1 + arg2);
		break;
	case 'Вычитание':
		alert(arg1 - arg2);
		break;
	case 'Умножение':
		alert(arg1 * arg2);
		break;
	case 'Деление':
		alert(arg1 / arg2);
		break;

	}
}

mathOperation(6, 7, 'Сложение');
mathOperation(6, 7, 'Вычитание');