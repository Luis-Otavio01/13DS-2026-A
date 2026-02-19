import "./App.css";

import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";
const App = () => {
  return (
    <div id="App">
      <img
        id="Logo"
        src={logo}
        alt="logo da plataforma de streaming DEVFLIX, destaque vermelho e preto, ideal para quem busca serviços de streaming de filmes e séries."
      />
      <div className="search">
        <input type="text" placeholder="Pesquisar filmes, séries e mais..." />
        <img role="button" src={lupa} alt="Botão de ação para pesquisa!" />
      </div>
      <Rodape link={"https://github.com/Luis-Otavio01"}>Batata</Rodape>
    </div>
  );
};

export default App;
