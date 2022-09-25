import '../assets/css/views/App.scss';
import NameBox from '../components/NameBox';

function App() {
  return (
    <div className="App">
      <h1>A test repository!</h1>
      <NameBox name="Test User" description="I'm new here! Nice to meet you :)" />
      <NameBox name="New Intern" description="I'm learning React right now!" />
    </div>
  );
}

export default App;
