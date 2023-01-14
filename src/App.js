import './App.css';
import AddTask from './Components/AddTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListTasks from './Components/ListTasks';

function App() {
  return (
    <div>
      <h1 className='todo'>TODO LIST</h1>
      <div className='bod'>
      <ListTasks/>
      </div>
      <br/>
      <AddTask/>
    </div>
  );
}

export default App;

