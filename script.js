
function atualizarCampos() {
    const tipo = document.getElementById("tipo").value;
    document.getElementById("campoSquare").classList.toggle("d-none", tipo !== "square");
    document.getElementById("medidasRoupa").classList.toggle("d-none", tipo === "square");
}

const linhas = {
    anne: { metragem: 500, preco: 16.9 },
    duna: { metragem: 170, preco: 13 },
    bella: { metragem: 170, preco: 14 }
};

function calcular() {
    const tipo = document.getElementById("tipo").value;
    const linhaSel = document.getElementById("linha").value;
    const valorHora = parseFloat(document.getElementById("valorHora").value);
    const horas = parseFloat(document.getElementById("horas").value);
    const extras = parseFloat(document.getElementById("extras").value);

    let metrosUsados = 0;

    if (tipo === "square") {
        const qtd = parseInt(document.getElementById("qtdSquare").value);
        metrosUsados = (500 / 25) * qtd; // Anne faz 25 squares com 500m
    } else {
        const busto = parseFloat(document.getElementById("busto").value);
        const cintura = parseFloat(document.getElementById("cintura").value);
        const comprimento = parseFloat(document.getElementById("comprimento").value);
        const area = (busto + cintura) * comprimento / 2;
        metrosUsados = area * 0.1; // estimativa
    }

    const precoLinha = linhas[linhaSel].preco;
    const metragemPorRolo = linhas[linhaSel].metragem;
    const rolos = Math.ceil(metrosUsados / metragemPorRolo);
    const custoMateriais = rolos * precoLinha;
    const custoHora = valorHora * horas;
    const subtotal = custoHora + custoMateriais + extras;
    const precoFinal = subtotal * 1.3;

    document.getElementById("resultado").innerHTML = `
        <h4>Resultado:</h4>
        <p><strong>Rolos de linha:</strong> ${rolos}</p>
        <p><strong>Custo com linha:</strong> R$ ${custoMateriais.toFixed(2)}</p>
        <p><strong>Custo com hora:</strong> R$ ${custoHora.toFixed(2)}</p>
        <p><strong>Extras:</strong> R$ ${extras.toFixed(2)}</p>
        <p><strong>Subtotal:</strong> R$ ${subtotal.toFixed(2)}</p>
        <p><strong>Preço final (30% lucro):</strong> <span class="fw-bold text-success">R$ ${precoFinal.toFixed(2)}</span></p>
    `;
}
