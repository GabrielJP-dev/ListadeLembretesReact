import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  //URL API
  const baseUrl = "https://localhost:7126/api/lembrete"

  const [data, setData] = useState([]);

  const [lembrete, setLembrete] = useState({
    nome: '',
    data: ''
  })

  //Requisição GET
  const pedidoGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    pedidoGet();
  }, []);

  // Função para agrupar lembretes pela mesma data e ordená-los
  const agruparLembretes = () => {
    const grupos = {};
    data.forEach(lembrete => {
      const dataFormatada = new Date(lembrete.data);
      if (!grupos[dataFormatada]) {
        grupos[dataFormatada] = [];
      }
      grupos[dataFormatada].push(lembrete);
    });

    // Ordenar os grupos pela data
    const chavesOrdenadas = Object.keys(grupos).sort((a, b) => new Date(a) - new Date(b));

    const gruposOrdenados = {};
    chavesOrdenadas.forEach(chave => {
      gruposOrdenados[chave] = grupos[chave];
    });
    return gruposOrdenados;
  };

  // Função para renderizar os lembretes agrupados
  const renderizarLembretes = () => {

    const gruposLembretes = agruparLembretes();
    return Object.entries(gruposLembretes).map(([data, lembretes]) => (
      <div className='grupo-lembretes' key={data}>
        <h4>{new Date(data).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</h4>
        <ol>
          {lembretes.map(lembrete => (
            <li key={lembrete.nome}>
              {lembrete.nome}
              <button onClick={() => pedidoDelete(lembrete)}> <span className="trash-icon"></span></button>
            </li>
          ))}
        </ol>
      </div>
    ));
  };

  //Função para atribuir valor aos lembretes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLembrete({
      ...lembrete,
      [name]: value
    });
  };

  //Função para verificar se a data está correta
  const validarDados = (input) => {
    const dataInput = new Date(input.data);
    const nomeInput = input.nome;
    

    // Verifica se a data foi preenchida e também se o mês tem aquele dia. Por exemplo, não deixa ir com a data 31 de fevereiro.
    if (isNaN(dataInput.getTime()) || nomeInput === "") {
      alert("Por favor, preencha os campos corretamente.");
      return false;
    }

    const dataAtual = new Date();

    // Verifica se a data está no passado
    if (dataInput < dataAtual) {
      alert("A data não pode estar no passado.");
      return false;
    }

    return true;
  };

  //Função para limpar todos os inputs após o usuário inserir novo
  const limparCampos = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    this.setState({
      itemvalues: [{}]
    });
  };

  //Metodo post
  const handleAdicionar = () => {
    // Verifica a validade da data antes de enviar a solicitação POST
    if (validarDados(lembrete)) {
      //Requisição POST
      axios.post(baseUrl, lembrete)
        .then(response => {
          setData(data.concat(response.data));
          alert("Lembrete adicionado com sucesso!");
          limparCampos();
        }).catch(error => {
          console.log(error);
        });
    }
  };

  //Metodo DELETE
  const pedidoDelete = async (lembrete) => {
    await axios.delete(baseUrl + "/" + lembrete.nome)
      .then(response => {
        // Filtra os lembretes para remover aquele com o nome igual ao lembrete excluído
        setData(data.filter(item => item.nome !== lembrete.nome));
      }).catch(error => {
        console.log(error);
      })
  }

  return (
    <div className="App">

      <header className="App-header">
        <h1 id='titulo'>Meus Lembretes</h1>

        <div className='Container'>
          <div>
            <label>Título:</label>
          </div>

          <div>
            <input type='text' placeholder='Digite sua tarefa' id='Name' className='input' name="nome" onChange={handleChange}></input>
          </div>

          <div>
            <label>Data:</label>
          </div>

          <div>
            <input type='date' id='Data' className='input' name="data" onChange={handleChange}></input>
          </div>

          <div>
            <button onClick={handleAdicionar}>Adicionar</button>

          </div>
        </div>



      </header>

      <section className='container-lembretes'>{renderizarLembretes()}</section>


    </div>
  );
}

export default App;
