const colorthemelogo =document.querySelector(".colorthemelogo");
const body =document.querySelector("body");
const ancer =document.querySelector("a");
let indx =0;

document.getElementsByClassName('.colorthemelogo').onmouseover=()=>{
    console.log('hi')
}


colorthemelogo.onclick =()=>{
    if(indx%2==0){
        body.style.backgroundColor='black'
        body.style.color='white'
        // colorthemelogo.style.height='30px';
        colorthemelogo.src ='lightlogo.png';
    }
    else{
        colorthemelogo.src ='moon1.png';
        body.style.backgroundColor='white'
        body.style.color='black'
        // colorthemelogo.style.height='30px';
    }
    indx++;
}
