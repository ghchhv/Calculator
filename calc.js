let str="";
const buttons=document.querySelectorAll(".btn");
const inp=document.querySelector("#txt");
for(let button of buttons){
    button.addEventListener("click",function(){
        str+=(this.textContent);
        txt.value=str;
    })
}