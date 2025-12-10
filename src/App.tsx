import './App.css';
import { nodes } from './app/mockgraph';

function App() {
  return (
    <div>
      <h1>Relative – Node List</h1>
      <ul>
        {nodes.map((node) => (
          <li key={node.id}>
            <strong>{node.name}</strong>
            {node.contents && <p>{node.contents}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
