export default function Suggestion(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={`assets/img/${props.nick}.svg`} alt={props.nick} />
        <div class="texto">
          <div class="nome">{props.nick}</div>
          <div class="razao">{props.status}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}
