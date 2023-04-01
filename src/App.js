import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">

      <div className="app__videos">
      <Video 
        likes={100}
        messages={200}
        shares={300}
        name="Lucas Bento"
        description="Gato Determinado"
        music="Musica épica"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
      />

      <Video 
        likes={120}
        messages={230}
        shares={334}
        name="Marcus Wallace"
        description="Para bens"
        music="Clap Hands"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
      />


      </div>

    </div>
  );
}

export default App;
