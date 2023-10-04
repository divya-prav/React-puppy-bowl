import { useEffect, useState } from "react";
import { fetchAllPlayers } from "../API";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { removePlayer } from "../API";

const AllPlayers = ({singleView,setSingleView,setId}) => {
  const [players, setPlayers] = useState(null);
  const [delMessage,setdelMessage] = useState(null);
 
  useEffect(() => {
    async function fetchData() {
      const data = await fetchAllPlayers();
      setPlayers(data);
    }
    fetchData();
    setdelMessage(null);
  }, [delMessage]);

  const clickHandler = (e) =>{
     console.log(e)
     setId(e);
     setSingleView(!singleView);
  }

  const deleteClickHandler = async (e) =>{
       const deletePlayer = await removePlayer(e);
       console.log(deletePlayer);
       setdelMessage(e);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        margin: "50px",
      }}
    >
      {players &&
        players.map((player) => {
          return (
            <div key={player.id} style={{ margin: 20 }}>
              <Card
                variant="elevation"
                sx={{ minWidth: 275 }}
                
              >
                <CardMedia
                  sx={{ height: 250 }}
                  image={player.imageUrl}
                  title={player.name}
                />

                <CardContent style={{ paddingBottom: 20 }}>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                   {player.name}
                  </Typography>

                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Breed: {player.breed}
                  </Typography>
                </CardContent>
                <CardActions style={{ paddingBottom: 20 }}>
                  <Button  variant="contained" size="small" value={player.id} onClick={(e) => clickHandler(e.target.value)}>See details</Button>
                  <Button variant="contained" size="small" value={player.id} onClick={(e)=>deleteClickHandler(e.target.value)}>Delete</Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default AllPlayers;
