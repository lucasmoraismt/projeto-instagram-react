export default function Suggestion(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={`assets/img/${props.nick}.svg`} alt={props.nick} />
        <div className="texto">
          <div className="nome">{props.nick}</div>
          <div className="razao">{props.status}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}
