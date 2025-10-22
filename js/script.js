document.getElementById("botaolista").addEventListener("click", show);

function show(){
    let listanav = document.getElementById("listanav").style.display;
    if(listanav === "none")
    {
        document.getElementById("listanav").style.display = "block";
    }
    else{
        document.getElementById("listanav").style.display = "none";
    }
}

window.addEventListener("resize", function(){
    if(window.innerWidth > 824){
        this.document.getElementById("listanav").style.display = "none";
    }
})

const controls = document.querySelectorAll('.control')

let currentItem = 0;
const items = document.querySelectorAll('.item')
const maxItems = items.length;
const descricao = document.querySelectorAll('.descricao')

document.addEventListener("DOMContentLoaded", () => {
    descricao.forEach(descricao => descricao.style.display = "none")
    descricao[currentItem].style.display = "block"; 
});


controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left')
        if(isLeft){
            currentItem -= 1;
        }else{
            currentItem += 1;
        }

        if(currentItem >= maxItems){
            currentItem = 0;
        }

        if(currentItem <0){
            currentItem = maxItems - 1;
        }

        items.forEach(items => items.classList.remove('current-item'))
        descricao.forEach(descricao => descricao.style.display = "none")
    

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        });

        items[currentItem].classList.add('current-item');
        descricao[currentItem].style.display = "block";
        
        
    });
});