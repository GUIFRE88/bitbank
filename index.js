import {Cliente} from "./Cliente.js"
import {ContaCorrent} from "./ContaCorrente.js"
 
const cliente1 = new Cliente("Guilherme",11122233309);
const cliente2 = new Cliente("Ana",22233344408);

const contaCorrente1 = new ContaCorrent();
contaCorrente1.cliente = cliente1; 
contaCorrente1.depositar(500);
contaCorrente1.agencia = 1001;
contaCorrente1.depositar(500);

const contaCorrente2 = new ContaCorrent();
contaCorrente2.cliente = cliente2;
contaCorrente2.depositar(500);
contaCorrente2.agencia = 1001;
contaCorrente2.depositar(500);

contaCorrente1.transferir(200, contaCorrente2)

console.log(contaCorrente1);
console.log(contaCorrente2);

