import { useContext } from 'react';
import DictionaryContext from '../context/DictionaryContext';
import Header from './Header';
import SingleDefinition from './SingleDefinition';

function Definition() {
const {modeLight, word} =  useContext(DictionaryContext);

const definitions = word.meanings.map(meaning => {
  return (
    <SingleDefinition key={meaning.definitions[0].definition} meaning={meaning} modeLight={modeLight}/>
  )
})

return <div className="container mt-5">
  <Header/>
  {definitions}
</div>
}

export default Definition;