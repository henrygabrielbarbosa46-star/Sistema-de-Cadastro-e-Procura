let item = document.getElementById("item");

let lista = document.getElementById("lista");

let busca = document.getElementById("busca");

let adicionar = document.getElementById("btnAdicionar");

let itens = [];
adicionar.addEventListener("click", BtnAdicionar);

busca.addEventListener("keyup", buscar);

function BtnAdicionar() {
    itens.push(item.value);

    let li = document.createElement("li");

    let texto = document.createTextNode(item.value);

    li.appendChild(texto);

    lista.appendChild(li);
}

function buscar() {
    let nome = busca.value.toLowerCase();

    let itensLista = document.getElementsByTagName("li");

    for (let i = 0; i < itensLista.length; i++) {
        let texto = itensLista[i].textContent.toLowerCase();
        if (texto.includes(nome)) {
            itensLista[i].style.display = "block";
        } else {
            itensLista[i].style.display = "none";
        }
    }
}