import Hero from "./componentes/hero";
import HistoriaSection from "./componentes/HistoriaSection";
import Evento from "./componentes/Evento";
import ConfirmarAsistencia from "./componentes/ConfirmarAsistencia";
import RegaloYDespedida from "./componentes/RegaloYDespedida";
import MusicPlayer from "./componentes/MusicPlayer";

function App() {
  return (
    <div className="bg-[#f9fafb]">
      <MusicPlayer />
      <Hero />
      <HistoriaSection />
      <Evento />
      <ConfirmarAsistencia />
      <RegaloYDespedida />
    </div>
  );
}

export default App;
