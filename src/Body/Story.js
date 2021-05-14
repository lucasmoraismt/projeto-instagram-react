export default function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={`assets/img/${props.nick}.svg`} alt={props.nick} />
      </div>
      <div className="usuario">{props.nick}</div>
    </div>
  );
}
