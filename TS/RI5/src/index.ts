import Empresa from "./model/empresa";
import Endereco from "./model/endereco";
import Funcionario from "./model/funcionario";
import Telefone from "./model/telefone";

let enderecoEmpresa = new Endereco(0, "Rua dos Bobos", "Bairro do Loucos", "Caçapava");
let telefoneFuncionario1 = new Telefone("12", "99999-9999");
let enderecoFuncionario1 = new Endereco(0, "Rua dos Bobos", "Bairro do Loucos", "Caçapava");
let funcionario1 = new Funcionario("Rodolfo", "1", "111.111.111-11", enderecoFuncionario1, telefoneFuncionario1);

let funcionarios = [funcionario1];
let telefones = [telefoneFuncionario1];

let empresa = new Empresa("Prime", "Prime Soluções LTDA", "11.111.111/0001-11", enderecoEmpresa, funcionarios);


console.log(empresa);