let score = JSON.parse(localStorage.getItem('score')) ||  {
    Win: 0,Loose: 0,Tie: 0
};
/*if(!score){
score = {
    Win: 0,Loose: 0,Tie: 0
}
}*/
updateScore();

function playGames(playerMove){
    const pick = pickComputerMove();
    let result = '';
    if(playerMove ==='scissor'){
        
        if(pick ==='rock'){
            result = 'you loose';
        }
        else if (pick ==='paper'){
            result ='you win';
        }
        else{
            result = 'Tie';
        }
        
    }
    else if(playerMove ==='paper')
    {
        if(pick ==='rock'){
            result = 'you win';
        }
        else if (pick ==='paper'){
            result ='Tie';
        }
        else{
            result = 'you loose';
        }
        

    }
    else{
        if(pick ==='rock'){
            result = 'Tie';
        }
        else if (pick ==='paper'){
            result ='you loose';
        }
        else{
            result = 'you win';
        }
        
    }
    if(result === 'you win'){
        score.Win +=1;
    }
    else if(result === 'you loose'){
        score.Loose +=1;
    }
    else if(result === 'Tie'){
        score.Tie+=1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateScore();
    document.querySelector('.result')
        .innerText = result;
    let playerMove_emoji = emoji(playerMove);
    let computerMove_emoji = emoji(pick);
   
    document.querySelector('.moves')
        .innerHTML = `you choosed <span class="emoji">${playerMove_emoji}</span> - <span class="emoji">${computerMove_emoji}</span> is choosed by Computer.`;
    /*alert(`you choosed ${playerMove}.computer choosed ${pick} .${result} 
Win:${score.Win} Loose:${score.Loose} Tie:${score.Tie}`);*/
   
}
 function updateScore(){
    document.querySelector('.score')
        .innerText = `Win:${score.Win} Loose:${score.Loose} Tie:${score.Tie}`;

 }
 
 function emoji(M){
            let move;
            if(M=== 'rock'){
                move = '&#128074;';
            }
            else if(M === 'paper'){
                move = '&#9995;'; 
            }
            else{
                move = '&#9996;';
            }
            return move;
        }
function pickComputerMove(){
    randno = Math.random();
    let pick=''; 
    if (randno<1/3){
        pick = 'rock';
    }
    else if(randno>=1/3 && randno<2/3){
        pick = 'paper';
    }
    else{
        pick = 'scissor';
    }
    return pick;

}
/*  const block = 3<5 ? 'true' : 'false'; //turnary operator
const block1 = 5 && 'hello'; //gaurd operator
const block2 = 0 || 'usd'; //default operator 

console.log(block1);
console.log(block2);
console.log(block);
//falsy values : Nan ,undefined ,null, '',0,false */


