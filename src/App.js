import './App.css';
import SinglePage from './components/single-page';
import samplePdf from './sample.pdf';

function App() {
  return (
    <div className="App">
      <SinglePage
        pdf={samplePdf}
      />
    </div>
  );
}

export default App;
