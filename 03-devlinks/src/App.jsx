import './App.css'
import Link from './components/Link/Link';
import Perfil from './components/Perfil/Perfil'
import SocialLink from './components/SocialLink/SocialLink';

function App() {
  return (
    <div id="App">
      <Perfil fotoPerfil={"https://placehold.co/100"}>Batata</Perfil>

      <div className="switch">botão switch</div>

      <div className="links">
      <ul>
        <Link url={""}>Inscreva-se</Link>
        <Link url={""}>Minha playlist</Link>
        <Link url={""}>Me pague um café!</Link>
        <Link url={""}>Conheça o Curso DEV</Link>
      </ul>
      </div>
      <div className="socialLinks">
      <SocialLink url={"https://github.com/"} icon={"logo-github"}/>
      <SocialLink url={"https://instagram.com/"} icon={"logo-instagram"}/>
      <SocialLink url={"https://youtube.com/"} icon={"logo-youtube"}/>
      <SocialLink url={"https://br.linkedin.com/"} icon={"logo-linkedin"}/>
       </div>
      <div className="rodape"></div>
    </div>
  );
};

export default App;
