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
// Introduce a delay to diversify calls
// await new Promise(resolve => setTimeout(resolve, 1000));

let usercount=0;
let compcount=0;


zero.addEventListener("click",()=>{
    user=0;
    comp= Math.floor(Math.random() * 3);
    // console.log(usercount);
})
one.addEventListener("click",()=>{
    user=1;
    comp= Math.floor(Math.random() * 3);
    // console.log(usercount);

})
two.addEventListener("click",()=>{
    user=2;
    comp= Math.floor(Math.random() * 3);
    // console.log(usercount);

})

button.addEventListener("click",()=>{
    // console.log(`user= ${user}`);
    // console.log(`comp= ${comp}`);
   if(user===comp)
   {
    // console.log("draw");
    result.textContent="Match Draw";  
    result.style.color="white";
    result.style.textAlign="center";
    result.style.paddingTop="15px";
    }

   else if((user === 0 && comp === 1) || (user === 1 && comp === 2) || (user === 2 && comp === 0))
   {
    // console.log("computer win");
    compcount++;
    result.textContent="Comp Win";
    result.style.color="white";
    result.style.textAlign="center";
    result.style.paddingTop="15px";
    // console.log(`compwincount= ${compcount}`);
    compdiv.textContent=compcount;
    }

   else{
    // console.log("user win");
    usercount++;
    result.textContent="User Win";
    result.style.color="white";
    result.style.textAlign="center";
    result.style.paddingTop="15px";
    // console.log(`userwincount= ${usercount}`);
    userdiv.textContent=usercount;
   }
});

let resetGame = () => {
    if(usercount!=0 && compcount!=0){
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
