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
        return(alert("Este espaço já está preenchido!"))
    }
    if(player1.jogadas>player2.jogadas){
        player2.escolhas[player2.jogadas] = quadrado;
        player2.jogadas++;
        const x = document.getElementById(quadrado);
        console.log(x)
        x.innerHTML="<img src='assets/o.png'>"
    }
    else{
        player1.escolhas[player1.jogadas] = quadrado;
        player1.jogadas++;
        const x = document.getElementById(quadrado);
        console.log(x)
        x.innerHTML="<img src='assets/x2.png'>"
    }
    console.table(player1);
    console.table(player2);
}

function verificaVitória(){
    
}