let check=true;
let win=true
let count=0;
function winCheck(n){
    r = false
    let lines = [
        ['num1', 'num2', 'num3'],
        ['num4', 'num5', 'num6'],
        ['num7', 'num8', 'num9'],

        ['num1', 'num4', 'num7'],
        ['num2', 'num5', 'num8'],
        ['num3', 'num6', 'num9'],

        ['num1', 'num5', 'num9'],
        ['num3', 'num5', 'num7']
    ];
    for(i of lines) {
        let box1 = document.getElementById(i[0]).innerHTML;
        let box2 = document.getElementById(i[1]).innerHTML;
        let box3 = document.getElementById(i[2]).innerHTML;

        if (i.includes(n)) {
            r |= (box1 == box2) && (box2 == box3)
        }
    }
    return r;
}

for(let i=1;i<10;i++){
    document.getElementById('num'+i).addEventListener("click",e=>{
        if(!(e.target.innerHTML)&&win){
            e.target.innerHTML=check?"X":"O";
            if(winCheck(e.target.id)){
                alert("the winner is "+(check?"X":"O"));
                win=false
            }
            check=!check;
            count<9?count++:'';
            count==9&&win?alert('draw'):'';
        }
    })
}