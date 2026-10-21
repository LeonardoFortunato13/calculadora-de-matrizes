//adicionar matriz

let matrizesData = [];


window.document.getElementById('btn-add-matriz').addEventListener('click', function () {
    const nomeMatriz = window.document.getElementById('name-matriz').value;
    const linhasMatriz = window.document.getElementById('row-matriz').value;
    const colunasMatriz = window.document.getElementById('col-matriz').value;
    console.log(nomeMatriz, linhasMatriz, colunasMatriz);
    createMatriz(linhasMatriz, colunasMatriz, nomeMatriz)
})

function createMatriz(linha, coluna, nome) {
    const newMatriz = document.createElement("div", { id: nome });
    newMatriz.id = nome;
    const title = document.createElement("h2");
    title.innerText = `Matriz ${nome}`;

    // i = 2 
    //j = 2
    for (let i = 1; i <= linha; i++) {
        for (let j = 1; j <= coluna; j++) {
            const inputElement = document.createElement("input", { type: "number" });
            inputElement.id = nome + i + j;
            inputElement.style.width = "50px";
            inputElement.style.height = "50px";
            newMatriz.appendChild(inputElement);

            if (j == coluna) {
                newMatriz.appendChild(document.createElement("br"));
            }

        }

    }

    document.getElementById("matriz-element").appendChild(title);
    document.getElementById("matriz-element").appendChild(newMatriz);

    //const valor = document.getElementById(nome + i + j).value;

    //pegar os valores da matriz

    for (let i = 1; i <= linha; i++) {
        for (let j = 1; j <= coluna; j++) {
            const input = document.getElementById(`${nome}${i}${j}`);
            let valor = input.value;
            while (valor == 0 || valor == null || valor == "") {
                valor = input.value;
                matrizesData.push(valor)
                console.log("value added", valor);
            }
        }

    } console.log(matrizesData)
}


function saveMatriz() {

}