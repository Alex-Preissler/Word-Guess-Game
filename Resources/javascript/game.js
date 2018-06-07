var bands={
    
    1: {name: "Blink 182", 
        img: "Resources/images/blink-182.jpg"}, 
    
    2: {name: "Green Day", 
        img: "Resources/images/greenday.jpg"},
   
    3: {name: "Rage Against The Machine", 
        img: "Resources/images/rage-against-the-machine.jpg"},
    
    4: {name: "Foo Fighters", 
        img: "Resources/images/foo-fighters.jpg"},
   
    5: {name: "Eve 6", 
        img: "Resources/images/eve-6.jpg"},
    
    6: {name: "311", 
        img: "Resources/images/311.jpg"},
    
    7: {name: "Red Hot Chili Peppers", 
        img: "Resources/images/red-hot-chili-peppers.jpg"},
   
    8: {name: "The Offspring", 
        img: "Resources/images/the-offspring.jpg"},
    
    9: {name: "Nine Inch Nails", 
        img: "Resources/images/nine-inch-nails.jpg"},
    
    10: {name: "Weezer", 
        img: "Resources/images/weezer.jpg"} ,
    
    11: {name: "Bush", 
        img: "Resources/images/bush.jpg"},
    
    12: {name: "Filter", 
        img: "Resources/images/filter.jpg"},
    
    13: {name: "Stone Temple Pilots", 
        img: "Resources/images/stone-temple-pilots.jpg"}, 
    
    14: {name: "Nirvana", 
        img: "Resources/images/nirvana.jpg"}
};
var wins = 0;
var word;
var guess;
var remain = 15;
var ltrCount = 0;
var ltrCorrect = 0;
var trigger = 0;
var prevent = [];
var match = false;
var band;
var imgSrc;


//Selects word from array
function selectWord() {

    band = bands[Math.floor((Math.random() * 14)) + 1]

    word = band.name;

    imgSrc = band.img;

    console.log(word);
    console.log(imgSrc);
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
        
        console.log(guess);
        console.log(lwrCase);
       
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

    $("#imgTarget").attr("src", imgSrc);
    console.log(imgSrc);

}

function displayImg(){

    $("#imgTarget").css("visibility", "visible");
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")

}

function hideImg() {

    $("#imgTarget").css("visibility", "hidden");

}

function winAlert(callback) {

    var alertMonitor = false;
    
    while(alertMonitor == false){
        
        alert("Congratulations! You Win!");
        alertMonitor = true;
        console.log("bob");
    }
   
    alertMonitor = false;
    callback();
}

function roundReset(){

    console.log("fred");
    hideImg();        
    resetVar();
    clearLetterList();
    guessUpdateReset();
    selectWord();
    AssignImg();
    displayBlanks();
    ltrIdAssign();
    main();


}

$(document).ready(function(){

    selectWord();
    AssignImg();
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
            
            displayImg();
            
            
            jQuery(function($) {    
                
                $.when($("#imgTarget").html('')).done(function() {
                    
                    winAlert(roundReset);
                
                });
            });
         
        
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
