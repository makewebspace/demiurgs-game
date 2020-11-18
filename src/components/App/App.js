import './App.css';
import { useState, useEffect, useRef } from 'react';
import Card from "../Card/Card";
import updateState from '../../logic';

export const TITLE_TEXT = 'Клеточное наполнение';
export const FAB_TEXT = 'Cотворить';
export const CELL_LIST_ID = 'cellList';

function App() {
  const mainEl = useRef(null);
  const [cellList, setCellList] = useState([]);
  const handleClick = () => setCellList(updateState(cellList));
  const toComponent = (props, idx) => <Card key={idx} testId={idx} {...props}/>;
  useEffect(() => {
    const cardList = mainEl.current.children;
    const lastElement = cardList[cardList.length - 1];
    lastElement && lastElement.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{TITLE_TEXT}</h1>
      </header>
      <main className="App-main" ref={mainEl} data-testid={CELL_LIST_ID}>
        { cellList.map(toComponent) }
      </main>
      <footer className="App-footer">
        <button className="App-FAB" onClick={handleClick}>
          {FAB_TEXT}
        </button>
      </footer>
    </div>
  );
}

export default App;
