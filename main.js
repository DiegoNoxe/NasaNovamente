const texto2 = "Descobrindo os mistérios do cosmos, um passo de cada vez: NASA, explorando fronteiras, inspirando mentes.";

let j = 0;

function efeitoSub()
{
    if(j<texto2.length)
    {
        let leitura = document.querySelector('.escrevendo2');
        leitura.textContent += texto2.charAt(j);
        j++;
        setTimeout(efeitoSub, 50);
    }

}

efeitoSub();


