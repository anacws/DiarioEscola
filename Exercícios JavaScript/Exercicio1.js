/*Percorra o objeto clientes e mostre o nome da cada cliente da seguinte maneira:
“ultimoSobrenome, primeiroNome”;*/

//corrigindo o objeto clientes
var clientes = [
    {
      'id': 1,
      'nome': 'Luis Santos Silveira',
      'idade': 18
    },
    {
      'id': 2,
      'nome': 'Ricardo Lopes Alves',
      'idade': 30
    },
    {
      'id': 3,
      'nome': 'Gustavo Silva Junior',
      'idade': 26
    }
  ];  
  
  clientes.forEach(function(cliente) {
    var partesNome = cliente.nome.split(' ');
    var ultimoSobrenome = partesNome.pop();
    var primeiroNome = partesNome.join(' ');
  
    console.log(ultimoSobrenome + ', ' + primeiroNome);
  });