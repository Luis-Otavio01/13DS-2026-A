import { useEffect, useState } from "react";
import "./App.css";

import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";
const App = () => {
  const [movies, setMovies] = useState([]);

  //Utilizando uma CHAVE de API do arquivo .env
  const apiKey = import.meta.env.VITE_APP_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //Criando a conexão com a API e trazendo informações
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    //Alimentando a variavel movies
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

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

      <div className="container">
        {movies.map((movie) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      <Rodape link={"https://github.com/Luis-Otavio01"}>Batata</Rodape>
    </div>
  );
};

export default App;
