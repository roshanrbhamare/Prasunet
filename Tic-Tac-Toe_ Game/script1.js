let buttons= document.querySelectorAll(".button");
let reset= document.querySelector("#reset");
let winner= document.querySelector("#winner");
let inf= document.querySelector("#inf");

reset.addEventListener("click", ()=>{
    click=0;
    console.log("hello");
    buttons.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    });
    winner.style.display= "none";
    buttons.disabled=false;
    if(tru==1){
        inf.innerText="IT'S X CHANCE TO CLICK NOW";
    }else{
        inf.innerText="IT'S O CHANCE TO CLICK NOW";
    }
})


const winnerlist=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    
]  
    
    
const winnerfind =()=>{
    for ( let str of winnerlist){
        let p1= buttons[str[0]].innerText;
        let p2= buttons[str[1]].innerText;
        let p3= buttons[str[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1==p2 && p2==p3){
                winner.innerText="WINNER IS: "+ p1;
                winner.style.display= "flex";
            }
        }
    }

}



let tru= 1;
let click=0;

buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(tru==1){
            btn.innerText="X";
            inf.innerText="IT'S O CHANCE TO CLICK NOW";
            tru=0;
            btn.disabled= true;
            click++;
        }else{
            btn.innerText="O";
            inf.innerText="IT'S X CHANCE TO CLICK NOW";
            tru=1;
            btn.disabled= true;
            click++;
        }


        winnerfind();

        if(click==9){
            winner.innerText= "GAME IS DRAW";
            winner.style.display="flex";
            buttons.forEach((box)=>{
                box.disabled=true;
            });
        }
    })
})


