let tunnnek = false;
function init(){
    document.getElementById("hozzaad").addEventListener("click",hozzaad);
    document.getElementById("torolhakesz").addEventListener("click",torolHaKesz);
    document.getElementById("eltuntet").addEventListener("change",eltuntet);
}
function hozzaad(){
    let szoveg = document.getElementById("new").value;
    let lista = document.getElementById("lista");
    lista.appendChild(kartya(szoveg,lista.childElementCount));
    document.getElementById("new").value = "";
}

function kartya(tartalom,id){
    let elem = document.createElement("div");
    elem.classList.add("elem");
    elem.id = `elem_${id}`;

    let check = document.createElement("input");
    check.type = "checkbox";
    check.tagName = "check";
    check.classList.add("keszVanE");
    check.id = `check_${id}`;
    check.addEventListener("change",()=>valt(id))

    let szoveg = document.createElement("span");
    szoveg.classList.add("szoveg");
    szoveg.textContent = tartalom;

    let ix = document.createElement("span");
    ix.classList.add("x");
    ix.id = `x_${id}`;
    ix.textContent = "X";
    ix.addEventListener("click",()=>torol(id));

    elem.appendChild(check);
    elem.appendChild(szoveg);
    elem.appendChild(ix);
    return elem;
}
function torol(id){
    let lista = document.getElementById("lista");
    lista.removeChild(document.getElementById(`elem_${id}`));
}
function torolHaKesz(){
    let lista = document.getElementById("lista");
    for(let i = lista.childElementCount - 1; i > -1; i--){
        if (lista.children[i].children[0].checked){
            lista.removeChild(lista.children[i]);
        }
    }
}
function valt(id){
    document.getElementById(`elem_${id}`).classList.toggle("kesz");
    eltuntet(false);
}
function eltuntet(valt = true){
    let lista = document.getElementById("lista").children;
    tunnnek = valt ? !tunnnek : tunnnek;
    for(let elem of lista){
        if (tunnnek && elem.classList.contains("kesz")){
            elem.style.display = "none";
        }
        else{
            elem.style.display = "grid";
        }
    }

}
document.addEventListener("DOMContentLoaded",init);