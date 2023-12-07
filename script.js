let menu=document.querySelector("#menu-bar");
let navbar=document.querySelector(".navbar");

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


window.onscroll=()=>{

    if(window.scrollY > 40) {
        document.querySelector('#scroll-up').classList.add('active');
    } else {
        document.querySelector('#scroll-up').classList.remove('active');
    }
}
