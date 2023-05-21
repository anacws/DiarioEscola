/*Percorra o objeto clientes e mostre o nome da cada cliente da seguinte maneira:
“ultimoSobrenome, primeiroNome”;*/
var clientes = [
    {
      id: 1,
      nome: 'Luis Santos Silveira',
      idade: 18
    },
    {
      id: 2,
      nome: 'Ricardo Lopes Alves',
      idade: 30
    },
    {
      id: 3,
      nome: 'Gustavo Silva Junior',
      idade: 26
    }
  ];
  
  clientes.forEach(function(cliente) {
    var nomeDividido = cliente.nome.split(' ');
    var primeiroNome = nomeDividido[0];
    var ultimoSobrenome = nomeDividido[nomeDividido.length - 1];
    var nomeFormatado = ultimoSobrenome + ', ' + primeiroNome;
    console.log(nomeFormatado);
  });
  
  
  // Formate a variável “numero” para o seguinte formato: “(XX)_X_XXXX-XXXX”;*
  var numero = "5(1)9-876-543-21";
  
  var numeroLimpo = numero.replace(/\D/g, '');
  
  var bloco1 = numeroLimpo.slice(0, 2);
  var bloco2 = numeroLimpo.slice(2, 3);
  var bloco3 = numeroLimpo.slice(3, 7);
  var bloco4 = numeroLimpo.slice(7);
  
  var numeroFormatado = `(${bloco1})_${bloco2}_${bloco3}-${bloco4}`;
  
  console.log(numeroFormatado);
  
  /*3) Qual a ordem dos prints no console?
  4) Existe algum erro nesse código? Se sim, comente sobre?*/