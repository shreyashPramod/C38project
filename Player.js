class Player {
    constructor(){

        this.rank=null;
    }
     getCount(){ 
         var playerCountRef = database.ref('playerCount'); 
         playerCountRef.on("value",function(data){ playerCount = data.val();
        }) } updateCount(count){ database.ref('/').update({ playerCount: count
        }); 
       } update(name){ var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({ name:name }); } }

        getPlayersAtEnd()
        {
           database.ref('PlayerAtEnd').on("value",(data)=>
           {
              this.rank = data.val(); 
           })
        }
           static.updatePlayerAtEnd(rank)
         { 
              database.ref('/').update({ CarsAtEnd:rank 
             }) 
         }
     

