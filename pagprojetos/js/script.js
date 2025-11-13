document.getElementById('projetos').addEventListener("change", () => {
    var select = document.getElementById('projetos');
    var text = select.options[select.selectedIndex].text;
    var residencial = document.getElementById('residencial');
    var empresarial = document.getElementById('empresarial');
    var rural = document.getElementById('rural');

    switch(text){
        case "Residencial":
            residencial.style.display = "block";
            empresarial.style.display = "none";
            rural.style.display = "none";
            break;
        case "Empresarial":
            residencial.style.display = "none";
            empresarial.style.display = "block";
            rural.style.display = "none";
            break;
        case "Rural":
            residencial.style.display = "none";
            empresarial.style.display = "none";
            rural.style.display = "block";
            break;
        case "Todos":
            residencial.style.display = "block";
            empresarial.style.display = "block";
            rural.style.display = "block";
            break;
        default:
            break;
    }
});
