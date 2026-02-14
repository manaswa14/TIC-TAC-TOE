let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let newgamebtn= document.querySelector("#newgame");
let msg = document.querySelector(".message");


let turnx = true;
const winning_pattern = [[0,1 ,2] , [3,4,5] , [6,7,8] , [0,3,6] , [1,4,7] , [2,5,8] , [0,4,8,] ,[2,4,6]];


const check_winner = () => {
    for(let p of winning_pattern){
        let pos1 = boxes[p[0]].innerText;
        let pos2 = boxes[p[1]].innerText;
        let pos3 = boxes[p[2]].innerText;


        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log("winner" , pos1 );

            }
        }
    }
};


boxes.forEach ((box) => {

    box.addEventListener("click" , ()=>{
        console.log("button is clicked");
        if(turnx){
            box.innerText = "X";
            turnx = false;
        }else{
            box.innerText = "O";
            turnx= true;


        }
        box.disabled = true;
        check_winner();

    


    });

    

});



