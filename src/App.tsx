import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from "react-router-dom";

import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import LoadingBar from "./components/LoadingBar";

import { LoadingProvider } from "./contexts/LoadingContext";
import "./styles/global.scss";

const App: React.FC = () => {
  return (
    <LoadingProvider>
      <LoadingBar />
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:name" element={<PokemonDetail />} />
          </Routes>
        </div>
      </Router>
    </LoadingProvider>
  );
};

export default App;
