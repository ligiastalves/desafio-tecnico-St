function gerarNotaFiscal() {
    const valorVenda = document.getElementById("valorVenda").value;
    const itens = document.getElementById("itens").value;
    const irpf = document.getElementById("irpf").value;
    const pis = document.getElementById("pis").value;
    const cofins = document.getElementById("cofins").value;
    const inss = document.getElementById("inss").value;
    const issqn = document.getElementById("issqn").value;
    const errorMessages = document.getElementById("errorMessages");

    errorMessages.innerHTML = ""; // Limpa mensagens de erro

    let errors = [];

    if (!valorVenda || valorVenda <= 0) {
        errors.push("O valor da venda deve ser maior que zero.");
    }

    if (!itens.trim()) {
        errors.push("Os itens vendidos devem ser preenchidos.");
    }

    if (!irpf || irpf < 0 || irpf > 100) {
        errors.push("A porcentagem do IRPF deve estar entre 0 e 100.");
    }

    if (!pis || pis < 0 || pis > 100) {
        errors.push("A porcentagem do PIS deve estar entre 0 e 100.");
    }

    if (!cofins || cofins < 0 || cofins > 100) {
        errors.push("A porcentagem do COFINS deve estar entre 0 e 100.");
    }

    if (!inss || inss < 0 || inss > 100) {
        errors.push("A porcentagem do INSS deve estar entre 0 e 100.");
    }

    if (!issqn || issqn < 0 || issqn > 100) {
        errors.push("A porcentagem do ISSQN deve estar entre 0 e 100.");
    }

    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join("<br>");
        return;
    }

    const irpfValue = (valorVenda * irpf) / 100;
    const pisValue = (valorVenda * pis) / 100;
    const cofinsValue = (valorVenda * cofins) / 100;
    const inssValue = (valorVenda * inss) / 100;
    const issqnValue = (valorVenda * issqn) / 100;

    const totalImpostos = irpfValue + pisValue + cofinsValue + inssValue + issqnValue;
    const valorLiquido = valorVenda - totalImpostos;

    const notaFiscal = `
        <h2>Nota Fiscal de Serviço</h2>
        <p><strong>Valor da Venda:</strong> R$ ${parseFloat(valorVenda).toFixed(2)}</p>
        <p><strong>Itens Vendidos:</strong> ${itens}</p>
        <ul>
        <li><strong>IRPF (${irpf} %):</strong> R$ ${irpfValue.toFixed(2)}</li>
        <li><strong>PIS (${pis} %):</strong> R$ ${pisValue.toFixed(2)}</li>
        <li><strong>COFINS (${cofins} %):</strong> R$ ${cofinsValue.toFixed(2)}</li>
        <li><strong>INSS (${inss} %):</strong> R$ ${inssValue.toFixed(2)}</li>
        <li><strong>ISSQN (${issqn} %):</strong> R$ ${issqnValue.toFixed(2)}</li>
        </ul>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>
    `;

    document.getElementById("notaFiscal").style.display = "block";
    document.getElementById("notaFiscal").innerHTML = notaFiscal;
}
//Função para exportar a nota em pdf
async function exportarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const notaFiscalContent = document.getElementById("notaFiscal").innerText;

    doc.text(notaFiscalContent, 10, 20);

    doc.save("nota_fiscal.pdf");
}
//Função para exportar a nota em CSV
function exportarCSV() {
    const valorVenda = document.getElementById("valorVenda").value;
    const itens = document.getElementById("itens").value;
    const irpf = document.getElementById("irpf").value;
    const pis = document.getElementById("pis").value;
    const cofins = document.getElementById("cofins").value;
    const inss = document.getElementById("inss").value;
    const issqn = document.getElementById("issqn").value;

    const csvContent = `Valor da Venda,Itens,IRPF,PIS,COFINS,INSS,ISSQN\n${valorVenda},"${itens}",${irpf},${pis},${cofins},${inss},${issqn}`;
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "nota_fiscal.csv";
    link.click();
}
//Função para imprimir a nota
function imprimirNotaFiscal() {
    const conteudo = document.getElementById("notaFiscal").innerHTML;
    const janela = window.open("", "", "width=800, height=600");
    janela.document.write("<html><head><title>Nota Fiscal</title></head><body>");
    janela.document.write(conteudo);
    janela.document.write("</body></html>");
    janela.document.close();
    janela.print();
}