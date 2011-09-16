/*
 * Solution for Tennis Code Kata 
 * http://codingdojo.org/cgi-bin/wiki.pl?KataTennis
 */

function Game(player1, player2){

       
    this.players = new Array; 
    this.players[0] = player1;
    this.players[1] = player2;
    
    this.players[0].score = 0;
    this.players[1].score = 0;

    
    this.second_game = false;
    this.winner = false;
    
    this.scores_second_game = new Array (2);
    for (i = 0; i < 2; ++i) this.scores_second_game [i] = new Array (2);
       
    this.scores_second_game[0][0] = "40 - 40";
    this.scores_second_game[0][1] = "40 - 40 adv";    
    this.scores_second_game[1][0] = "40 adv - 40";
    this.scores_second_game[1][1] = "40 - 40";
    
    this.scores = new Array (5);
    for (j = 0; j < 5; ++j) this.scores [j] = new Array (5);

    this.scores[0][0] = "0 - 0";
    this.scores[0][1] = "0 - 15";
    this.scores[0][2] = "0 - 30";
    this.scores[0][3] = "0 - 40";
    this.scores[0][4] = "0 - 40";
    
    this.scores[1][0] = "15 - 0";
    this.scores[1][1] = "15 - 15";
    this.scores[1][2] = "15 - 30";
    this.scores[1][3] = "15 - 40";    
    this.scores[1][4] = "0 - 40";
    
    this.scores[2][0] = "30 - 0";
    this.scores[2][1] = "30 - 15";
    this.scores[2][2] = "30 - 30";
    this.scores[2][3] = "30 - 40";
    this.scores[2][4] = "0 - 40";
    
    this.scores[3][0] = "40 - 0";
    this.scores[3][1] = "40 - 15";
    this.scores[3][2] = "40 - 30";
    this.scores[3][3] = "40 - 40";
    this.scores[3][4] = "0 - 40";

    this.scores[4][0] = "40 - 0";
    this.scores[4][1] = "40 - 15";
    this.scores[4][2] = "40 - 30";
    this.scores[4][3] = "40 - 40";
    this.scores[4][4] = "40 - 40";
    
     
}


Game.prototype.getWinner = function(){
        
       return this.winner;
        
}

Game.prototype.getScore = function(){
            
       
       return (this.getWinner() || this.second_game &&  this.scores_second_game[(this.players[0].score % 3)][(this.players[1].score % 3)] || this.scores[this.players[0].score][this.players[1].score]);
       
       
    
}

Game.prototype.playerWonBall = function(index){
           
        
       this.players[index].score++;
       
       if(!this.second_game && this.players[index].score == 4 && this.players[((index+1) % 2)].score < 3){
           
           this.winner = this.players[index].name;
           
       }
       
       if(this.second_game && ((this.players[index].score - this.players[((index+1) % 2)].score) >= 2 ) ){
           
           this.winner = this.players[index].name;
           
       }
       
        if(!this.second_game && this.players[index].score == 4){
       
            this.second_game = true;
           
       }
    
    
}



Game.prototype.isDeuce = function(){
        
	return (this.players[0].score >= 3 && this.players[0].score == this.players[1].score);
}


function Player() {
       
       this.name = 'gabanazza';
        
}