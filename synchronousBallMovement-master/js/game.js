class Game{
    constructor(){

    }
    
    getState(){
     var getStateref = database.ref("gameState")
 getStateref.on("value",function(data){
     gameState = data.val()
 })

    }
    update (state){
database.ref("/").update({
    gameState:state
})
    }

    async start(){
        if (gameState===0){
            player = new Player ();
            var playerCountref = await database.ref("playerCount").once("value")
            if (playerCountref.exists()){
                playerCount = playerCountref.val()
            player.getCount()
            }
            form = new Form();
            form.display();
            
        }
        car1 = createSprite (100,200,40,40)
        car2 = createSprite (300,200,40,40)
        car3 = createSprite (500,200,40,40)
        car4 = createSprite (700,200,40,40)
        cars = [car1,car2,car3,car4]
    }
    play(){
        form.hide()
        text("game start",120,100)
        Player.getPlayerInfo()
         if (allPlayers!==undefined){
             var index = 0;
             var x = 0;
             var y;
             
             for(var plr in allPlayers){
                
                index = index +1;
                x = x +200;
                y = displayHeight-allPlayers[plr].distance
                cars[index-1].x=x
                cars [index-1].y=y;
                if (index === player.index){
                    cars[index-1].shapeColor = "red" 
                } 
          }
             
         }    
         if (keyIsDown(UP_ARROW)&&player.index!==null){
             player.distance += 50;
             player.update();

         }
         drawSprites();
    }
}