export default function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={`assets/img/${props.nick}.svg`} alt={props.nick} />
      </div>
      <div class="usuario">{props.nick}</div>
    </div>
  );
}