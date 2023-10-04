import {
  Box,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { addNewPlayer } from "../API";

const NewPlayerForm = () => {
  const statusValue = [{ value: "bench" }, { value: "field" }];
  const team = [{id:4, value: "Fluff" }, {id:3, value: "Ruff" }];
  const [name,setName] = useState("");
  const [breed,setbreed] = useState("");
  const [imageUrl,setimageUrl] = useState("");
  const [status,setStatus] = useState("");
  const [teamId,setTeamId] = useState("");
  const [error,setError] = useState(null);
  const [success,setSuccess] = useState(null);

  const onSubmitHandler = async () =>{
   
    try{
        if(name !== null && breed !== null && imageUrl !== null && status !== null && teamId !== null){
            const playerObj ={
                name:name,
                breed:breed,
                imageUrl:imageUrl,
                status:status,
                teamId:teamId
            }

            setError(null);
            const response = await addNewPlayer(playerObj);
            const newPlayerId = response.data.newPlayer.id;
            setSuccess(`Successfully Id-${newPlayerId} is created`);
            console.log(response.data.newPlayer.id);
            setName("");
            setbreed("")
            setStatus("")
            setTeamId("")
            setimageUrl("");
        }
        else{
            setError("Please fill all Required fields")
        }

    }catch(e){
        console.error(e.message);
    }
   
  }

  return (
    <Box  component="form" sx={{ m: 10, width: 500, maxWidth: "100%" }} autoComplete="off">
        {error && <p style={{color:"red"}}>{error}</p>}
        {success && <h2 style={{color:"green"}}>{success}</h2>}
       <Typography variant="h5" color="primary" gutterBottom>Create New Player</Typography>
       <FormHelperText>Note: All field required</FormHelperText><br></br>
      <TextField label="Name" variant="filled" value={name} fullWidth required
      onChange={(e)=>setName(e.target.value)} />
      
      <br></br>
      <br></br>

      <TextField label="Breed" variant="filled" fullWidth required value={breed}
      onChange={(e)=>setbreed(e.target.value)}
      />

      <br></br>
      <br></br>

      <TextField label="Image Url" variant="filled" fullWidth required value={imageUrl}
      onChange={(e)=>setimageUrl(e.target.value)}
      />

      <br></br>
      <br></br>

      <TextField
        select
        label="Select Status"
        defaultValue="bench"
        variant="filled"
        fullWidth
        required
        value={status}
        onChange={(e)=>setStatus(e.target.value)}
      >
        {statusValue.map((val) => (
          <MenuItem key={val.value} value={val.value}>
            {val.value}
          </MenuItem>
        ))}
      </TextField>

      <br></br>
      <br></br>

      <TextField
        select
        label="Team"
        defaultValue="Fluff"
        variant="filled"
        required
        fullWidth
        value={teamId}
        onChange={(e)=>{setTeamId(e.target.value)}}
      >
        {team.map((val) => (
          <MenuItem key={val.id} value={val.id}>
            {val.value}
          </MenuItem>
        ))}
      </TextField>

      <br></br>
      <br></br>
      <Button variant="contained" onClick={onSubmitHandler}>
        Add Player
      </Button>
    
    </Box>
  );
};

export default NewPlayerForm;
