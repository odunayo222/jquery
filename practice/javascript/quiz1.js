var num1 = prompt('numbers');
var num2 = prompt('numbers');
var num3 = prompt('numbers');

if(num1 > num2 && num1 > num3){
    console.log(num1 + ' is the greatest');
} if(num2 > num1 && num2 > num3){
    console.log(num2+ 'is the biggest');
}
else{
    console.log(num3+' is the greatest')
}