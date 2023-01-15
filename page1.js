
let sum=0;
var black=false;
var message;
var alive=false;
let cards=[];
let player={
    name:'per',
    chips:145,
}
document.getElementById('name').innerText=player.name+": "+"$"+player.chips;
function randomnum()
{let r=Math.floor(Math.random()*13)+1;
    if (r > 10) {
        return 10;
    } else if (r == 1) {
        return 11;
    } else {
        return r;
    }
}
function startgame()
{
    alive = true;
    let f1=randomnum();
    let f2=randomnum();
    cards=[f1,f2];
    sum=f1+f2;
rendergame();
}

function rendergame()
{document.getElementById('card').innerText="Card: ";
    for(let i=0; i<cards.length;i++)
    {
document.getElementById('card').innerText +=" "+cards[i] +" " ;
    }
document.getElementById('sum').innerText=" Sum:" + sum;
if(sum<=20)
{
message="Do You Want a new card? "
document.getElementById('mess').innerText=message;
}
else if(sum===21)
{ message="Wohoo! You've got Blackjack! ";
document.getElementById('mess').innerText=message;
black=ture;
}
else 
{
message="You're out of the game !";
document.getElementById('mess').innerText=message;
alive=false;
}
}
function newcard()
{
if (alive == true && black == false) {
        var newcard=randomnum();
        cards.push(newcard);
        sum +=newcard;
    rendergame();
    }

}
