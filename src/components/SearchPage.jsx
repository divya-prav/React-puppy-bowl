import { Card ,CardMedia,CardContent,Typography} from "@mui/material";
import { fetchAllPlayers } from "../API";
import { useState, useEffect } from "react";

const SearchPage = ({ searchName,setSearchName }) => {
  const [players, setPlayers] = useState(null);
  const [filteredPlayers, setFilteredPlayers] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchAllPlayers();
      setPlayers(response);

      searchHandler(searchName,players);
    
    }
    if(searchName !== "")fetchData();
   

  });

  async function searchHandler(searchName,playerArr) {
    
    const playersStartsWithStr = playerArr.filter((player) => {
      return player.name.toLowerCase().startsWith(searchName.toLowerCase());
    });
    setFilteredPlayers(playersStartsWithStr);

  }

  return (
    <>
    <h1>Search results {filteredPlayers !== 0 ? <i>for {searchName}</i>:<i>Not Found</i>} </h1>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        margin: "50px",
      }}
    >
      
      {filteredPlayers ?
        (filteredPlayers.map((player) => {
          return (
            <div key={player.id} style={{ margin: 20 }}>
              <Card variant="elevation" sx={{ minWidth: 275 }}>
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
              </Card>
            </div>
          );
        })):<h2>Results Not Found</h2>}
    </div>
    </>
  );
};

export default SearchPage;
