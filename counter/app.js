let plus = document.getElementById("plus");
let reset = document.getElementById("reset");
let minus = document.getElementById("minus");
let result = document.getElementById("result");

let score =0;

plus.addEventListener("click",change1);
reset.addEventListener("click",change2);
minus.addEventListener("click",change3);

// + butona basıldığında yapılacak işlemler
function change1(){
    score ++;
    result.innerText = score;
    if(score >= 1){
        result.style.color = "green";
    }
    else if(score == 0){
        result.style.color = "white";
    }
    else{
        result.style.color = "red";
    }
}

// reset butona basıldığında yapılacak işlemler
function change2(){
    score = 0;
    result.innerText = score;
    result.style.color = "white";
}

// eksi butona basıldığında yapılacak işlemler
function change3(){
    score--;
    result.innerText = score;
    if(score < 0){
        result.style.color = "red";
    }
    else if(score == 0 ){
        result.style.color = "white";
    }
    else{
        result.style.color = "green";
    }
}
