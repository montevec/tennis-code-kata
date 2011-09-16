module("one player", {
	setup: function() {
		player = new Player();
                player.name = 'Player one';
		player_two = new Player();
                player_two.name = 'Player two';
		game = new Game(player, player_two);
	}
});

test('Test name', function(){
	player.name = 'Player one';
	equal('Player one', player.name);
})


test('Test hasWonGame', function(){
	
	ok(!game.getWinner());
        
	game.playerWonBall(0);
	
        
	ok(!game.getWinner());
	equal(game.getScore(),'15 - 0');

	game.playerWonBall(0);
	
	ok(!game.getWinner());
	equal('30 - 0', game.getScore());
		
	game.playerWonBall(0);
	
	ok(!game.getWinner());
	equal('40 - 0', game.getScore());
		
	game.playerWonBall(0);
	equal('Player one', game.getScore());
        
	equal(game.getWinner(),player.name);
})


module("two player", {
	setup: function() {
		player_one = new Player();
        player_one.name = 'Player one';
		player_two = new Player();
        player_two.name = 'Player two';
		
		game = new Game(player_one, player_two);
	}
});

test('Test deuce', function(){

	game.playerWonBall(0);
	equal('15 - 0', game.getScore());

	game.playerWonBall(0);
	equal('30 - 0', game.getScore());
		
	game.playerWonBall(0);
	equal('40 - 0', game.getScore());
	
	game.playerWonBall(1);
	equal('40 - 15', game.getScore());
	
	game.playerWonBall(1);
	equal('40 - 30', game.getScore());
	
	game.playerWonBall(1);
	equal('40 - 40', game.getScore());
	
	ok(game.isDeuce());
		
	ok(!game.getWinner());
	
	game.playerWonBall(0);
        
        equal(game.getScore(),'40 adv - 40');
	
	ok(!game.getWinner());
	ok(!game.isDeuce());

	game.playerWonBall(1);

	ok(!game.getWinner());
	ok(game.isDeuce());

        game.playerWonBall(0);
        game.playerWonBall(0);

	equal(player_one.name, game.getWinner());
        
})

test('Test player 2 wins', function(){

	game.playerWonBall(0);
	game.playerWonBall(0);
	game.playerWonBall(0);
	game.playerWonBall(1);
	game.playerWonBall(1);
	game.playerWonBall(1);
	ok(game.isDeuce());

	ok(!game.getWinner());

	game.playerWonBall(1);

	ok(!game.getWinner());
	ok(!game.isDeuce());

	game.playerWonBall(0);

	ok(!game.getWinner());
	ok(game.isDeuce());

        game.playerWonBall(1);
        game.playerWonBall(1);
        
	equal(game.getWinner(),player_two.name);
})