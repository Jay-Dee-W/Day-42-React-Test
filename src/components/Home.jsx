import { useContext, useState } from "react";
import {firebaseApp} from "../db/firebase";
import Profile from "./Profile";
import Plan from './Plan'
import OverView from "./Overview";
import Details from "./details";
import { AuthContext } from "../context/Auth";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [page, setPage] = useState() 

  const changePage =(pageName) => {
      setPage(pageName)
  }


 
  return (
    <>
      <button value='profile' onClick={e => changePage(e.target.value)} > Profile </button>
      <button value='plan' onClick={e => changePage(e.target.value)} > Plan a trip </button>
      <button value='details' onClick={e => changePage(e.target.value)} > Trip Details </button>
      <button value='overview' onClick={e => changePage(e.target.value)} > Trips OverView </button>
      <p>{currentUser.email}</p>
      {page === 'plan' ? <Plan /> 
      : page === 'details' ? <Details />
      : page === 'overview' ? <OverView />
      : <Profile />
      }
      <button onClick={() => firebaseApp.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;