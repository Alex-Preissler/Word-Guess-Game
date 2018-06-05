var bands=["Blink 182", "Green Day", "Rage Against The Machine", "Foo Fighters", "Eve 6", "311", "Red Hot Chili Peppers", "The Offspring", "Nine Inch Nails", "Weezer", "Bush", "Filter", "Stone Temple Pilots", "Nirvana"];
var wins = 0;
var word;
var guess;
var guesses = [];
var remain = 15;
var ltrcount = 0;
var correct;

//Selects word from array
function selectWord() {

    word = bands[Math.floor(Math.random() * bands.length)]
    console.log(word);

}

//updates score
function updateScore() {

    document.querySelector("#wins").innerHTML = wins;

}

//Displays Correct number of blank spaces and breaks in word
function displayBlanks() {

    var i = 0;
    

    for(i=0;i<(word.length); i++) {

        if(word.charAt(i) != ' '){

            
            var ltrbox = document.getElementById(i)
            ltrbox.style.visibility = "visible";
           
            ltr = word.charAt(i);
            document.getElementById(i+30).innerHTML = ltr;
            console.log(ltr);

            ltrcount++;

            
           
           
        }else if(word.charAt(i) == ' '){

            var ltrbox = document.getElementById(i)
            ltrbox.style.display = "inline-block";

        }else{

        }

    }

    

}

function guessesLeft() {

    var x = document.getElementById("#gRemain");
    x = remain;


}

function guessUpdate() {

    guesses += guess;

    document.getElementById("#ltrGuessed").innerHTML = guesses;



}

function check() {

    console.log(guess);
    
    for(i=0;i<(word.length); i++) {

        var check = word.charAt(i);
        check = check.toLowerCase();
        
        console.log("------------------");
        console.log(check);
        console.log(guess);

            if(check == guess){
            
                console.log(check);
                
                var ltr = document.getElementById(i+30) 
                ltr.style.visibility = "visible";
                correct++;
            
            }else{

                console.log("else");
                remain--;
                guessesLeft();
                guessUpdate();


            }

    }


}


selectWord();
updateScore();
displayBlanks();



if(correct != ltrcount && remain !=0){

    document.onkeyup = function(event){   
    
    var i = 0;
    guess = event.key;
    console.log(guess);
    check();

    }
}else if(remain = 0){

    alert("Game Over");

}else{

    wins++;

}
