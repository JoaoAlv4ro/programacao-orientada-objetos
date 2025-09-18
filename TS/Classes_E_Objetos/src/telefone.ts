type Telefone = {
    ddd: string;
    numero: string;
}

let tel: Telefone = {
    ddd: '12',
    numero: '997444739'
}

let mensagem = (info: Telefone): string => {
    return `ddd: ${info.ddd} numero: ${info.numero}`
}

console.log(mensagem(tel));