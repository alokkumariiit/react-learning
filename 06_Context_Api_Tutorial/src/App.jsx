import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import {Id} from "./context/IdContext"
function App() {
  const { userName } = useContext(UserContext);
  const {userId} = useContext(Id);

  return (
    <>
      <h1>{userName} and my useid is {userId}</h1>
    </>
  );
}

export default App;