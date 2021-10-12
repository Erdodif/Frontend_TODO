let tartalom = [];
function init(){
    document.getElementById("hozzaad").addEventListener("click",hozzaad)
}
function hozzaad(){
    let szoveg = document.getElementById("new");
    tartalom.push(szoveg);
    hozzaad(szoveg.value);
    szoveg.value = "";
}
function kartya(tartalom,id){
    let elem = document.createElement("div");
    elem.classList.add("elem");
    elem.id = `elem_${id}`;

    let check = document.createElement("input");
    check.type = "checkbox";
    check.tagName = "check";

    let szoveg = document.createElement("span");
    szoveg.classList.add("szoveg");
    szoveg.textContent = tartalom;

    let ix = document.createElement("span");
    ix.classList.add("x");
    ix.id = `x_${id}`;
    ix.textContent = "X";

    elem.appendChild(check);
    elem.appendChild(szoveg);
    elem.appendChild(ix);
    return elem;
}
function hozzaad(tartalom){
    let lista = document.getElementById("lista");
    lista.appendChild(kartya(tartalom,2))
}
document.addEventListener("DOMContentLoaded",init);