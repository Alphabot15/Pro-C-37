class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
  question.hide()

 background("lightGreen")
text("Resultados",width/2-30,40)

 
 Contestant.getPlayerInfo()

   
if (allContestants!==undefined){
  fill("blue")
  textSize(20)
  text("Nota:El que sea correcta sera resaltado de color verde!",130,230);
  var y=300
  for(var plr in allContestants){
      var correctAns ="2";
      if(correctAns ===allContestants[plr].answer)
      fill("green")
      else
      fill("red");
    
    text(allContestants[plr].name+":"+allContestants[plr].answer,300,y)
    y=y+50
    }
}
 
  }
}
