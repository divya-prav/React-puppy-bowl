import { BrowserRouter,Routes,Route } from "react-router-dom"
import AllPlayers from "./components/AllPlayers"
import SinglePlayer from "./components/Singleplayer"
import NewPlayerForm from "./components/NewPlayerForm"
import NavBar from "./components/NavBar"
import { useState } from "react"
import SearchPage from "./components/SearchPage"


function App() {
      
    const [singleView,setSingleView] = useState(true);
    const [id,setId] = useState(null);
    const [searchName,setSearchName] = useState("");
  

  return (
         <>
         
        
         <BrowserRouter>
         <NavBar singleView={singleView} setSingleView={setSingleView} searchName={searchName} setSearchName={setSearchName}/>
         <Routes>
          <Route
           path="/"
            element={ singleView ? <AllPlayers singleView={singleView} setSingleView={setSingleView} id = {id} setId={setId}/> :
          <SinglePlayer singleView={singleView} setSingleView={setSingleView} id={id} setId={setId}/>}/>
           {/* <Route path='/' element={<AllPlayers singleView={singleView} setSingleView={setSingleView}/>}/> */}
          <Route path='/players/:id' element={<SinglePlayer singleView={singleView} setSingleView={setSingleView}/>}/> 
          <Route path="/newplayer" element ={<NewPlayerForm/>}/>
          <Route path="/search" element={<SearchPage searchName={searchName} setSearchName={setSearchName}/>}/>
         </Routes>
         </BrowserRouter>
         </>
  )
}

export default App
