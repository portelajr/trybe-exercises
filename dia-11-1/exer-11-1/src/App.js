import logo from './logo.svg';
import './App.css';

const listTasks = ['exercicios react', 'retirar o lixo', 'varrer a varanda'];

const task = (value) => {
  
  const listados = value.map((iten) => {
    return (
      <li>{iten}</li>
    );
  })

  return listados;
  
}

function App() {
  return (
  <div>  
  <h1>React dia 11.1</h1>
    <div>
      <ol>
      {task(listTasks)}
      </ol>
    </div>
  </div>
  );
}

export default App;
