import './App.css';
import Navbar from './components/Navbar';
import Screen from './components/Screen';
import Sidebar from './components/Sidebar';
import NoteState from './context/notes/NoteState';
import LoadingBar from 'react-top-loading-bar'
function App() {
 
  return (
  <>
  <NoteState>
    <Navbar />
    <Sidebar/>
    <Screen/>
  </NoteState>
  </>
  );
}

export default App;
