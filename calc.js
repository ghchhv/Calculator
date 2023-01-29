let str="";
const buttons=document.querySelectorAll(".btn");
const inp=document.querySelector("#txt");
for(let button of buttons){
    button.addEventListener("click",function(){
        let btnContent=(this.textContent);
        if(btnContent=='X'){
            btnContent='*';
            str+=btnContent;
            txt.value=str;
        }
        else if (btnContent=='Back'){
            str=str.slice(0,str.length-1);
            txt.value=str;

        }
        else if(btnContent=='Clr'){
            str='';
            txt.value=str;
        }
        else if(btnContent=='='){
            str=eval(str);
            txt.value=str;
        }
        else{
            str+=btnContent;
            txt.value=str;
        }
        
    })
}