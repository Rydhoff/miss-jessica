import Hero from './components/Hero';
import Appreciation from './components/Appreciation';
import Journey from './components/Journey';
import Messages from './components/Messages';
import Legacy from './components/Legacy';
import Closing from './components/Closing';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="min-h-screen bg-beige">
      <Hero />
      <Appreciation />
      <Journey />
      <Messages />
      <Legacy />
      <Closing />
      <MusicPlayer />
    </div>
  );
}

export default App;
