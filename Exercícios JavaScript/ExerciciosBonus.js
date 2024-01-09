/*  Questões 3 e 4 respondidas juntas.
 
3) Qual a ordem dos prints no console?
 
  Código da questão:*/

    async function a() {
        b();
        await c();
        await d();
        alertUser("a")
    }
    a();

    function b() {
        return;
        alertUser('b');
    }

    function c() {
        return new Promise((resolve) => {
            resolve();
            alertUser('c');
        });
    }

    function d() {
        return new Promise((resolve) => {
            alertUser('d');
        });
    }

    function alertUser(message) {
        console.log('A função é:' + message);
    }

/*
4) Existe algum erro nesse código? Se sim, comente sobre?
   Sim, há um erro.
   Na chamada das funções alertUser(), o "u" em "User" ficou com letra maiúscula, enquanto nas funções, o "u" está em letra minúscula.
   Por conta disso aparecem apenas erros de chamada no console.  
   Porém, quando o código é arrumado, a ordem dos prints do console fica: c,d.
 */