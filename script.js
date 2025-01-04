const player1= {
    type: "x",
    jogadas:"0",
    escolhas:[]
}
const player2= {
    type: "o",
    jogadas:"0",
    escolhas:[]
}



function vezDeJogar(quadrado){
    if(player1.escolhas.includes(quadrado) || (player2.escolhas.includes(quadrado))){
        return;
    }
    const atual = document.getElementById('atual')
    if(player1.jogadas>player2.jogadas){
        atual.innerHTML='x'
        player2.escolhas[player2.jogadas] = quadrado;
        player2.jogadas++;
        const x = document.getElementById(quadrado);
        x.innerHTML="<img src='assets/o.png'>"
        setTimeout(() => {
            if (verificaVitória(player2)) {
                alert("O Venceu!");
                location.reload();
            }
        }, 50); 
    }
    else{
        atual.innerHTML='o'
        player1.escolhas[player1.jogadas] = quadrado;
        player1.jogadas++;
        const x = document.getElementById(quadrado);
        x.innerHTML="<img src='assets/x2.png'>";
        setTimeout(() => {
            if (verificaVitória(player1)) {
                alert("X venceu!");
                location.reload();
            }
        }, 50);  
    }
}

function verificaVitória(player){

    const separadas = player.escolhas.reduce((acc, seq) => {
        const match = seq.match(/([a-zA-Z]+)(\d+)/);
        if (match) {
            acc.push(match[1], match[2]);
        }
        return acc;
    }, []);
    const conta= separadas.filter(element => element === "a").length;
    if(conta==3){
        return(1);
    }
    const contb= separadas.filter(element => element === "b").length;
    if(contb==3){
        return(1);
    }
    const contc= separadas.filter(element => element === "c").length;
    if(contc==3){
        return(1);
    }
    const cont1= separadas.filter(element => element === "1").length;
    if(cont1==3){
        return(1);
    }
    const cont2= separadas.filter(element => element === "2").length;
    if(cont2==3){
        return(1);
    }
    const cont3= separadas.filter(element => element === "3").length;
    if(cont3==3){
        return(1);
    }
    if(player.escolhas.includes("a1") && player.escolhas.includes("b2") && player.escolhas.includes("c3") ||player.escolhas.includes("a3") && player.escolhas.includes("b2") && player.escolhas.includes("c1")){
        return(1);
    }

}