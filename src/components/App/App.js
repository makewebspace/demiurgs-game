import './App.css';
import Card from "../Card/Card";
import {
  DeadCell,
  LivingCell,
  LifeCell,
} from "../../logic/entities";

const cells = [
  DeadCell,
  LivingCell,
  LifeCell,
];

function App() {
  const toComponent = ({ id, title, description, icon }, idx) => {
    return <Card key={`${idx}-${id}`}
                 title={title}
                 description={description}
                 icon={icon}
           />;
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Клеточное наполнение</h1>
      </header>
      <main className="App-main">
        { cells.map(toComponent) }
      </main>
      <footer className="App-footer">
        <button className="App-FAB">Cотворить</button>
      </footer>
    </div>
  );
}

export default App;
