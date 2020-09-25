function dados_loja_param(
	nome_loja: string,
	logradouro: string,
	numero: number,
	complemento: string,
	bairro: string,
	municipio: string,
	estado: string,
	cep: string,
	telefone: string,
	observacao: string,
	cnpj: string,
	inscricao_estadual: string
) {
	// Implemente aqui
	if (nome_loja == "") {
		throw new Error(`O campo nome da loja é obrigatório`);
	}

	if (!logradouro) {
		throw new Error(`O campo logradouro do endereço é obrigatório`);
	}

	if (!municipio) {
		throw new Error(`O campo município do endereço é obrigatório`);
	}
	if (!estado) {
		throw new Error(`O campo estado do endereço é obrigatório`);
	}
	if (!cnpj) {
		throw new Error(`O campo CNPJ da loja é obrigatório`);
	}
	if (!inscricao_estadual) {
		throw new Error(`O campo inscrição estadual da loja é obrigatório`);
	}

	let numeroStr: string = numero <= 0 ? "s/n" : numero.toString();

	let ln2: string = `${logradouro}, ${numeroStr}`;
	ln2 += isEmpty(complemento) ? "" : ` ${complemento}`;
	ln2 += "\n";

	let ln3 = isEmpty(bairro) ? "" : `${bairro} - `;
	ln3 += `${municipio} - ${estado}\n`;

	let ln4 = isEmpty(cep) ? "" : `CEP:${cep}`;
	if (!isEmpty(telefone)) {
		ln4 += isEmpty(ln4) ? "" : " ";
		ln4 += `Tel ${telefone}`;
	}
	ln4 += isEmpty(ln4) ? "" : "\n";

	let ln5 = isEmpty(observacao) ? "" : `${observacao}`;
	ln5 += "\n";

	let output = nome_loja + "\n";
	output += `${ln2}`;
	output += `${ln3}`;
	output += `${ln4}`;
	output += `${ln5}`;
	output += `CNPJ: ${cnpj}\n`;
	output += `IE: ${inscricao_estadual}\n`;

	return output;
}

function isEmpty(str: string): boolean {
	let spaceCount = str.length - str.replace(" ", "").length;
	return str == null || spaceCount == str.length;
}

module.exports = dados_loja_param;
