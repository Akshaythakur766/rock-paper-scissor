let userScore=0;
let compScore=0;
const msg=document.querySelector("#msg");

const choices=document.querySelectorAll(".choice");

const gencompchoice=()=>{
    let options=["rock","paper","scissor"];
     const randindex=Math.floor(Math.random()*3);
     return options[randindex];
}
const drawgame=()=>{
    console.log("game was draw");
}
const showwinner=(userwin)=>{
    if(userwin){
        console.log("you win!");
        msg.innerText="You win";
    }else{
        console.log("you lose");
        msg.innerText="You lose";
    }
}

const playgame=(userchoice)=>{
    console.log(`user choice = ${userchoice}`)
    const compchoice=gencompchoice();
    console.log(`computer choice =${compchoice}`)

    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
    if(userchoice==="rock"){
         userwin= compchoice==="paper" ? false:true;
    }
    else if(userchoice==="paper"){
        userwin=compchoice==="scissors" ? false:true;
    }
    else{
        userwin= compchoice==="rock" ? false:true;
    }
    showwinner(userwin);
   }
};

choices.forEach((choice)=>{
         console.log(choice);
        choice.addEventListener("click",()=>{
            const userchoice=choice.getAttribute("id");
            // console.log("choice was clicked",userchoice);
            playgame(userchoice)
        });
});