 // Formate a variável “numero” para o seguinte formato: “(XX)_X_XXXX-XXXX”;*
 var numero = "5(1)9-876-543-21";
  
 var numeroLimpo = numero.replace(/\D/g, '');
 
 var bloco1 = numeroLimpo.slice(0, 2);
 var bloco2 = numeroLimpo.slice(2, 3);
 var bloco3 = numeroLimpo.slice(3, 7);
 var bloco4 = numeroLimpo.slice(7);
 
 var numeroFormatado = `(${bloco1})_${bloco2}_${bloco3}-${bloco4}`;
 
 console.log(numeroFormatado);

 