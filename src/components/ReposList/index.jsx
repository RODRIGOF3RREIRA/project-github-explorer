import { FiArrowLeft } from "react-icons/fi";
import { Container } from "./styles";

export function ReposList() {
  return (
    <Container>
      <div>
        <button type="button">
          <FiArrowLeft />
          Voltar
        </button>
        <h1>Repositórios de fulano</h1>
      </div>

      <ul>
        <li>
          <h2>Nome do repo</h2>
          <p>Desc do repo</p>
          <a href="/">Acessar repo</a>
        </li>
      </ul>
    </Container>
  );
}
