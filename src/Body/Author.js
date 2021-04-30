export default function Author(props) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={`assets/img/${props.nick}.svg`} alt={props.nick} />
        {props.nick}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}