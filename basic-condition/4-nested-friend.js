
let myScore = 85;
let friendScore = 33;

if(myScore >80){
  console.log("See your friend score");
  if(friendScore >80){
    console.log("Go for a lunch");
  }
  else if(friendScore <80 && friendScore >=60){
    console.log("Good luck next time");
  }
  else if(friendScore <60 && friendScore >=40){
    console.log("Keep your friend's message unseen");
  }
  else if(friendScore < 40){
    console.log("Block your Friend");
  }
}

else{
  console.log("Go to home and sleep and act sad.");
}