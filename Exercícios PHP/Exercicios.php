<?php

$nomes = ['Francisco Souza', 'Guilherme Rosa', 'Arthur Golveia'];
$cliente1 = new stdClass();
$cliente1->nome = $nomes[0];
$cliente2 = new stdClass();
$cliente2->nome = $nomes[1];
$cliente3 = new stdClass();
$cliente3->nome = $nomes[2];
$arrayDeClientes = [$cliente1, $cliente2, $cliente3];

$arrayDeNascimento = [
    'Francisco Souza' => '10-12-1996',
    'Arthur Golveia' => '14-01-2000',
    'Guilherme Rosa' => '26-05-1985',
    'Marcelo Planalto' => '26-05-1985'
    ];

/*1) Utilizando a variável $arrayDeClientes de um echo no nome do segundo cliente.*/
echo $arrayDeClientes[1]->nome;

/*2) Utilize a estrutura de dados $arrayDeNascimento para adicionar na estrutura
$arrayDeClientes a data de nascimento de cada cliente.*/
foreach ($arrayDeClientes as $cliente) {
    $cliente->data_nascimento = $arrayDeNascimento[$cliente->nome];
}

/*3) Faça a ordenação e impressão da estrutura $arrayDeClientes resultante do exercício
2 pela data de nascimento (pode ser ascendente ou descendente).*/

function compareBirthdates($a, $b) {
    global $arrayDeNascimento;
    return strtotime($arrayDeNascimento[$a->nome]) - strtotime($arrayDeNascimento[$b->nome]);
}

usort($arrayDeClientes, 'compareBirthdates');

foreach ($arrayDeClientes as $cliente) {
    echo "$cliente->nome nascido em $cliente->data_nascimento" . PHP_EOL;
}

?>


