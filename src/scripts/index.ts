console.log("script carregado")
const resultadoParagrafo = document.getElementById("resultado") as HTMLParagraphElement;
const convercaoParagrafo = document.getElementById("convertido") as HTMLParagraphElement;
const body = document.getElementById('body') as HTMLBodyElement;
const animacaoDiv = document.getElementById('animacao') as HTMLDivElement;

function calcTemp(valor: number , escala: string){
    if(escala === "c"){
        const res: number = valor;
        resultadoParagrafo.textContent = "Conversão feita!";
        convercaoParagrafo.textContent = `${valor} C° é ${res} C°` 
    }else if(escala === "f"){
        const res: number = (valor*9/5)+32;
        resultadoParagrafo.textContent = "Conversão feita!";
        convercaoParagrafo.textContent = `${valor} C° é ${res} °F`
    }else if(escala === "k"){
        const res: number = valor +  273.15;
        resultadoParagrafo.textContent = "Conversão feita!";
        convercaoParagrafo.textContent = `${valor} C° é ${res} K`
    }
}

function atualizarAnimacao(temp: number) {
    animacaoDiv.innerHTML = '';

    if (temp <= 15) {
        for (let i = 0; i < 20; i++) {
            const floco = document.createElement('div');
            floco.className = 'flocos';
            floco.style.left = `${Math.random() * 100}%`;
            floco.style.animationDelay = `${Math.random() * 5}s`;
            animacaoDiv.appendChild(floco);
        }
    } else if (temp > 25) {
        const sol = document.createElement('div');
        sol.className = 'sol';
        animacaoDiv.appendChild(sol);
    } else {
        for (let i = 0; i < 15; i++) {
            const folha = document.createElement('div');
            folha.className = 'folhas';
            folha.style.left = `${Math.random() * 100}%`;
            folha.style.animationDelay = `${Math.random() * 8}s`;
            animacaoDiv.appendChild(folha);
        }
    }
}

function atualizarBackground(temp: number) {

    body.classList.remove('bg-frio', 'bg-quente', 'animate-frio', 'animate-quente');

    if (temp <= 15) {
        body.classList.add('bg-frio', 'animate-frio');
    } else if (temp > 25) {
        body.classList.add('bg-quente', 'animate-quente');
    }
}

document.getElementById("converter")!.addEventListener("click", ()=>{
    resultadoParagrafo.classList.add('p-2');
    convercaoParagrafo.classList.add('p-2');
    const temp = Number((document.getElementById("valor") as HTMLInputElement).value);
    const escala = (document.getElementById("escala") as HTMLSelectElement).value;
    calcTemp(temp, escala);
    atualizarBackground(temp);
    atualizarAnimacao(temp)
});

window.onload = () => {
    const tempInicial = Number((document.getElementById("valor") as HTMLInputElement).value);
    atualizarBackground(tempInicial);
    atualizarAnimacao(tempInicial);
};