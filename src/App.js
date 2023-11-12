import {useState} from 'react'
import {FiSearch} from 'react-icons/fi';
import './style.css';

import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if(input === ''){
      alert("Preencha com algum CEP")
      return
    }

    try {
      const response = await api.get(`${input}/json`);
      console.log(response.data)
      setCep(response.data)
      setInput("")

    }catch{
      alert('CEP Inexistente!')
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title">DESCUBRIDOR DE CEP</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu CEP..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#fff'/>
        </button>
      </div>


    {Object.keys(cep).length > 0 && (
      <main className='main'>
        <h2>CEP: {cep.cep}</h2>

        <span>{cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
      </main>
    )}
    
      

    </div>
  );
}

export default App;
