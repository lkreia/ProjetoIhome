var produtos = [];
function adicionar(id, name, price) {
    var prod = {};
    prod.id = id;
    prod.name = name;
    prod.price = price;

    produtos = JSON.parse(window.localStorage.getItem("produtos"));
    var prod = document.getElementById("produto").value;
    produtos.push(prod);
    window.localStorage.setItem("produtos", JSON.stringify(produtos));
    mostrar();
}

function mostrar() {
    var auxiliar = JSON.parse(window.localStorage.getItem("produtos"));
    console.log(auxiliar);
    document.getElementById("row").innerHTML = "";

    for (var i = 0; i < auxiliar.length; i++) {
        document.getElementById("row").innerHTML += auxiliar[i] + "<br>";
    }
}

