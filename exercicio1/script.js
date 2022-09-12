let coxinha = prompt('Você quer mais coxinha? Digite "s" para Sim e "n" Não');
let conta = 0;

    while(coxinha === "s"){
        conta += 2.50;
        coxinha = prompt('Você quer mais coxinha?Digite "s" para Sim e "n" para Não');
    }
    alert("O valor total da conta é: " + conta + " reais. ");