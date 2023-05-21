<?php

$nomes = ['Francisco Souza', 'Guilherme Rosa', 'Arthur Golveia'];

$arrayDeNascimento = [
    'Francisco Souza' => '10-12-1996',
    'Arthur Golveia' => '14-01-2000',
    'Guilherme Rosa' => '26-05-1985',
    'Marcelo Planalto' => '26-05-1985'
];

$cliente1 = new stdClass();
$cliente1->nome = $nomes[0];
$cliente1->dataNascimento = $arrayDeNascimento[$cliente1->nome];

$cliente2 = new stdClass();
$cliente2->nome = $nomes[1];
$cliente2->dataNascimento = $arrayDeNascimento[$cliente2->nome];

$cliente3 = new stdClass();
$cliente3->nome = $nomes[2];
$cliente3->dataNascimento = $arrayDeNascimento[$cliente3->nome];

$arrayDeClientes = [$cliente1, $cliente2, $cliente3];

// Função de comparação para ordenação pela data de nascimento
function compararDataNascimento($cliente1, $cliente2) {
    $data1 = strtotime(str_replace('-', '/', $cliente1->dataNascimento));
    $data2 = strtotime(str_replace('-', '/', $cliente2->dataNascimento));
    return $data1 - $data2;
}

// Ordenar o array de clientes pela data de nascimento
usort($arrayDeClientes, 'compararDataNascimento');

//1) Utilizando a variável $arrayDeClientes de um echo no nome do segundo cliente.
echo $arrayDeClientes[1]->nome;

//2) Utilize a estrutura de dados $arrayDeNascimento para adicionar na estrutura $arrayDeClientes a data de nascimento de cada cliente.
foreach ($arrayDeClientes as $cliente) {
    echo $cliente->nome . ' - Data de Nascimento: ' . $cliente->dataNascimento . '<br>';
}

// 3) Faça a ordenação e impressão da estrutura $arrayDeClientes resultante do exercício 2 pela data de nascimento (pode ser ascendente ou descendente).

foreach ($arrayDeClientes as $cliente) {
    echo $cliente->nome . ' - Data de Nascimento: ' . $cliente->dataNascimento . '<br>';
}
?>
