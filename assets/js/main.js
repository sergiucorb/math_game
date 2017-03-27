//daca apasam butonul start/reset
    //daca jucam:
        // reincarcam pagina
    //daca nu jucam:
        //seteaza scorul la 0
        //afisam timpul ramas
        //reducem timpul cu 1 sec 
            //timp ramas?
                //da - continua
                //nu- gameover
        //schimba butonul in reset
        //genereaza o noua intrebare si un nou raspuns

//daca apasam butonul 'answer'
    //daca jucam: 
        //corect?
            //da
                //mareste scorul
                //afiseaza CORRECT pt 1 sec
                //genereaza o noua intrebare si raspuns
            //nu
    
                //afiseaza TRY AGAIN pt 1 sec
var playing = false;
var score;
var action;
var timeRemaining;

document.getElementById("start-reset").onclick = function(){
    if(playing == true){
        location.reload();
    }else{
        playing = true;
        score = 0;
        show("time-remaining");
        timeRemaining = 3;
        startCountdown();
        document.getElementById("start-reset").innerHTML = "Reset Game";
        hide("game-over");
    }
}
//functions
function startCountdown(){
    
    var counter = document.getElementById("timer");
    var action = setInterval(function(){
        timeRemaining-=1; 
        counter.innerHTML = timeRemaining + " sec";
        if(timeRemaining == 0 ){
            stopCountdown();
            show("game-over");
            document.getElementById("finalScore").innerHTML = score;
            hide("time-remaining");
            hide("correctAnswer");
            hide("wrongAnswer");
            playing = false;
            document.getElementById("start-reset").innerHTML = "Start Game";    
    } 
    },1000);   
}
function stopCountdown(){
    clearInterval(action);
}
function hide(Id){
     document.getElementById(Id).style.display = "none";
}
function show(Id){
    document.getElementById(Id).style.display = "block";
}
