const accordion = document.querySelectorAll('.container');
for (i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function (){
        const open =document.querySelectorAll('.active');
        console.log("open",open);
for (let el of open){
    
    if (el==this){
        console.log("bonjour")
     } else {
        el.classList.remove('active');
     }
} 
this.classList.toggle('active');

    })
}