 const URL = "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF";
 
 export const fetchAllPlayers =async () =>{
    try{
        const response = await fetch(`${URL}/players`);
        const result = await response.json();
        return result.data.players;


    }catch(e){
        console.error(e.message);
    }

  
  }

  export const fetchSinglePlayer = async (playerId) =>{
    try{
        const response =await fetch(`${URL}/players/${playerId}`)
        const result = await response.json();
        return result.data.player;

    }
    catch(e){
        console.error(e.message);
    }
  }

  export const addNewPlayer = async (player) => {
    try{
        const response = await fetch(`${URL}/players`,{
            method : 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(player),
        });
        const result = await response.json();
        console.log(result)
        return result;

    }
    catch(e){
        console.log("OOps,Something went Wrongwith adding that player!", e) 
    }
  }

  export const removePlayer = async (playerId)=>{
    try{
        const response = await fetch(`${URL}/players/${playerId}`,{
            method: "DELETE",
        })
        const playerDeleted = await response.json();
        console.log(playerDeleted);
         return playerDeleted;
    }
    catch(e){
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            e
          );
    }
  }