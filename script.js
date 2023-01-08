let Player1 = 'X';
let Player2 = 'O';

let Title = document.getElementById('Heading');

let Boxes = Array.from(document.getElementsByClassName('Box'));

let CurrentPlayer=Player1;

let Spaces = Array(9).fill(null);

const Start = () => {
    Boxes.forEach(Box => Box.addEventListener('click',Clicked))
}

function Clicked(element)
{
    const index = element.target.id;
    
    if(!Spaces[index])
    {
        Spaces[index] = CurrentPlayer;
        element.target.innerText = CurrentPlayer;

        if(WinningCombo() !== false)
        { 
            
            let WinningBoxes = WinningCombo();
            WinningBoxes.map( Box => Boxes[Box].style.backgroundColor = '#0d7c97d6');
            return ;
        }
               CurrentPlayer = CurrentPlayer == Player1 ? Player2 : Player1 ;
    }    

}

const Combos=[ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];

function WinningCombo()
{
    for (const i of Combos)
    {
        let [a,b,c] = i;

        if(Spaces[a] &&(Spaces[a]==Spaces[b] && Spaces[a] == Spaces[c]))
        {
            if(Spaces[a,b,c]=='X')
            {
                CurrentPlayer=null;
                Title.innerHTML ='🎉Hurray! Player 1 has won🥳';
            }

            if(Spaces[a,b,c]=='O')
            { 
                CurrentPlayer=null;
                Title.innerHTML ='🎉Hurray! Player 2 has won🥳';
            }
            

            return[a,b,c];
        }
                
    }
    return false;  
}

function Restart()
{
    history.go(0);
}


Start();
