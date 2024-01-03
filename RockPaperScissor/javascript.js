let button = document.querySelector(".container");
let zero = document.querySelector("#rock");
let one = document.querySelector("#paper");
let two = document.querySelector("#scissor");
let result = document.querySelector("#result")
let userdiv = document.querySelector("#user");
let compdiv = document.querySelector("#comp");
let resetBtn = document.querySelector("#reset");
let show = document.querySelector(".showresult");


let user=0;
let comp=0;
let usercount=0;
let compcount=0;


zero.addEventListener("click",()=>{
    user=0;
    comp= Math.floor(Math.random() * 3);
});
one.addEventListener("click",()=>{
    user=1;
    comp= Math.floor(Math.random() * 3);
});
two.addEventListener("click",()=>{
    user=2;
    comp= Math.floor(Math.random() * 3);
});

button.addEventListener("click",()=>{
   if(user===comp)
   {
    result.textContent="Match Draw";  
    result.style.color="white";
    result.style.textAlign="center";
    result.style.paddingTop="15px";
    }

   else if((user === 0 && comp === 1) || (user === 1 && comp === 2) || (user === 2 && comp === 0))
   {
    compcount++;
    result.textContent="Comp Win";
    result.style.color="white";
    result.style.textAlign="center";
    result.style.paddingTop="15px";
    compdiv.textContent=compcount;
    }
   else{
    usercount++;
    result.textContent="User Win";
    result.style.color="white";
    result.style.textAlign="center";
    result.style.paddingTop="15px";
    userdiv.textContent=usercount;
   }
});

let resetGame = () => {
    if(usercount!=0 || compcount!=0){
        usercount=0;
        compcount=0;
        userdiv.textContent=usercount;
        compdiv.textContent=compcount;
        result.textContent="let play again!";
        result.style.color="white";
        result.style.textAlign="center";
        result.style.paddingTop="15px";
    }
  };

    resetBtn.addEventListener("click", resetGame);
