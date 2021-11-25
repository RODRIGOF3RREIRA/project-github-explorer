import { Container } from "./styles";

export function User() {
  return (
    <Container>
      <img
        src="https://github.com/rodrigof3rreira.png"
        alt="Rodrigo Ferreira"
      />
      <h1>Rodrigo Ferreira</h1>
      <h2>Rodrigo Ferreira</h2>
      <p>Bio do Usuário</p>

      <section>
        <div>
          <strong>12</strong>
          <span>Repositórios</span>
        </div>

        <div>
          <strong>12</strong>
          <span>Seguidores</span>
        </div>

        <div>
          <strong>12</strong>
          <span>Seguindo</span>
        </div>
      </section>
    </Container>
  );
}
