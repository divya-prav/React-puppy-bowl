 import { useEffect, useState } from "react";
import { fetchSinglePlayer } from "../API";
import { Button, Card, CardActions ,CardMedia,CardContent,Typography} from "@mui/material";


const SinglePlayer = ({singleView,setSingleView,id}) => {
    const [currPlayer,setCurrPlayer] = useState(null);

    useEffect(()=>{
         async function fetchData(){
            try{
                const data = await fetchSinglePlayer(id);
                setCurrPlayer(data)
            }
            catch(e){
                console.error("cannot fetch")
            }
        }
        fetchData();
    },[id])
    return (
      currPlayer &&  <Card
      variant="elevation"
      elevation={3}
      sx={{ minWidth: 100 }}
      style={{margin:100,width:"500px"}}
      alignItems="center"
      >
        <CardMedia
                 sx={{ height: 500 }}
                 image={currPlayer.imageUrl}
                 title={currPlayer.name}
               /> 
          <CardContent style={{ paddingBottom: 20 }}>
                 <Typography variant="h6" color="text.secondary" gutterBottom>
                  Name: {currPlayer.name}
                 </Typography>

                 <Typography
                   sx={{ fontSize: 20 }}
                   color="text.secondary"
                   gutterBottom
                 >
                   Player Id: {currPlayer.id}
                 </Typography>
                 <Typography
                   sx={{ fontSize: 20 }}
                   color="text.secondary"
                   gutterBottom
                 >
                   Breed: {currPlayer.breed}
                 </Typography>
                 <Typography
                   sx={{ fontSize: 18 }}
                   color="text.secondary"
                   gutterBottom
                 >
                   Status: {currPlayer.status}
                 </Typography>
                 <Typography
                   sx={{ fontSize: 18 }}
                   color="text.secondary"
                   gutterBottom
                 >
                   Team Name: {currPlayer.teamId === 3? "Ruff":"Fluff"}
                 </Typography>
               </CardContent> 
               <CardActions>
                   <Button variant="contained" onClick={()=>setSingleView(!singleView)} >Close</Button>
                   </CardActions>      

      </Card>
    )
}

export default SinglePlayer;