3. Объявить две целочисленные переменные a и b и задать им произвольные начальные 
значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

var a = -6;
var b = -13;

if(a > 0 && b > 0){
	resm = a - b;
	alert(resm);
} else if(a < 0 && b < 0){
	result = a * b;
	alert(result);
} else if(a > 0 && b < 0 || a < 0 && b > 0){
	ress = a + b;     
	alert(ress);
}