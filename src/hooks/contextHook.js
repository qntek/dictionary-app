import { useContext } from "react";
import DictionaryContext from '../context/DictionaryContext';

function Context(){
  const contextData = useContext(DictionaryContext);
  return contextData
}

export default Context;