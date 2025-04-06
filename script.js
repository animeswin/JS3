const nomes = []

while (true) {
    const entrada = prompt("Digite um nome (ou 'sair' para encerrar):")
    if (entrada.toLowerCase() === "sair") {
        break
    }
    nomes.push(entrada)
}

alert("Lista de nomes com índices:")
for (let i = 0; i < nomes.length; i++) {
    alert(`${i + 1}: ${nomes[i]}`)
}

alert("\nMensagens personalizadas:")
for (const nome of nomes) {
    alert(`Bem-vindo(a), ${nome}!`)
}