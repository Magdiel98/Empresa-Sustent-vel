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