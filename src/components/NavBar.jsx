import { Link, useParams } from "react-router-dom";
import { AppBar, FormHelperText, InputAdornment, Tab, Tabs, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AddBoxIcon from "@mui/icons-material/AddBox";

const NavBar = ({ singleView, setSingleView,searchName,setSearchName }) => {

  const [str,setStr] = useState("")
  const playerId = useParams();

  const textBoxStyles = {
    width: 200,
    height: "auto",
    backgroundColor: "white",
    borderRadius: "20px",
    padding: 0,
    border: "0px solid primary",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" enableColorOnDark={true}>
        <Toolbar>
          <IconButton style={{ paddingRight: "10px" }}>
            <SportsSoccerIcon fontSize="large" htmlColor="white" />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, paddingLeft: "10px" }}
          >
            Puppy Bowl
          </Typography>
          <IconButton
            style={{ paddingRight: "10px" }}
            onClick={() => setSingleView(true)}
          >
            <Link to="/">
              <HomeIcon fontSize="large" htmlColor="white" />
              <FormHelperText>Home</FormHelperText>
            </Link>
          </IconButton>
          <IconButton style={{ paddingRight: "50px" }}>
            <Link to="/newplayer">
              <AddBoxIcon fontSize="large" htmlColor="white" />
              <FormHelperText>New Player</FormHelperText>
            </Link>
          </IconButton>
          <TextField
            style={textBoxStyles}
            value={str}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search By Name ..."
            variant="outlined"
            onChange={(e) => setStr(e.target.value)}
          />
          <IconButton  onClick={()=>{setSearchName(str)}}>
            <Link to="/search">
              <SearchIcon htmlColor="white" fontSize="large" />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* <Link to={`players/${playerId.id}`}>Search</Link> */}
    </Box>
  );
};

export default NavBar;
