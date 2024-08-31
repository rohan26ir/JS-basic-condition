/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

var subject = -10;

if(subject >=90 && subject <=100){
  console.log("A");
}
else if(subject >=80 && subject <=89){
  console.log("B");
}
else if(subject >=70 && subject <=79){
  console.log("C");
}
else if(subject >=60 && subject <=69){
  console.log("D");
}
else if(subject <=0 && subject <=59){
  console.log("F");
}
else{
  console.log("There are bonus scores…...");
}