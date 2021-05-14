export default function User(props) {
  return (
    <div className="usuario">
      <img src={`assets/img/${props.nick}.svg`} alt={props.nick} />
      <div className="texto">
        <strong>{props.nick}</strong>
        {props.name}
      </div>
    </div>
  );
}
