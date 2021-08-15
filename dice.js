/* Dice Roll  */

function playcraps(){
    //For the consloe to log
    console.log("Craps Game Started")
    // To Id the two diffent Dice
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    //Aduio For winning at craps 
    var win = new Audio("../Final Fantasy VII - Victory.mp3");
    var tie = new Audio("../lose.mp3");
    //Replaces the elements on the html file with the dice numbers
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    //Adds the two dice number
    var dieSum = die1 + die2;
    //Replaces the elements on the html file with teh dice total
    document.getElementById("diceSum").innerHTML = dieSum;
    //debates if you win or lose 
    if(dieSum == 7 || dieSum == 11){
        //Replaces the elements on the html file with the lose condition
        document.getElementById("crapsStatus").innerHTML = "Craps! You Lose";
        tie.play();
        //Replaces the elements on the html file with the win condition 
    }else if (die1 == die2 && die1 % 2 ==0){
        document.getElementById("crapsStatus").innerHTML = "Double You Win" ;
        //Aduio For winning at craps 
        win.play();

    }else {
        ////Replaces the elements on the html file with retry condition
        document.getElementById("crapsStatus").innerHTML = "You didn't win or lose roll again ";
    
    }

}