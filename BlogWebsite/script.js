const colorthemelogo =document.querySelector("#colorthemelogo");
const body =document.querySelector("body");

let indx =0;

const colorthemebox =document.querySelector('.colortheme');


colorthemelogo.onclick =()=>{
    if(indx%2==0){
        body.style.backgroundColor='black'
        body.style.color='white'
        colormodebox.innerText  ='switch to light mode';
        colorthemelogo.src ='lightlogo.png';
    }
    else{
        colorthemelogo.src ='moon1.png';
        body.style.backgroundColor='white'
        colormodebox.innerText  ='switch to dark mode';
        body.style.color='black'
    }
    indx++;
}

let colormodebox =document.createElement('button');
colormodebox.innerText='';

colorthemelogo.onmouseover=()=>{
    if(indx%2==0){
        colormodebox.innerText  ='switch to dark mode';
    }
    else
    colormodebox.innerText  ='switch to light mode';

    colorthemebox.append(colormodebox);
}

colorthemelogo.onmouseout=()=>{
    colormodebox.remove();
}
