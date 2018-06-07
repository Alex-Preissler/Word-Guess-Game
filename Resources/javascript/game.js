var bands=[
    "Blink 182", 
    "Green Day", 
    "Rage Against The Machine", 
    "Foo Fighters", 
    "Eve 6", 
    "311", 
    "Red Hot Chili Peppers", 
    "The Offspring", 
    "Nine Inch Nails", 
    "Weezer", 
    "Bush", 
    "Filter", 
    "Stone Temple Pilots", 
    "Nirvana"];
var wins = 0;
var word;
var guess;
var remain = 15;
var ltrCount = 0;
var ltrCorrect = 0;
var trigger = 0;
var prevent = [];
var match = false;
var imgIndex = 0;

//Selects word from array
function selectWord() {

    word = bands[Math.floor(Math.random() * bands.length)]
    imgIndex = jQuery.inArray(word, bands);
    console.log("Index" + imgIndex);
    console.log(word);
    console.log("-----------------------------------------------");
    

}

//updates score
function updateScore() {

    $("#wins").text("Wins: " + wins);

}

//Displays Correct number of blank spaces and breaks in word
function displayBlanks() {

    for(var i = 0; i < word.length; i++){

        if(word[i] != " "){
       
            $("#ltrlist").append('<li class = "ltrbox"><div class ="ltr">' + word[i] + '</div></li>');
            ltrCount++;
        
        }else{

            $("#ltrlist").append('<li class = "blankspace"><div class ="ltr"></div></li>');

        }
    }
}

function clearLetterList(){

    $("#ltrlist").empty();

}

//Updates Remaining Guesses
function gRemain() {

    $("#gRemain").text("Guesses Remaining: " + remain);
    
}

//Updates Letters Guessed
function guessUpdate() {

    $("#ltrsUsed").append(guess + ", ");

}

function guessUpdateReset() {

    $("#ltrsUsed").empty();

}

//checks for Matches/Displays Matches, Returns match true/false
function check() {

    var match = false;

    $("li").each(function (index){

        var i = 0;
        var idValue = "L" + index;
        var lwrCase = $(this).text();
       
        lwrCase = lwrCase.toLowerCase();
        
       
       
        if(lwrCase == guess){

 
            document.getElementById(idValue).style.visibility = "visible";
            ltrCorrect++;
            match = true;

        }else{

            
        }

    

    });
    
    return match;
}


function ltrIdAssign(){

    $(".ltr").each(function (index){

        var idValue = "L" + index;

        $(this).attr('id', idValue);


    });

}

function preventDouble(){
    
    var i = 0;
    

    if(trigger == 0){

        prevent[0] = guess;
        trigger = 1;
        match = false; 
        return match;

    }else{

        console.log(prevent.length + 1);
        
        while(i < prevent.length){

            if(prevent[i] == guess){

                console.log(prevent[i]);
                alert("You Have Already Guessed That, Try Another!");
                match = true;
                return match;

            }else{

                console.log(prevent[i])
                
            }
        
            i++;
        }
            
            console.log(i);
            prevent[i] = guess;

            match = false;
            return match;
        }

    }



    function resetVar(){

    ltrCorrect = 0;
    ltrCount = 0;
    trigger = 0;
    prevent = [];

}

function AssignImg() {

    $("#imgTarget").

}

$(document).ready(function(){

    selectWord();
    updateScore();
    displayBlanks();
    ltrIdAssign();
    gRemain();

    main();

});


function main(){

    document.onkeyup = function(event){

       
        if(remain == 0){
            

            gRemain();

            alert("Game Over!");
            alert("Try Again?");
            
            location.reload();
            
    
        }else if(ltrCount == ltrCorrect){
            
            wins++;
            updateScore();
            alert("Congratulations! You Win!");
            resetVar();
            clearLetterList();
            guessUpdateReset();
            selectWord();
            displayBlanks();
            ltrIdAssign();
            main();
        
        }else{
            
            guess = event.key;
            
            var double = preventDouble();
            console.log(prevent);
            if(double == false){
                var match = check();

                
                    if(match == false){

                    remain--;
                    gRemain();
                    guessUpdate();


                }else{

                }
            }else{

            }

    }

}
}
