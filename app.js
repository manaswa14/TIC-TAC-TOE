let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let newgamebtn= document.querySelector("#newbtn");
let msg = document.querySelector("#msg");
let mesgcont = document.querySelector(".msg-container");




let turnx = true;
const winning_pattern = [[0,1 ,2] , [3,4,5] , [6,7,8] , [0,3,6] , [1,4,7] , [2,5,8] , [0,4,8,] ,[2,4,6]];
let count = 0;
let winnerfound = false;


const reset_game = () =>{
    turnx = true;
    enable_boxes();
    winnerfound = false;
    count = 0; //reset count to 0
    mesgcont.classList.add("hide");
    


}


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
        count++;//we have to calculate total counts not only of x or y 
        console.log("count =", count);

        
        box.disabled = true;
        let winenrfound = check_winner();
        if(winnerfound)return;
        if(count == 9 && !winenrfound){
            console.log("draw");
            gamedraw();
            //display game drawn

        }

    


    });

    

});
const gamedraw = () =>{
    msg.innerText = "GAME DRAWN";
    mesgcont.classList.remove("hide");
    disabled_boxes();
};












const check_winner = () => {
    for(let p of winning_pattern){
        let pos1 = boxes[p[0]].innerText;
        let pos2 = boxes[p[1]].innerText;
        let pos3 = boxes[p[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){

                console.log("winner" , pos1);
                show_winner(pos1);
                return true;
            }
        }




    };

        
        

           
    
};

const enable_boxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
}
const disabled_boxes = () =>{
    for(box of boxes){
        box.disabled = true;

    }
}
const show_winner = (winner) =>{

    winnerfound = true;
    console.log("winner true");

    msg.innerText = `CONGRATULATIONS , WINNER IS ${winner}`;
    
    mesgcont2.classList.add("hide")
    disabled_boxes();

};

newgamebtn.addEventListener("click" , reset_game);
reset.addEventListener("click" , reset_game);






