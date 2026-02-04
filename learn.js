let yes=document.getElementById("yes");
let no=document.getElementById("no");
let pic=document.getElementById("pi");
let pis=document.getElementById("pis");


let scale = 1;

no.addEventListener('click', () => {

    if (no.textContent === 'no') {
        no.textContent = 'are you sure!!!';

    } else if (no.textContent === 'are you sure!!!') {
        no.textContent = 'i cant hear you!';
    }else if(no.textContent === 'i cant hear you!'){
        no.textContent ='say yes'
    }

    scale += 0.5;
    yes.style.transform = `scale(${scale})`;
    yes.style.transition = "0.3s ease";
});

yes.addEventListener('click', () => {
    pic.textContent = 'yaaaaaah!!!!';
    pis.remove();
    document.getElementById('img').src = "squid.gif";
});
