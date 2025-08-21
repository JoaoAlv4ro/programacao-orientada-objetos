const personagem = {
    apelido: 'Capitão America',
    nome: 'Steve Rogers',
    habilidades: 'força e velocidade',
    descricao: function() {
        return 'Nome: ' + this.nome + " Apelido: " + this.apelido + ' Poderes: ' + this.habilidades;
    }
}

console.log(personagem.descricao());