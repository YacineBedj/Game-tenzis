let container = document.querySelector(".container")
let nbrBox = document.querySelectorAll(".nbr");
let submit = document.querySelector(".btn")
let valueBox = [];

function generateRandom(){
    nbrBox.forEach(box=>{
        let fixActive = box.classList[2];
        if(!fixActive){
            let randomNum = Math.floor(Math.random() * 10);
            box.innerHTML = randomNum;
        }
    })
}
function updateValueBox(){
    for(let i = 0; i < nbrBox.length; i++){
        if(nbrBox[i].classList[1]){
            nbrBox[i].classList.add("fix-active");
            valueBox[i] = nbrBox[i].innerHTML;
        }else{
            valueBox[i] = ""
        }
    }
    
}
function isWinner(){
    let fix = true;
    for(let i = 0; i< nbrBox.length; i++){
        if(!nbrBox[i].classList[2]){
            fix = false;
        }
    }

    let result = true && fix;
    if(fix){
        for(let i = 0 ; i < valueBox.length; i++){
            let x = valueBox[0];
            if(valueBox[i] != x){
                result =false
            }
        }
    }
    if(fix){
        let x = result ? 'win' : 'losse'
        let div = document.createElement("div")
        div.classList.add(`${x}`)
        let txt = document.createTextNode(`you ${x} click to restart`)
        div.appendChild(txt);
        div.addEventListener("click", function(){
            this.remove();
            for(let i = 0; i < nbrBox.length; i++){
                    nbrBox[i].classList.remove("temp-active");
                    nbrBox[i].classList.remove("fix-active");
                }
            generateRandom();
        })
        container.appendChild(div);

    }
    return result;
}
//start the game
generateRandom();
nbrBox.forEach((box)=>{
    box.addEventListener("click", (e)=>{
        let fixActive = box.classList[2];
        if(fixActive){
            console.log("this is fix")
        }else{
                let tempActive = box.classList[1];
            if(tempActive){
                box.classList.remove("temp-active")
            }else{
                box.classList.add('temp-active')
            }
        }
    })
})
submit.addEventListener("click",(e)=>{
    updateValueBox();
    isWinner();
    generateRandom();
})
