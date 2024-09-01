/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


var age = 9;
var price = 100;
var student = false;

if(age < 10){
  console.log("Free Ticket");
}
else if(student){
  discount = price *50/100;
  payment = price - discount;

  console.log(payment);
}
else if(age >= 60){
  discount = price *15 / 100;
  payment = price - discount;
  console.log(payment);
}
else{
  console.log(price);
}