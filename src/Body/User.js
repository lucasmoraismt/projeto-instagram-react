export default function User(props) {
  return (
    <div class="usuario">
      <img src={`assets/img/${props.nick}.svg`} alt={props.nick} />
      <div class="texto">
        <strong>{props.nick}</strong>
        {props.name}
      </div>
    </div>
  );
}
