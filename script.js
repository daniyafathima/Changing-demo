// let modebtn=document.querySelector("#mode");
// let body=document.querySelector("body");
// let currMode="light";
// modebtn.addEventListener("click",()=>{
//     if(currMode==="light"){
//         currMode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         currMode="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// });
let modebtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currmode="light";
modebtn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
console.log(currmode)});